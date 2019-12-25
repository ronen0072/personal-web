import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../layout/Modal'
import { createProject } from '../../store/actions/projectActions';
import ItemsList from '../utils/ItemsList';

class CreateProject extends Component {
  state = {
    title: '',
    sub_title: '',
    content: '',
    githubURL:'',
    webURL:'',
    languages:[],
    libraries:[]
    
  }
   
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addToList = (listName, item) => {
    let newList = [...(this.state[listName]), item];
    this.setState({
      [listName]: newList
    })
  }
  removeFromList = (listName, removeItem) => {
    let newList = this.state[listName].filter((item)=>{return removeItem !== item});
    this.setState({
      [listName]: newList
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  }
  render() {
    return(
      (!this.props.isLogin)? 
       null
       :
      <div>
        <a href="#create-project" className="btn-floating pink modal-trigger"><i className="material-icons">add</i></a>
        <Modal trigger='create-project'>
          <div className="padding">
            <form className="" onSubmit={this.handleSubmit}>
              <div className="row">
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                  <input type="text" name='title' onChange={this.handleChange} />
                  <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                  <input type="text" name='sub_title' onChange={this.handleChange} />
                  <label htmlFor="sub_title">Project sub Title</label>
                </div>
                <div className="input-field">
                  <textarea name="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                  <label htmlFor="content">Project Content</label>
                </div>
                <div className="row no-padding">
                  <ItemsList id='languages_list' listName="languages" list={this.state.languages} add={this.addToList} remove={this.removeFromList}/>
                  <ItemsList id='libraries_list' listName="libraries" list={this.state.libraries} add={this.addToList} remove={this.removeFromList}/> 
                </div>
                <div className="input-field">
                    <input type="url" name='webURL' onChange={this.handleChange} />
                    <label htmlFor="webURL">web URL</label>
                </div>
                <div className="input-field">
                    <input type="url" inamed='gitURL' onChange={this.handleChange} />
                    <label htmlFor="gitURL">githab URL</label>
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 modal-close">Create</button>
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
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);