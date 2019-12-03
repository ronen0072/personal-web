import React from 'react';
//import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Footer = () => {
    return(
        <footer className="page-footer footer z-depth-3 halfTransparent">
            <div className="footer-copyright">
                <div className="container">
                    <span className="grey-text">© 2014 Copyright Text</span>
                    <NavLink className='grey-text text-lighten-4 margin' to='/' >Home</NavLink>
                    <NavLink className='grey-text text-lighten-4 margin' to='/about' >About Me</NavLink>
                    <NavLink className='grey-text text-lighten-4 margin' to='/contact'>Contact</NavLink>
                    <NavLink className='grey-text text-lighten-4 margin' to='/projects'>Projects</NavLink>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div> 
        </footer>    
    )

}
export default Footer;