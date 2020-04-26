import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {ProjectSummary} from './ProjectSummary'
import EditProject from './EditProject'
import {Icons, isIcons} from "../utils/Icons";

export class FavoriteProject extends ProjectSummary{
    state = {
        infoClassName: 'favorite-Project-info-initiali',
        imgClassName: 'favoriteProject-img-initiali',
    };
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
                            <Icons key={index} name={item} iconClassName="project-skills-icon" iconClassNaneTitle="project-skills-title"/>
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
                }} className={"favoriteProject-img " + this.state.imgClassName}>
               {this.props.display && <EditProject project={project}/>}
            </div>
        )
    };

    onHover = ()=>{
        if(this.props.display)
            this.setState({
                infoClassName: 'favorite-Project-info-in',
                imgClassName: 'favoriteProject-img-in'
            });
    };

    onblur= ()=>{
        if(this.props.display)
            this.setState({
                infoClassName: 'favorite-Project-info-out',
                imgClassName: 'favoriteProject-img-out'
            });
    };

    displayContent = ()=>{
        const project = this.props;
        return(
            <div className="favorite-Project-info-wrapper">
                <p id={"info-"+project.id} className={'favorite-Project-info ' + this.state.infoClassName}>{project && project.content}</p>
            </div>


        )
    };
    render(){
        // console.log(this.props);
        const project = this.props;
        return(
            <div className={this.props.className+" void-padding favoriteProject "} onTouchStart={this.onHover} onMouseEnter={this.onHover} onTouchEnd={this.onblur} onMouseLeave={this.onblur}>
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