import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import ProjectList from '../projects/ProjectList'
import About from './About';
import Section from '../layout/Section';
const Home = () => {
    return(
        <div className='home'>
            <div className='my-container page'>
                <div className="section-padding">
                    <p>Hi My name is Ronen Finish and I'm Software/Web Developer, Bachelor of Science in Computer Science, Ben-Gurion University,  Be’er Sheva.  Graduated in 2019 for more information check out <Link className="link" to='/about'>About Me</Link> page</p>
                </div>
                {/*<ProjectList favorites='true'/>*/}
                {/*<About/>*/}
            </div>
        </div>
    )
}
export default Home