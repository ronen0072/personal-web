import React from 'react';

const Home = (props) => {
    const { changeSelection } = props;
    return(
        <div className='home'>
            <div className='my-container'>
                <div className="section-padding no-padding-left-right welcome">
                    <p>Welcome to my portfolio website!<br/>
                        My name is Ronen Finish, I am a software developer and a Computer Science B.Sc graduate.<br/>
                            I am looking for a Full Stack Developer position, for more information check out <br/><button className="gold-btn" onClick={() => changeSelection(2)}>About Me</button></p>
                </div>
            </div>
        </div>
    )
};
export default Home