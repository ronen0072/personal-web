import React from 'react';


const Home = (props) => {
    const { changeSelection } = props;

    return(
        <div className='home'>
            <div className='my-container'>
                <div className="section-padding no-padding-left-right welcome"  data-aos="zoom-in-down"  data-aos-delay="500" data-aos-duration="800">
                    <p>Welcome to my portfolio website!<br/>
                        My name is Ronen Finish, I am a software developer and a Computer Science B.Sc graduate.<br/>
                            for more information check out <br/><button className="gold-btn focus-zoom-in" onClick={() => changeSelection(2)}>About Me</button></p>
                </div>
            </div>
        </div>
    )
};
export default Home