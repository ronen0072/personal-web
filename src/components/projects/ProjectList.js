import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectsSwiper from './ProjectsSwiper';

class ProjectList extends Component {

    render(){
        return <ProjectsSwiper projects={this.props.projects}/>
    }
}
const mapStateToProps = (state)=>{
    return{
        projects: state.firestore.ordered.projects && state.firestore.ordered.projects.sort((p1, p2)=>{return p1.numOrder - p2.numOrder})
    };
};

export default compose(
connect(mapStateToProps),
firestoreConnect([
    { collection: 'projects' }
])
)(ProjectList)