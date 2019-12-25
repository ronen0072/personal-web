import React, {Component}from 'react';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import moment from 'moment'; 
import Icons from '../utils/Icons';
import EditProject from './EditProject';

export class ProjectSummary extends Component{
    handlClick = (e)=>{
        const project = this.props.project;
        this.props.projectToDisplay(project);
    }
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
    }
    displayTitle = ()=>{
        const project = this.props.project;
        return(
            <div>
                <h3 className='project-title display-inline'>{project && project.title}</h3>
                <h5 className='project-sub-title grey-text display-inline'>{project && project.sub_title}</h5>    
            </div>        
        )
    }
    displayImg = ()=>{
        const project = this.props.project;
        return(
            <div style={{  
            backgroundImage: "url("+this.publicURL+( project && project.imgFileName)+".jpg )",
            }} className="project-summary-img">
                <EditProject project={project}/>
            </div>
        )
    }
    displayContent = ()=>{
        const project = this.props.project;
        return(
            <p className="summary-info-project">{project && project.content}</p>      
        )
    }
    displayMoreInfo = ()=>{
        return(
            <a onClick={this.handlClick} href="#project" className="btn btn-style modal-trigger">more info</a>
        )
    }
    displayWebURL = ()=>{
        let project = this.props.project;
        if(project &&  project.webURL && project.webURL !== ''){
            return(
                <a href={project.webURL} className="btn btn-style modal-trigger">to view</a>       
            )
        }
    }
    displayGithubURL = ()=>{
        let project = this.props.project;
        if(project && project.githubURL && project.githubURL !== ''){
            return(
                <a href={project.githubURL} className="btn btn-style modal-trigger"><i className="fab fa-github padding-little"></i></a>       
            )
        }
    }
    displayNavBtn = ()=>{
        const project = this.props.project;
        // let colSize = 12;
        // if(project && project.githubURL && project.githubURL !== ''){
        //     colSize -=2;
        // }
        let gitClass = ' float-right'
        if(project && project.webURL && project.webURL !== ''){
            //colSize = colSize/2;
            gitClass = ' center'
        }
        return(
            <div className="center">
                <span className="no-padding float-left">
                    {this.displayMoreInfo()}
                </span>
                <span className={"no-padding"+gitClass}>
                    {this.displayGithubURL()}
                </span>
                <span className="no-padding float-right">
                    {this.displayWebURL()}
                </span>
            </div>
        )
    }
    displayDate = ()=>{
        let project = this.props.project;
        if(project && project.date ){
            return(
                <p id="project-date" className="grey-text">{moment(project && project.date.toDate()).calendar()}</p>
            )
        }
    }
    render(){
        const project = this.props.project;
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
                        {this.displayNavBtn()}
                    </div>
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
                        {this.displayNavBtn()}
                    </div>
                </Section>  
            )
        }
    } 
}
const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'POJECT_TO_DISPLAY', project }),
    }
  }
export default connect(null, mapDispatchToProps)(ProjectSummary);