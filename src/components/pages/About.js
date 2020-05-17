import React, {Fragment} from 'react';
import Section from '../layout/Section';
import Carousel from '../layout/Carousel';
import {Icons} from '../utils/Icons';

const About = (props) => {
    const {changeSelection} = props;
    return (
        <Fragment>
            <div className="my-container page about">
                <Section className="section-padding">
                    <h2 className="title">About Me</h2>
                    <div className="row no-margin">
                        <div className="col s12 m12 l6 xl7 about-info">
                            <p>
                                I am a software developer and a Computer Science B.Sc graduate, Ben-Gurion University.
                                These days I am looking for a job as a Developer, preferably a Full Stack position.
                                I am a technology fan, I really enjoy learning new things and facing new challenges.
                            </p>
                            <p className="no-margin-top-bottom">
                                Experience working with Linux systems <i className="fab fa-linux skils-icon"/> and
                                git <i className="fab fa-github skils-icon"/>.
                                <br/>
                                <h6 className="home-color sub-title display-inline">IDE:</h6>Visual Studio, Eclipse,
                                Atom, Anaconda, Intellij, CLion.<br/>
                                You can view works on my <button className="link"
                                                                 onClick={() => changeSelection(1)}>projects</button> or
                                my <a className="link" href='https://github.com/ronen0072'>github <i
                                className="fab fa-github link"/></a>.
                            </p>
                        </div>
                        <div className="col s12 m12 l6 xl5">
                            <div className="row no-margin about-skills">
                                <p>
                                    <h4 className="no-margin-top-bottom home-color sub-title">skills:</h4>
                                    <div className="col s12 m6 ">
                                        <h5 className="home-color sub-title">Languages: </h5>
                                        <ul>
                                            <li><Icons name="Java" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="JavaScript" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="NodeJS" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="HTML5" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="CSS" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="MongoDB" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="Python" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="C" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="C++" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                        </ul>
                                    </div>
                                    <div className="col s12 m6">
                                        <h5 className="home-color sub-title">Libraries and Frameworks: </h5>
                                        <ul>
                                            <li><Icons name="React" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="Redux" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="jQuery" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="Material Ui" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="Materialize" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="express" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="openGL" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>
                                            <li><Icons name="Keras" iconClassName="skills-icon"
                                                       iconClassNaneTitle="skills-title"/></li>

                                        </ul>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
                </Section>
            </div>
            <div className="my-container page more-about">
                <Section className="no-padding">
                    <div className="row">
                        <div className={'col hobbies-title'}>
                            <h4 className="title">More About Me</h4>
                        </div>
                        <Carousel/>

                    </div>
                </Section>
            </div>
        </Fragment>
    )
};
export default About