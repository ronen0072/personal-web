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
                <ProjectList favorites={this.state.toDisplaFfavorites} />
                <button className="bold-link" onClick={this.handleClick}>{this.state.toDisplaFfavorites? "More projects" : "Less projects"}</button>
                <CreateProject/>
            </div>
        );
    }


}
export default Projects