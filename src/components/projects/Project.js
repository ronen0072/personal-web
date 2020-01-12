import React from 'react';
import {FavoriteProject} from './FavoriteProject';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import EditProject from './EditProject';
// state= {name: '',info: '',date:''};
//     initState = (name,info,date)=>{
//         name,
//         info,
//         date
//     }
class Project extends FavoriteProject{
    displayMoreInfo = ()=>{
    };
    // displayImg = ()=>{
    //     const project = this.props;
    //     return(
    //         <img id="project-img" src={this.publicURL+(project && project.imgFileName)+".jpg"} className='responsive-img' alt="project img" />
    //     )
    // };
    displayContent = ()=>{
        const project = this.props;
        return(
            <p className="project-info">{project && project.content}</p>      
        )
    };
    render(){
        const project = this.props;
        return(
            <Section className="row no-margin">
                < button className="modal-close btn-floating fixed-in-right close"><i className="material-icons">close</i></button>
                <div className="col s12 m12 l5">
                    <div className='row'>
                        <div className='col s10'>
                            {this.displayTitle()}
                        </div>    
                        <div className='col s1'>
                            <EditProject project={project}/>
                        </div>
                    </div>
                    <div>
                        {this.displayImg()}
                        <div className="halfway">
                            {this.displayListOfIcons(project.languages)}
                        </div>
                        {this.displayDate()}
                        {this.displayNavBtn()}
                    </div>
                </div>
                <div className="col s12 m12 l7 ">
                    <div>
                        {this.displayContent()}

                    </div>
                </div>
            </Section>
        )
  
    }
    
  }
  const mapStateToProps =(state)=>{
    return{
        Gstate: state,
        ...state.project.projectToDisplay
    }
  };
  export default connect(mapStateToProps)(Project);