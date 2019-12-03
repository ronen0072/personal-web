import React from 'react';
import {ProjectSummary} from './ProjectSummary'
import { connect } from 'react-redux'
// state= {name: '',info: '',date:''};
//     initState = (name,info,date)=>{
//         name,
//         info,
//         date
//     }
class Project extends ProjectSummary{
    displayMoreInfo = ()=>{
    }
    displayImg = ()=>{
        const project = this.props.project;
        return(
            <img id="project-img" src={"http://localhost:3000/img/"+(project && project.imgFileName)+".JPG"} className='responsive-img' />
        )
    }
    render(){
        const project = this.props.project;
        return(
            <div className="row white margin">
                <a className="modal-close btn-floating fixed-in-right close"><i className="material-icons">close</i></a>
                <div className="col s12 m12 l5">
                    <div className='row'>
                        <div className='col s11'>
                            {this.displayTitle()}
                        </div>    
                        <div className='col s1'>
                            <a className="btn-floating edit"><i className="material-icons">edit</i></a>
                        </div>
                    </div>
                    <div>
                        {this.displayListOfIcons((project && project.languages))}
                        {this.displayDate()}
                    </div>
                </div>
                <div className="col s12 m12 l7 ">
                    <div>
                        {this.displayImg()}
                    </div>
                </div>
                <div className="col">
                    {this.displayContent()} 
                    {this.displayNavBtn()}
                </div>   
            </div>  
        )
  
    }
    
  }
  const mapStateToProps =(state)=>{
    return{
        Gstate: state,
        project: state.project.projectToDisplay
    }
  }
  export default connect(mapStateToProps)(Project);