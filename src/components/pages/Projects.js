import React from 'react';
import ProjectList from '../projects/ProjectList'
import CreateProject from '../projects/CreateProject'
import Modal from '../layout/Modal'

const Projects = () => {
    return(
        <div className="my-container page">
            <a href="#create-project" className="btn-floating pink modal-trigger"><i className="material-icons">add</i></a>
            <ProjectList /> 
            <Modal trigger='create-project'>
                <CreateProject/>
            </Modal>    
        </div>
    )
}
export default Projects