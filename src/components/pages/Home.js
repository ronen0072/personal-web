import React from 'react';
import { Link } from 'react-router-dom'
import ProjectList from '../projects/ProjectList'
import Section from '../layout/Section';
const Home = () => {
    return(
        <div className='my-container page'>
            <Section className="section-padding">
                <h4 className="title">Home</h4>
                <p>Hi My name is Ronen Finish and I'm Software/Web Developer, Bachelor of Science in Computer Science, Ben-Gurion University,  Be’er Sheva.  Graduated in 2019 for more information check out <Link className="link" to='/about'>About Me</Link> page</p>
            </Section>
            <ProjectList favorites='true'/>  
        </div>
    )
}
export default Home