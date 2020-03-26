import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {ProjectSummary} from './ProjectSummary'
import EditProject from './EditProject'
import {Icons, isIcons} from "../utils/Icons";

export class FavoriteProject extends ProjectSummary{
    handleClick = ()=>{
        const project = this.props;
        this.props.projectToDisplay(project);
    };
    displayListOfIcons = (list, displayAnyway) =>{
        return(
            <Fragment>
                {list && list.map((item,index)=>{
                    if(displayAnyway||isIcons(item)){
                        return(
                            <Icons key={index} name={item} iconClassName="project-skills-icon"/>
                        )
                    }
                    else {
                        return null;
                    }
                })}
            </Fragment>

        )
    };
    displayImg = ()=>{
        const project = this.props;
        return(
            <div id={"img_"+project.id } style={{
                backgroundImage: "url("+this.publicURL+(project && project.imgFileName)+".jpg )",
                }} className="favoriteProject-img favoriteProject-img-initiali">
                <EditProject project={project}/>
            </div>
        )
    };
    onHover = ()=>{
        let className = "favorite-Project-info";
        let img = document.getElementById("img_"+this.props.id);
        let info = document.getElementById("info-"+this.props.id);
        info.classList.remove(className+'-out');
        info.classList.remove(className+'-initiali');
        info.classList.add(className+'-in');
        img.classList.remove('favoriteProject-img-out');
        img.classList.remove('favoriteProject-img-initiali');
        img.classList.add('favoriteProject-img-in');
        };
    onblur= ()=>{
        let className = "favorite-Project-info";
        let img = document.getElementById("img_"+this.props.id);
        let info = document.getElementById("info-"+this.props.id);

        info.classList.remove(className+'-in');
        info.classList.add(className+'-out');
        img.classList.remove('favoriteProject-img-in');
        img.classList.add('favoriteProject-img-out');
    };
    displayContent = ()=>{
        const project = this.props;
        return(
            <div className="favorite-Project-info-wrapper">
                <p id={"info-"+project.id} className="favorite-Project-info favorite-Project-info-initiali">{project && project.content}</p>
            </div>


        )
    };
    render(){
        // console.log(this.props);
        const project = this.props;
        return(
            <div className={this.props.className+"void-padding favoriteProject "} onTouchStart={this.onHover} onMouseEnter={this.onHover} onTouchEnd={this.onblur} onMouseLeave={this.onblur}>
                {this.displayImg()}
                <div className="halfway">
                    {this.displayListOfIcons(project.languages.concat(project.libraries), false)}
                </div>
                <div className="content-padding white">
                    <div className="favoriteTitle">
                        {this.displayTitle()}
                    </div>
                    {this.displayContent()}
                </div>
                {this.displayNavBtn()}
            </div>
        )
    }
}const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'PROJECT_TO_DISPLAY', project }),
    }
  };
export default connect(null, mapDispatchToProps)(FavoriteProject);
///  <div onMouseEnter={this.onHover} onMouseLeave={this.onblur} style={{verticalAlign: "top"}}>