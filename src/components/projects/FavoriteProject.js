import React from 'react';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import {ProjectSummary} from './ProjectSummary'
import EditProject from './EditProject'

class FavoriteProject extends ProjectSummary{
    displayImg = ()=>{
        const project = this.props.project;
        return(
            <div style={{  
                backgroundImage: "url("+this.publicURL+(project && project.imgFileName)+".jpg )",
                }} className="favoriteProject-img">
                <EditProject project={project}/>
            </div>
        )
    }
    displayGithubURL = ()=>{
        let webURL = this.props.project.webURL;
        if(!webURL || webURL === ''){
            let githubURL = this.props.project.githubURL;
            if(githubURL && githubURL !== ''){
                return(
                    <a href={githubURL} className="btn btn-style modal-trigger"><i className="fab fa-github padding-little"></i></a>       
                )
            }
        }
    }
    render(){
        //console.log(this.props.project)
        const project = this.props.project;
        return(
            <Section className="favoriteProject">
                <div className="row void-section">
                    {this.displayImg()}
                    <div className="halfway">
                        {this.displayListOfIcons(project.languages)}
                    </div>
                </div>
                <div className="row">
                        {this.displayTitle()}
                        {this.displayContent()}
                        {this.displayNavBtn()}
                
                </div> 
            </Section>  
        )
    }
}const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'POJECT_TO_DISPLAY', project }),
    }
  }
export default connect(null, mapDispatchToProps)(FavoriteProject);