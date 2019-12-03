import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import ItemsList from '../utils/ItemsList';

class CreateProject extends Component {
  state = {
    title: '',
    sub_title: '',
    content: '',
    githubURL:'',
    webURL:'',
    language_to_add: '',
    librarie_to_add: '',
    languages:[],
    libraries:[]
    
  }
   
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleClick = (e) => {
    let item, list;
    if(e.target.id === 'languages'){
      item = this.state.language_to_add;
      list = this.props.languages;
    }
    else{
      item = this.state.librarie_to_add;
      list = this.props.libraries;
    }
    this.props.addItem(e.target.id ,list, item);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.state.languages = this.props.languages;
    this.state.libraries = this.props.libraries;
    this.props.createProject(this.state);
  }
  render() {
    return (
      <div className="padding">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="row">
            <h5 className="grey-text text-darken-3">Create a New Project</h5>
            <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Project Title</label>
            </div>
            <div className="input-field">
              <input type="text" id='sub_title' onChange={this.handleChange} />
              <label htmlFor="sub_title">Project sub Title</label>
            </div>
            <div className="input-field">
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="content">Project Content</label>
            </div>
            <div className="input-field">
                <input type="url" id='webURL' onChange={this.handleChange} />
                <label htmlFor="webURL">web URL</label>
            </div>
            <div className="input-field">
                <input type="url" id='gitURL' onChange={this.handleChange} />
                <label htmlFor="gitURL">githab URL</label>
            </div>
            <div className="row no-padding">
              <div className="input-field col s11 m5 no-padding">
                <textarea id="language_to_add" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="language_to_add">Language</label>
                <ItemsList id='languages_list'/>
              </div>
              <div className="input-field col s1">
                <a onClick={this.handleClick} className="btn-floating pink"><i id="languages" className="material-icons">add</i></a>
              </div>
              <div className="input-field col s11 m5 no-padding">
                <textarea id="librarie_to_add" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="librarie_to_add">Libraries</label>
                 <ItemsList id='libraries_list'/> 
              </div>
              <div className="input-field col s1">
                <a onClick={this.handleClick} className="btn-floating pink"><i id="libraries" className="material-icons">add</i></a>
              </div>  
            </div>
   
            <div className="input-field">
              <button className="btn pink lighten-1 modal-close">Create</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.itemsList.languages,
    libraries: state.itemsList.libraries,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    addItem: (listName, list, item) => dispatch({ type: 'ADD_ITEM', listName, list, item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);