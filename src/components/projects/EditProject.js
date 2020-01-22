import React from 'react';
import { connect } from 'react-redux';
import Modal from '../layout/Modal';
import { updateProject } from '../../store/actions/projectActions';
import CreateProject from './CreateProject';
import ItemsList from '../utils/ItemsList';

class EditProject extends CreateProject {
  state ={};
  handleOpen = () => {
    // console.log( "---------------------------------------------------------------------");
    // console.log("(this.props.languages !== this.state.languages):",(this.props.project.languages !== this.state.languages));
    // console.log(this.props.project);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  componentDidMount = ()=>{
    this.setState({
      ...this.props.project
    })
  };

  addToList = (listName, item) => {
    let newList = [...(this.state[listName]), item];
    this.setState({
      [listName]: newList
    })
  };
  removeFromList = (listName, removeItem) => {
    let newList = this.state[listName].filter((item)=>{return removeItem !== item});
    this.setState({
      [listName]: newList
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(this.state);

    this.props.updateProject(this.state);
  };
  render() {
    const project = this.props.project;
    let className = this.props.className? this.props.className : "btn-floating edit";
    // console.log("project to edit");
    // console.log(project);
    // console.log((this.state && this.state.languages));
    //(this.state.languages && this.props.addItems('languages',[], this.state.languages));
    //this.props.addItems('libraries',[],(this.state && this.state.languages));
    return (
      (!this.props.isLogin)? 
        null
      :
      <div>
        <a href={"#"+(project && project.id)} onClick={this.handleOpen} className={"modal-close modal-trigger "+className}><i className="material-icons">edit</i></a>
        <Modal trigger={(project && project.id)}>
          <div className="padding">
            <form className="" onSubmit={(this.handleSubmit ) }>
              <div className="row">
                <h5 className="grey-text text-darken-3">Edit {this.state.title} Project</h5>
                <div className="input-field">
                  <input  type="text" name='title' defaultValue={this.state.title} onChange={this.handleChange} />
                  <label className="active" htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                  <input type="text" name='sub_title' defaultValue={this.state && this.state.sub_title} onChange={this.handleChange} />
                  <label className="active" htmlFor="sub_title">Project sub Title</label>
                </div>
                <div className="input-field">
                  <textarea name="content"  defaultValue={this.state && this.state.content} className="materialize-textarea" onChange={this.handleChange}/>
                  <label className="active" htmlFor="content">Project Content</label>
                </div>
                <div className="row no-padding">
                  <ItemsList id='languages_list' listName="languages" list={this.state.languages} add={this.addToList} remove={this.removeFromList}/>
                  <ItemsList id='libraries_list' listName="libraries" list={this.state.libraries} add={this.addToList} remove={this.removeFromList}/> 
                </div>
                <div className="input-field">
                    <input type="url" name='webURL' defaultValue={this.state && this.state.webURL} onChange={this.handleChange} />
                    <label className="active" htmlFor="webURL">web URL</label>
                </div>
                <div className="input-field">
                    <input type="url" name='githubURL' defaultValue={this.state && this.state.githubURL} onChange={this.handleChange} />
                    <label className="active" htmlFor="githubURL">githab URL</label>
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 modal-close">Update</button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: !state.firebase.auth.isEmpty
  }
};
const mapDispatchToProps = dispatch => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);