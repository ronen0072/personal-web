import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import FavoriteProject from './FavoriteProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectList extends Component {
    getFavorites(){
        let favoritesProjects
        if(this.props.projects){
            favoritesProjects = this.props.projects;//.filter((project)=>{return(project.favorite==='true')});
            if(favoritesProjects.length !== 3) {
                console.log('there are less than 3 favorites Projects!!!' ) 
            }
        }
        return favoritesProjects;
    }
    displayFavoritesProjects(){
        const projects =  this.getFavorites();
        return(
            <div className="project-list row">
                {projects && projects.map( (project, index)=>{
                    let addToClass = '';
                    if(index%2===1) {addToClass = "favorite-margin";}
                    return(
                        <span key={project.id} className={addToClass}>
                            <FavoriteProject     
                                index={index}
                               project={project} 
                           /> 
                        </span>
                    )
                })}
            </div>
        )
    }
    displayAllProjects(){
        const projects = this.props.projects;
        return(
            <div className="project-list row">
                {projects && projects.map( (project, index)=>{
                    let addToClass = '';
                    if(index%2===0) {addToClass = " push-l1";}
                    //else{ addToClass = " pull-l1";}
                    return(
                        <div  key={project.id}  className={"col l11"+addToClass}>
                            <ProjectSummary 
                                index={index} 
                                project={project} 
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
    render(){
        if(this.props.favorites){
            return this.displayFavoritesProjects();
        }else{
            return this.displayAllProjects();
         }
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        //projects: state.project.projects
        projects: state.firestore.ordered.projects
    };
}

export default compose(
connect(mapStateToProps),
firestoreConnect([
    { collection: 'projects' }
])
)(ProjectList)