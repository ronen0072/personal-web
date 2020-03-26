import React from 'react';
import {FavoriteProject} from './FavoriteProject';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import EditProject from './EditProject';
// state= {name: '',info: '',date:''};
//     initState = (name,info,date)=>{
//         name,
//         info,
//         date
//     }
class Project extends FavoriteProject{
    displayImg = ()=>{
        const project = this.props;
        return(
            <div id={"img_"+project.id } style={{
                backgroundImage: "url("+this.publicURL+(project && project.imgFileName)+".jpg )",
            }} className="favoriteProject-img favoriteProject-img-initiali">
            </div>
        )
    };

    displayMoreInfo = ()=>{
    };
    displayWebURL = ()=>{
        let project = this.props;
        if(project &&  (project.webURL && project.webURL !== '')){
            return(
                <span className="no-padding">
                    <a
                        href={project.webURL}
                        className="btn-style btn-project  vertical-text modal-trigger" style={{zIndex: "2"}}>to view</a>
                </span>
            )
        }
    };
    displayGithubURL = ()=>{
        let project = this.props;
        if(project && (project.githubURL && project.githubURL !== '')){
            return(
                <span className={"no-margin no-padding"}  >
                    <a href={project.githubURL} className="btn-style btn-project modal-trigger " style={{zIndex: '3'}}><i className="fab fa-github padding-little"/></a>
                </span>
            )
        }
    };
    displayEdit = ()=>{
        let project = this.props;
        if(project && (project.githubURL && project.githubURL !== '')){
            return(
                <span className={"no-margin no-padding"} style={{zIndex: '1'}}>
                    <EditProject project={project} className="btn-style btn-project" />
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
                {this.displayEdit()}
            </div>
        )
    };
    displayContent = ()=>{
        const project = this.props;
        return(
            <p className="project-info">{project && project.content}</p>      
        )
    };
    render(){
        const project = this.props;
        return(
            <Section className="row no-margin">
                < button className="modal-close btn-floating fixed-in-right close"><i className="material-icons">close</i></button>
                {/*<div className="col s1 m1 l1 no-padding">*/}
                    {this.displayNavBtn()}
                {/*</div>*/}
                <div className="project-wrapper">
                    <div className="col s12 m12 l5">
                        <div className='row'>
                            {this.displayTitle()}
                            {this.displayDate()}
                        </div>
                        <div className='row'>
                            {this.displayImg()}
                            <div>
                                {this.displayListOfIcons(project.languages && project.languages.concat(project.libraries), true)}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12 l7 no-padding">
                            {this.displayContent()}
                    </div>
                </div>
            </Section>
        )
  
    }
    
  }
  const mapStateToProps =(state)=>{
    return{
        state: state,
        ...state.project.projectToDisplay
    }
  };
  export default connect(mapStateToProps)(Project);