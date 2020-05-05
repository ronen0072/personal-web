import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Section from '../layout/Section';
import EditProject from './EditProject';
import moment from "moment";
import {Icons, isIcons} from "../utils/Icons";

const publicURL = "https://ronen-finish-personal-web.firebaseapp.com/img/";

function Project(project) {
    const displayImg = () => {

        return (
            <img className="project-img" id={"img_" + project.id}
                 src={publicURL + (project && project.imgFileName) + ".jpg"} alt={project.title}/>
        );
    };

    const displayListOfIcons = (list, displayAnyway) => {
        return (
            <Fragment>
                {list && list.map((item, index) => {
                    if (displayAnyway || isIcons(item)) {
                        return (
                            <Icons key={index} name={item} iconClassName="project-skills-icon"
                                   iconClassNaneTitle="project-skills-title"/>
                        )
                    } else {
                        return null;
                    }
                })}
            </Fragment>

        )
    };

    const displayTitle = () => {
        return (
            <div>
                <h3 className='project-title display-inline'>{project && project.title}</h3>
                <h5 className='project-sub-title grey-text display-inline'>{project && project.sub_title}</h5>
            </div>
        )
    };

    const displayDate = () => {
        if (project && project.date) {
            return (
                <div id="project-date" className="grey-text">last update: {moment(project && project.date.toDate()).calendar()}</div>
            )
        }
    };

    const displayWebURL = () => {
        if (project && (project.webURL && project.webURL !== '')) {
            return (
                <span className="no-padding">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.webURL}
                        className="btn-style btn-project  vertical-text modal-trigger" style={{zIndex: "2"}}>Open</a>
                </span>
            )
        }
    };
    const displayGithubURL = () => {

        if (project && (project.githubURL && project.githubURL !== '')) {
            return (
                <span className={"no-margin no-padding"}>
                    <a target="_blank" rel="noopener noreferrer" href={project.githubURL} className="btn-style btn-project modal-trigger "
                       style={{zIndex: '3'}}><i className="fab fa-github padding-little"/></a>
                </span>
            )
        }
    };
    const displayEdit = () => {
        if (project && (project.githubURL && project.githubURL !== '')) {
            return (
                <span className={"no-margin no-padding"} style={{zIndex: '1'}}>
                    <EditProject project={project} className="btn-style btn-project"/>
                </span>
            )
        }
    };
    const displayNavBtn = () => {
        return (
            <div className="project-NavBtn center">
                {displayGithubURL()}
                {displayWebURL()}
                {displayEdit()}
            </div>
        )
    };
    const displayContent = () => {
        return (
            <div className="project-info">
                {project && project.content}
                {displayLinks()}
            </div>
        )
    };
    const displayLinks = () => {
        const links = project.links;
        if (links)
            return (
                links.map(link => {
                    return (
                        <Fragment>
                            <a target="_blank" rel="noopener noreferrer" href={link.URL} className="link">
                                {link.name}
                            </a>
                            <br/>
                        </Fragment>
                    )
                })
            )
    };

    return (
        <Section className="row no-margin">
            < button className="modal-close btn-floating fixed-in-right close"><i className="material-icons">close</i>
            </button>
            {/*<div className="col s1 m1 l1 no-padding">*/}
            {displayNavBtn()}
            {/*</div>*/}
            <div className="project-wrapper">
                <div className='row'>
                        {displayTitle()}
                </div>
                <div className='row'>
                    <div className="col s12 m12 l5 no-padding">
                        {displayImg()}
                        <div>
                            {displayListOfIcons(project.languages && project.languages.concat(project.libraries), true)}
                        </div>
                    </div>
                    <div className="col s12 m12 l7 no-padding">
                        {displayContent()}
                    </div>
                    <div className="col s12 no-padding">
                        {displayDate()}
                    </div>
                </div>
            </div>
        </Section>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        ...state.project.projectToDisplay
    }
};
export default connect(mapStateToProps)(Project);