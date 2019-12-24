import React from 'react';
import ProjectList from '../projects/ProjectList'
import CreateProject from '../projects/CreateProject'

const Projects = () => {
    return(
        <div className="my-container page">
            <CreateProject/>
            <ProjectList /> 


        </div>
    )
}
export default Projects