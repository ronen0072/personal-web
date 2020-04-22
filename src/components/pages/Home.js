import React from 'react';

const Home = (props) => {
    const { changeSelection } = props;
    return(
        <div className='home'>
            <div className='my-container'>
                <div className="section-padding no-padding-left-right welcome">
                    <p>Welcome to my portfolio website!
                        My name is Ronen Finish, I am a software developer and a Computer Science B.Sc graduate.
                        I am looking for a Full Stack Developer position, for more information check out  <button className="link" onClick={() => changeSelection(2)}>About Me</button> section</p>
                </div>
            </div>
        </div>
    )
};
export default Home