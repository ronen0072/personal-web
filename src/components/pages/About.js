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
                    <p>My name is Ronen Finish and I'm Software/Web Developer, Bachelor of Science in Computer Science, Ben-Gurion University,  Be’er Sheva.  Graduated in 2019.
                    In these days I’m seeking a position as a Developer, which will integrate my passion for technology with my programming knowledge and out of the box thinking. 
                    </p>
                    <h5 className="no-margin-top-bottom home-color">Skils:</h5>
                    <p className="no-margin-top-bottom">strong team player with great work ethics and entrepreneurial mind set. I’m a very inquisitive person and an autodidact. <br/> 
                    Experience working with <i titel="Java" className="fab fa-linux skils-icon"/> Linux systems and git <i titel="Java" className="fab fa-github skils-icon"/>. </p>
                    <div className="row no-margin">
                        <div className="col s12 m3">
                            <h6 className="home-color sub-title">Languages: </h6>
                            <ul>
                                <li><Icons name="Java" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="JavaScript" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="NodeJS" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="HTML5" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="CSS" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="MongoDB" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="Python" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="C" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="C++" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="Assembly x86/x87 64bit" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                            </ul>
                        </div>
                        <div className="col s12 m7">
                            <h6 className="home-color sub-title">Libraries and Frameworks: </h6>
                            <ul>
                                <li><Icons name="React" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="Redux" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="jQuery" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="Materialize" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="openGL" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>
                                <li><Icons name="Keras" iconClassName="skills-icon" iconClassNaneTitle="skills-icon-title"/></li>

                            </ul>
                        </div>
                    </div>
                    
                    <h5 className="home-color sub-title display-inline">IDE:</h5>Visual Studio, Eclipse, Atom, Anaconda, Intellij, CLion.<br/>
                    You can view works on my <button className="link" onClick={() => changeSelection(1)}>projects</button> or my <a className="link" href='https://github.com/ronen0072'>github <i titel="Java" className="fab fa-github link"/></a>.<br/><br/>
                </Section>
                    
                <Section className="no-padding">
                    <div className="row">
                        <div className="col s12 m7 section-padding">
                            <h4 className="title">More About Me</h4>
                            <p className="">
                            I have a lot of hobbies, one of them is BMX biking for about 12 years and one of the founders of a crew of local riders.
                            Our name is B7MX it's the Compound of Beer Seven (B7) and BMX which is the sport we love.
                            Every year we organize events in goal of advancing the field in Israel and I run our  <a className="link" href='https://www.instagram.com/b7mx_crew/'>instagram page <i titel="Java" className="fab fa-instagram link"/></a> .
                            </p>
                            <p className="">
                            Another hobby that unfortunately doesn't happen enough is surfing on a snowboard that I do once a year.
                            </p>
                            <p className="">
                            I also really enjoy creating digital and regular art and building things myself,
                             as a kid I used to work a lot in Photoshop, nowadays less but still uses those skills sometimes.
                              I like to build things from wood, to draw and create things.                            </p>
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