import React from 'react';
//import "materialize-css/dist/css/materialize.min.css";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Footer = (props) => {
    const { changeSelection } = props;
    return(
        <footer className="page-footer footer z-depth-3 halfTransparent">
            <div className="footer-copyright">
                <div className="container">

                    <button className='link grey-text text-lighten-4 margin' onClick={() => changeSelection(0)}>Home</button>
                    <button className='link grey-text text-lighten-4 margin' onClick={() => changeSelection(1)}>Projects</button>
                    <button className='link grey-text text-lighten-4 margin' onClick={() => changeSelection(2)} >About Me</button>
                    <button className='link grey-text text-lighten-4 margin' onClick={() => changeSelection(3)}>Contact</button>
                    <SignedInLinks />
                    <SignedOutLinks />
                    <a className='grey-text text-lighten-4 margin' href='https://github.com/ronen0072'><i className="fab fa-github project-skills-icon"/></a>
                    <a className='grey-text text-lighten-4 margin' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin project-skills-icon"/></a>

                </div>

            </div>
            <div className="container grey-text copyright">© 2020 Copyright Ronen Finish. All rights reserved</div>
        </footer>    
    )

};
export default Footer;