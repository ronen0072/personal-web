import React from 'react';
//import "materialize-css/dist/css/materialize.min.css";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Footer = (props) => {
    const { changeSelection } = props;
    return(
        <footer className="page-footer footer z-depth-3 footer-wrapper">
            <div className="footer-copyright">
                <div className="my-container">

                    <button className='link grey-text text-lighten-4 margin-right' onClick={() => changeSelection(0)}>Home</button>
                    <button className='link grey-text text-lighten-4 margin-right' onClick={() => changeSelection(1)}>Projects</button>
                    <button className='link grey-text text-lighten-4 margin-right' onClick={() => changeSelection(2)} >About Me</button>
                    <button className='link grey-text text-lighten-4 margin-right' onClick={() => changeSelection(3)}>Contact</button>
                    <SignedInLinks />
                    <SignedOutLinks />
                    <a target="_blank" rel="noopener noreferrer" className='grey-text text-lighten-4 margin-right' href='https://github.com/ronen0072'><i className="fab fa-github project-skills-icon"/></a>
                    <a target="_blank" rel="noopener noreferrer" className='grey-text text-lighten-4 margin-right' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin project-skills-icon"/></a>

                    <div className='grey-text'>© 2020 Copyright Ronen Finish. All rights reserved</div>
                </div>
            </div>
        </footer>    
    )

};
export default Footer;