import React from 'react';
import Section from '../layout/Section';
import Carousel from '../layout/Carousel';
import {Icons} from '../utils/Icons';

const About = (props) => {
    const { changeSelection } = props;
    return(
        <div className="my-container page">
                <Section className="section-padding">
                    <h4 className="title">About Me</h4>

                    <p>
                        I am a software developer and a Computer Science B.Sc graduate, Ben-Gurion University.
                        In these days I am looking for a job as a Developer, preferably a Full Stack position.
                        I am a technology fan, really enjoy learning new things and facing challenges.
                    </p>
                    <h5 className="no-margin-top-bottom home-color sub-title">skills:</h5>

                    <div className="row no-margin">
                        <div className="col s12 m7 l4">
                            <h6 className="home-color sub-title">Languages: </h6>
                            <ul>
                                <li><Icons name="Java" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="JavaScript" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="NodeJS" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="HTML5" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="CSS" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="MongoDB" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Python" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="C" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="C++" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Assembly x86/x87 64bit" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                            </ul>
                        </div>
                        <div className="col s12 m4 l8">
                            <h6 className="home-color sub-title">Libraries and Frameworks: </h6>
                            <ul>
                                <li><Icons name="React" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Redux" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="jQuery" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Material Ui" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Materialize" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="express" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="openGL" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Keras" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>

                            </ul>
                        </div>
                    </div>
                    <br/>
                    <p className="no-margin-top-bottom">
                        Experience working with Linux systems <i  className="fab fa-linux skils-icon"/> and git <i className="fab fa-github skils-icon"/>.
                    </p>
                    <h5 className="home-color sub-title display-inline">IDE:</h5>Visual Studio, Eclipse, Atom, Anaconda, Intellij, CLion.<br/>
                    You can view works on my <button className="link" onClick={() => changeSelection(1)}>projects</button> or my <a className="link" href='https://github.com/ronen0072'>github <i className="fab fa-github link"/></a>.<br/><br/>
                </Section>
                    
                <Section className="no-padding">
                    <div className="row">
                        <div className="col s12 m7 section-padding">
                            <h4 className="title">More About Me</h4>
                            <p>
                                After a long day at the office I love to work in the garden and Build furniture.
                                My favorite sports are snowboarding and BMX; I have formed the: B7MX crew,
                                a group of local riders in the city of Beer Sheva.
                                We worked with the municipality toward building a bike park.
                                Every year we organize events to promote the field in Israel and I run our
                                <a className="link" href='https://www.instagram.com/b7mx_crew/'> instagram page <i className="fab fa-instagram link"/></a> .
                                <br/>
                                An important lesson that I have learned from my years of experience with extreme sports is that persistence and determination will take you far even if you fall down (a lot and break bones) along the way.
                                I apply this lesson in my life.
                            </p>

                        </div>
                        <div className="col s12 m5 no-padding">
                            <Carousel/>
                        </div>
                  </div>
                </Section>
           </div>
    )
};
export default About