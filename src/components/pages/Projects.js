import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList'
import CreateProject from '../projects/CreateProject'

class Projects extends Component{
    state = {
        toDisplaFfavorites : true
    };
    handleClick = ()=>{
        const { changeSelection } = this.props;
        changeSelection(1);
        this.setState({
            toDisplaFfavorites : !this.state.toDisplaFfavorites
        })
    };
    render() {
        return(
            <div className="my-container">
                {/*<h4 className="title">Projects</h4>*/}
                <CreateProject/>
                <ProjectList favorites={this.state.toDisplaFfavorites} />

            </div>
        );
    }


}
export default Projects