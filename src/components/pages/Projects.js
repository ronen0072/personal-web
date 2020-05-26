import React, {Fragment} from 'react';
import ProjectList from '../projects/ProjectList'
import CreateProject from '../projects/CreateProject'

function Projects(props) {
    return (
        <Fragment>
            <CreateProject/>
            <ProjectList />

        </Fragment>
    );
}

export default Projects