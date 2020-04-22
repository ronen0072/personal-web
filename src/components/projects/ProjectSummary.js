import React, {Component}from 'react';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import moment from 'moment'; 
import {Icons, isIcons} from '../utils/Icons';
import EditProject from './EditProject';

export class ProjectSummary extends Component{
    publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";
    handleClick = (e)=>{
        const project = this.props;
        this.props.projectToDisplay(project);
    };
    displayListOfIcons = (list, displayAnyway) =>{
       return(
           <div>
                {list && list.map((item,index)=>{
                    console.log(item+": ",isIcons(item));
                    if(displayAnyway||isIcons(item)){
                        return(
                            <Icons key={index} name={item} className="project-skills-icon"/>
                        )
                    }
                    else {
                        return null;
                    }
                })}
           </div>
       )
    };
    displayTitle = ()=>{
        const project = this.props;
        return(
            <div>
                <h3 className='project-title display-inline'>{project && project.title}</h3>
                <h5 className='project-sub-title grey-text display-inline'>{project && project.sub_title}</h5>    
            </div>        
        )
    };
    displayImg = ()=>{
        const project = this.props;
        return(
            <div style={{  
            backgroundImage: "url("+this.publicURL+( project && project.imgFileName)+".jpg )",
            }} className="project-summary-img">
                <EditProject project={project}/>
            </div>
        )
    };
    displayContent = ()=>{
        const project = this.props;
        return(
            <p id={"info-"+project.id} className="summary-info-project">{project && project.content}</p>
        )
    };
    displayMoreInfo = ()=>{
        let project = this.props;
        let width = "100%";
        if(project && (project.githubURL && project.githubURL !== '')){
            width = "49.75%";
        }
        if(project && project.webURL && project.webURL !== '') {
            width = "33%";
        }
        return(
            <span className="no-padding float-left" style={{ width: width}}>
                <a onClick={this.handleClick} href="#project" className="btn-style modal-trigger">more info</a>
            </span>
        )
    };
    displayWebURL = ()=>{
        let project = this.props;
        let width = "33%";
        if(project &&  (project.webURL && project.webURL !== '')){
            return(
                <span className="no-padding float-right" style={{ width: width}}>
                    <a
                        href={project.webURL}
                       className="btn-style modal-trigger">Open</a>
                </span>
            )
        }
    };
    displayGithubURL = ()=>{
        let project = this.props;
        let floatTo = ' float-right';
        let width = "49.75%";
        if(project && project.webURL && project.webURL !== '') {
            floatTo = ' float-center';
            width = "33%";
        }
        if(project && (project.githubURL && project.githubURL !== '')){
            return(
                <span className={"no-padding"+floatTo} style={{ width: width}}>
                    <a href={project.githubURL} className="btn-style modal-trigger"><i className="fab fa-github padding-little"/></a>
                </span>
            )
        }
    };
    displayNavBtn = ()=>{
        return(
            <div className="favorites-project-NavBtn center">
                {this.displayMoreInfo()}
                {this.displayGithubURL()}
                {this.displayWebURL()}
            </div>
        )
    };
    displayDate = ()=>{
        let project = this.props;
        if(project && project.date ){
            return(
                <div id="project-date" className="grey-text">{moment(project && project.date.toDate()).calendar()}</div>
            )
        }
    };
    render(){
        const project = this.props;
        if(this.props.index%2===1){
            return(
                <Section className="row no-padding">
                    <div className="col s12 m12 l4 xl5 white void-padding">
                        {this.displayImg()}
                        <div className="to-bottom">
                            {this.displayListOfIcons(project.languages.concat(project.libraries), false)}
                        </div>
                    </div>
                    <div className="col s12 m12 l8 xl7 padding">
                        {this.displayTitle()}
                        {this.displayContent()}

                    </div>
                    {this.displayNavBtn()}
                </Section>  
            )
        }
        //push-l8 push-xl7  offset-s1
        else{
            return(
                <Section className="row no-padding">
                    <div className="col s12 m12 l4 xl5 white void-padding push-l8 push-xl7">
                        {this.displayImg()}
                        <div className="to-bottom">
                            {this.displayListOfIcons(project.languages.concat(project.libraries), false)}
                        </div>
                    </div>
                    <div className="col s12 m12 l8 xl7 padding pull-l4 pull-xl5">
                        {this.displayTitle()}
                        {this.displayContent()}

                    </div>
                    {this.displayNavBtn()}
                </Section>  
            )
        }
    } 
}
const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'PROJECT_TO_DISPLAY', project }),
    }
  };
export default connect(null, mapDispatchToProps)(ProjectSummary);