import React from 'react';

const Home = (props) => {
    const { changeSelection } = props;
    return(
        <div className='home'>
            <div className='my-container'>
                <div className="section-padding no-padding-left-right">
                    <p>Hi my name is Ronen Finish and I'm Software/Web Developer, Bachelor of Science in Computer Science, Ben-Gurion University,  Be’er Sheva.  Graduated in 2019 for more information check out <button className="link" onClick={() => changeSelection(2)}>About Me</button> section</p>
                </div>
                {/*<ProjectList favorites='true'/>*/}
                {/*<About/>*/}
            </div>
        </div>
    )
};
export default Home