import React, { Component } from 'react';
import FavoriteProject from './FavoriteProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectList extends Component {
    getFavorites(){
        let favoritesProjects;
        if(this.props.projects){
            favoritesProjects = this.props.projects.filter((project)=>{return(project.favorite === true)});
            if(favoritesProjects.length !== 3) {
                console.log('there are less than 3 favorites Projects!!!' ) 
            }
        }
        return favoritesProjects;
    }
    //0 1 2
    //3 4 5
    //6 7 8
    displayFavoritesProjects(){
        const projects = this.getFavorites();
        return(
            <div className="Favorites-projects-list">
                {projects && projects.map( (project, index)=>{
                    let addToClass = '';
                    if(index%3===1) {addToClass = "favorite-margin ";}
                    return(
                            <FavoriteProject
                                key={project.id}
                                className={"project-col "+addToClass}
                               index={index}
                               {...project}
                           />
                    )
                })}
            </div>
        )
    }
    displayAllProjects(){
        const projects = this.props.projects;
        return(
            <div className="Favorites-projects-list">
                {projects && projects.map( (project, index)=>{
                    let addToClass = '';
                    if(index%3===1) {addToClass = "favorite-margin ";}
                    return(
                        <FavoriteProject
                            key={project.id}
                            className={"project-col "+addToClass}
                            index={index}
                            {...project}
                        />
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
    console.log('state: ',state);
    return{
        //projects: state.project.projects
        projects: state.firestore.ordered.projects && state.firestore.ordered.projects.sort((p1, p2)=>{return p1.numOrder - p2.numOrder})
    };
};

export default compose(
connect(mapStateToProps),
firestoreConnect([
    { collection: 'projects' }
])
)(ProjectList)