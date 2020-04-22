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
                    <h5 className="no-margin-top-bottom home-color sub-title">Skils:</h5>

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
                                <li><Icons name="Materialize" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="express" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="openGL" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>
                                <li><Icons name="Keras" iconClassName="skills-icon" iconClassNaneTitle="skills-title"/></li>

                            </ul>
                        </div>
                    </div>
                    <br/>
                    <p className="no-margin-top-bottom">
                        Experience working with Linux systems <i titel="Java" className="fab fa-linux skils-icon"/> and git <i titel="Java" className="fab fa-github skils-icon"/>.
                    </p>
                    <h5 className="home-color sub-title display-inline">IDE:</h5>Visual Studio, Eclipse, Atom, Anaconda, Intellij, CLion.<br/>
                    You can view works on my <button className="link" onClick={() => changeSelection(1)}>projects</button> or my <a className="link" href='https://github.com/ronen0072'>github <i titel="Java" className="fab fa-github link"/></a>.<br/><br/>
                </Section>
                    
                <Section className="no-padding">
                    <div className="row">
                        <div className="col s12 m7 section-padding">
                            <h4 className="title">More About Me</h4>
                            <p>
                                After a long day at the office I love work in the garden and build things from wood.
                                My favorite sports are snowboarding and BMX; I have formed a crew: B7MX,
                                Our name is the combination of Beer Seven (B7) and BMX which is the sport we love.
                                Every year we organize events in goal of advancing the field in Israel in particular in the city,
                                we worked with the municipality toward building a bike park and I run our  <a className="link" href='https://www.instagram.com/b7mx_crew/'>instagram page <i titel="Java" className="fab fa-instagram link"/></a> .
                                One of the important things I learned from the field and helped me in life, is that even when you fall,
                                get up, analyze the mistake and try again and again to success without concessions.
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