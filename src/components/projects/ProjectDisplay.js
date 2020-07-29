import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {Icons, isIcons} from '../utils/Icons';
import EditProject from './EditProject';
import publicURL from '../../publicURL'

function ProjectDisplay(project) {
    const [isHover, setIsHover] = useState(false);
    const [infoClassName, setInfoClassName] = useState('project-display-info-initiali');
    const [imgClassName, setImgClassName] = useState('project-display-img-initiali');

    useEffect(() => {
        if (!project.displayContent) {
            onblur();
        }

    }, [project.displayContent]);
    const handleClick = () => {
        project.projectToDisplay(project);
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
            <div className={'project-display-title content-padding white'}>
                <h2 className='project-title display-inline'>{project && project.title}</h2>
                <br/>
                <h4 className='project-sub-title grey-text display-inline'>{project && project.sub_title}</h4>
            </div>
        )
    };
    const displayImg = () => {
        return (
            <Fragment>
                <div style={{
                    backgroundImage: "url(" + publicURL() + (project && project.imgFileName) + ".jpg )",
                }} className={"project-display-img " + imgClassName}>
                    {(project.editable && project.displayContent) && <EditProject project={project}/>}
                </div>
                <div className={'project-display-img-effect'}>
                </div>
            </Fragment>
        )
    };

    const displayMoreInfo = () => {
        let width = " col s12";
        if (project && (project.githubURL && project.githubURL !== '')) {
            width = " col s6";
        }
        if (project && project.webURL && project.webURL !== '') {
            width = " col s4";
        }
        return (
            <div className={"no-padding" + width}>
                <a onClick={handleClick} href="#project" className="btn-style modal-trigger">more info</a>
            </div>
        )
    };
    const displayWebURL = () => {
        let width = " col s6 btn-style-right";
        if (project && (project.githubURL && project.githubURL !== '')) {
            width = " col s4";
        }
        if (project && (project.webURL && project.webURL !== '')) {
            return (
                <div className={"no-padding" + width}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.webURL}
                        className="btn-style modal-trigger">Open</a>
                </div>
            )
        }
    };
    const displayGithubURL = () => {
        let width = " col s6 btn-style-right";
        if (project && project.webURL && project.webURL !== '') {
            width = " col s4 btn-style-center";
        }
        if (project && (project.githubURL && project.githubURL !== '')) {
            return (
                <div className={"no-padding" + width}>
                    <a target="_blank" rel="noopener noreferrer" href={project.githubURL}
                       className="btn-style modal-trigger"><i
                        className="fab fa-github padding-little"/></a>
                </div>
            )
        }
    };
    const displayNavBtn = () => {
        return (
            <div className="project-display-NavBtn center row">
                {displayMoreInfo()}
                {displayGithubURL()}
                {displayWebURL()}
            </div>
        )
    };

    const displayContent = () => {
        return (
            <div className="project-display-info-wrapper content-padding white">
                <p id={"info-" + project.id}
                   className={'project-display-info ' + infoClassName}>{project && project.content}</p>
            </div>
        )
    };

    const onHover = () => {
        if (project.displayContent) {
            setInfoClassName('project-display-info-in');
            setImgClassName('project-display-img-in');
            setIsHover(true);
        }

    };

    const onblur = () => {
        if (isHover) {
            setInfoClassName('project-display-info-out');
            setImgClassName('project-display-img-out');
        }
        setIsHover(false);
    };
    if (project.id)
        return (
            <div className={'project-display-background'}>
                <div className={project.className + " void-padding project-display "} onTouchStart={onHover}
                     onMouseOver={onHover} onMouseLeave={onblur}>
                    {displayImg()}
                    <div className="tech-icon white">
                        {displayListOfIcons(project.languages.concat(project.libraries), false)}
                    </div>
                    {displayTitle()}
                    {displayContent()}
                    {displayNavBtn()}

                </div>
            </div>
        );
    else return null

}

const mapDispatchToProps = dispatch => {
    return {
        projectToDisplay: (project) => dispatch({type: 'PROJECT_TO_DISPLAY', project}),
    }
};


export default connect(null, mapDispatchToProps)(ProjectDisplay);