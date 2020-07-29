import React, {Fragment} from 'react';
import Section from '../layout/Section';
import HobbiesCarousel from '../layout/HobbiesCarousel';
import {Icons} from '../utils/Icons';
import LazyLoad from "react-lazy-load";

const About = (props) => {
    const {changeSelection} = props;
    return (
        <Fragment>
            <LazyLoad offset={500}>
            <div className='my-container page about'>
                <Section className='section-padding'>
                    <h2 className='title' data-aos="fade-right" data-aos-duration="800">About Me</h2>
                    <div className='row no-margin'>
                        <div className='col s12 m12 l6 xl7 about-info' data-aos="zoom-in" data-aos-duration="800">
                            <p>
                                I am a software developer and a Computer Science B.Sc graduate, Ben-Gurion University.
                                These days I am looking for a job as a Developer, preferably a Full Stack position.
                                I am a technology fan, I really enjoy learning new things and facing new challenges.
                            </p>
                            <p>
                                Experience working with Linux systems <i className='fab fa-linux skils-icon'/> and
                                git <i className='fab fa-github skils-icon'/>.
                                <br/>
                                <h6 className='home-color sub-title display-inline'>IDE:</h6>Visual Studio, Eclipse,
                                Atom, Anaconda, Intellij, CLion.<br/>
                                You can view works on my <button className='link'
                                                                 onClick={() => changeSelection(1)}>projects</button> or
                                my <a target="_blank" rel="noopener noreferrer" className='link' href='https://github.com/ronen0072'>github <i
                                className='fab fa-github link'/></a>.
                                <br/>
                                <a target="_blank" rel="noopener noreferrer" className="gold-btn" href='/Ronen Finish CV.pdf' >Download CV</a>
                            </p>
                        </div>
                        <div className='col s12 m12 l6 xl5'>
                            <div className='row no-margin about-skills' data-aos="fade-up"
                                 data-aos-anchor-placement="center-bottom" data-aos-duration="800">
                                <p>
                                    <h3 className='no-margin-top-bottom home-color sub-title skills-title'>skills:</h3>
                                    <div className='col s12 m6'>
                                        <h5 className='home-color sub-title '>Languages: </h5>
                                        <ul>
                                            <li><Icons name='Java' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='JavaScript' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='NodeJS' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='HTML5' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='CSS' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='MongoDB' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='Python' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='C' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='C++' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                        </ul>
                                    </div>
                                    <div className='col s12 m6'>
                                        <div  className={'skills-libraries'}>
                                        <h5 className='home-color sub-title skills-libraries-title'>
                                            Libraries & Frameworks:
                                        </h5>
                                        <ul>
                                            <li><Icons name="React" iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='Redux' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='jQuery' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='Keras' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name='Material Ui' iconClassName='skills-icon'
                                                       iconClassNaneTitle="skill-title"/></li>
                                            <li><Icons stroke="black" name='Materialize' iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name="express" iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>
                                            <li><Icons name="openGL" iconClassName='skills-icon'
                                                       iconClassNaneTitle='skill-title'/></li>


                                        </ul>
                                    </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
                </Section>
            </div>
            </LazyLoad>
            <div className={'hobbies-title'}>
                <h2 className='title'>More About Me</h2>
            </div>
            <HobbiesCarousel/>
        </Fragment>
    )
};
export default About