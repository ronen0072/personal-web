import React, {Component}from 'react';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import moment from 'moment'; 
import Icons from '../utils/Icons';
import EditProject from './EditProject';

export class ProjectSummary extends Component{
    handlClick = (e)=>{
        const project = this.props;
        this.props.projectToDisplay(project);
    };
    publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";

    displayListOfIcons = (list) =>{
       return(
           <div>
                {list && list.map((item,index)=>{
                    return(
                        <Icons key={index} name={item} className="brand"/>
                    )
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
                <a onClick={this.handlClick} href="#project" className="btn-style modal-trigger">more info</a>
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
                       className="btn-style modal-trigger">to view</a>
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
                    <a href={project.githubURL} className="btn-style modal-trigger"><i className="fab fa-github padding-little"></i></a>
                </span>
            )
        }
    };
    displayNavBtn = ()=>{
        return(
            <div className="project-NavBtn center">
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
                            {this.displayListOfIcons(project.languages)}
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
                            {this.displayListOfIcons(project.languages)}
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
        projectToDisplay: (project) =>  dispatch({ type: 'POJECT_TO_DISPLAY', project }),
    }
  };
export default connect(null, mapDispatchToProps)(ProjectSummary);