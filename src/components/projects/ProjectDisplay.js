import React, {useState, useEffect, Fragment}from 'react';
import { connect } from 'react-redux';
import Section from '../layout/Section';
import moment from 'moment'; 
import {Icons, isIcons} from '../utils/Icons';
import EditProject from './EditProject';
import Swiper from "react-id-swiper";

function ProjectDisplay(props){
    const  publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";
    const [h,setH] = useState('500px');
    const [infoClassName,setInfoClassName] = useState('favorite-Project-info-initiali');
    const [imgClassName,setImgClassName] = useState('favoriteProject-img-initiali');

    useEffect(() => {
        if(props.displayContent){

        }


    }, [props.displayContent]);
    const handleClick = (e)=>{
        const project = props;
        props.projectToDisplay(project);
    };
    const     displayListOfIcons = (list, displayAnyway) =>{
        return(
            <Fragment>
                {list && list.map((item,index)=>{
                    if(displayAnyway||isIcons(item)){
                        return(
                            <Icons key={index} name={item} iconClassName="project-skills-icon" iconClassNaneTitle="project-skills-title"/>
                        )
                    }
                    else {
                        return null;
                    }
                })}
            </Fragment>

        )
    };
    const displayTitle = ()=>{
        const project = props;
        return(
            <div>
                <h3 className='project-title display-inline'>{project && project.title}</h3>
                <h5 className='project-sub-title grey-text display-inline'>{project && project.sub_title}</h5>    
            </div>        
        )
    };
    const displayImg = ()=>{
        const project = props;
        return(
            <div style={{
                backgroundImage: "url("+publicURL+(project && project.imgFileName)+".jpg )",
            }} className={"favoriteProject-img " + imgClassName}>
                {props.displayContent && <EditProject project={project}/>}
            </div>
        )
    };

    const displayMoreInfo = ()=>{
        let project = props;
        let width = " col s12";
        if(project && (project.githubURL && project.githubURL !== '')){
            width = " col s6";
        }
        if(project && project.webURL && project.webURL !== '') {
            width = " col s4";
        }
        return(
            <div className={"no-padding" + width} >
                <a onClick={handleClick} href="#project" className="btn-style modal-trigger">more info</a>
            </div>
        )
    };
    const displayWebURL = ()=>{
        let project = props;
        let width = " col s6 btn-style-right";
        if(project && (project.githubURL && project.githubURL !== '')){
            width = " col s4";
        }
        if(project &&  (project.webURL && project.webURL !== '')){
            return(
                <div className={"no-padding" + width}>
                    <a
                        href={project.webURL}
                       className="btn-style modal-trigger">Open</a>
                </div>
            )
        }
    };
    const displayGithubURL = ()=>{
        let project = props;
        let width = " col s6 btn-style-right";
        if(project && project.webURL && project.webURL !== '') {
            width = " col s4 btn-style-center";
        }
        if(project && (project.githubURL && project.githubURL !== '')){
            return(
                <div className={"no-padding"+width}>
                    <a href={project.githubURL} className="btn-style modal-trigger"><i className="fab fa-github padding-little"/></a>
                </div>
            )
        }
    };
    const displayNavBtn = ()=>{
        return(
            <div className="favorites-project-NavBtn center row">
                {displayMoreInfo()}
                {displayGithubURL()}
                {displayWebURL()}
            </div>
        )
    };
    const displayDate = ()=>{
        let project = props;
        if(project && project.date ){
            return(
                <div id="project-date" className="grey-text">{moment(project && project.date.toDate()).calendar()}</div>
            )
        }
    };
    const displayContent = ()=>{
        const project = props;
        return(
            <div className="favorite-Project-info-wrapper">
                <p id={"info-"+project.id} className={'favorite-Project-info ' + infoClassName}>{project && project.content}</p>
            </div>


        )
    };
    // return(
    //     <div onMouseOver={()=>{setH('300px')}} onMouseOut={()=>{setH('500px')}}>
    //         <img src={publicURL+props.imgName} style={{height: h}}/>
    //         <div style={{height: '100px'}}>
    //         </div>
    //     </div>
    // );

    const onHover = ()=>{
        if(props.displayContent){
            setInfoClassName('favorite-Project-info-in');
            setImgClassName('favoriteProject-img-in');
        }
    };

    const onblur= ()=>{
        setInfoClassName('favorite-Project-info-out');
        setImgClassName('favoriteProject-img-out');
    };
    if(props.id)
    return(
       <div className={props.className+" void-padding favoriteProject "} onTouchStart={onHover} onMouseOver={onHover} onTouchEnd={onblur} onMouseLeave={onblur}>
           {displayImg()}
           <div className="halfway">
               {displayListOfIcons(props.languages.concat(props.libraries), false)}
           </div>
           <div className="content-padding white">
               <div className="favoriteTitle">
                   {displayTitle()}
               </div>
               {displayContent()}
           </div>
           {displayNavBtn()}

       </div>
    )
    else return null

}
const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) =>  dispatch({ type: 'PROJECT_TO_DISPLAY', project }),
    }
  };
export default connect(null, mapDispatchToProps)(ProjectDisplay);