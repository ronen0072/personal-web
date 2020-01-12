import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import {ProjectSummary} from './ProjectSummary'
import EditProject from './EditProject'

export class FavoriteProject extends ProjectSummary{
    displayImg = ()=>{
        const project = this.props;
        return(
            <div id={"img_"+project.id } style={{
                backgroundImage: "url("+this.publicURL+(project && project.imgFileName)+".jpg )",
                }} className="favoriteProject-img">
                <EditProject project={project}/>
            </div>
        )
    };
    onHover = ()=>{
        let className = "favorite-Project-info";
        let img = document.getElementById("img_"+this.props.id);
        let info = document.getElementById("info-"+this.props.id);
        info.classList.remove(className+'-out');
        info.classList.remove(className);
        info.classList.add(className+'-in');
        img.classList.remove('favoriteProject-img-out');
        img.classList.remove('favoriteProject-img');
        img.classList.add('favoriteProject-img-in');
        };
    onblur= ()=>{
        let className = "favorite-Project-info";
        let img = document.getElementById("img_"+this.props.id);
        let info = document.getElementById("info-"+this.props.id);

        info.classList.remove(className+'-in');
        info.classList.add(className);
        info.classList.add(className+'-out');
        img.classList.remove('favoriteProject-in');
        img.classList.add('favoriteProject-img');
        img.classList.add('favoriteProject-img-out');
    };
    displayContent = ()=>{
        const project = this.props;
        return(
            <div className="favorite-Project-info-wrapper">
                <div className="inset-box-shadow">
                </div>
                <p id={"info-"+project.id} className="favorite-Project-info">{project && project.content}</p>
            </div>


        )
    };
    render(){
        console.log(this.props);
        const project = this.props;
        return(
            <Section className={this.props.className+"void-padding favoriteProject "} onMouseEnter={this.onHover} onMouseLeave={this.onblur}>
                <div className="">
                    <div className="" >
                        {this.displayImg()}
                        <div className="halfway">
                            {this.displayListOfIcons(project.languages)}
                        </div>
                    </div>
                    <div className="content-padding">
                        <div className="favoriteTitle" >
                            {this.displayTitle()}
                        </div>
                        {this.displayContent()}
                    </div>
                </div>

                {this.displayNavBtn()}
            </Section>
        )
    }
}const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'POJECT_TO_DISPLAY', project }),
    }
  }
export default connect(null, mapDispatchToProps)(FavoriteProject);
///  <div onMouseEnter={this.onHover} onMouseLeave={this.onblur} style={{verticalAlign: "top"}}>