import React, { Component } from 'react';
import M from "materialize-css";
//import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom';
var navLinks = () =>{
        return(
            <div>
                <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-link' to='/about' >About Me</NavLink></li>
                <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-link' to='/projects'>Projects</NavLink></li>
                <li><a className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github brand"></i></a></li> 
                <li><a className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin brand"></i></a></li> 
            </div>
        );
};
var navLinksToMobile = () =>{
    return(
        <div>
            <li><NavLink className='nav-link' to='/'><i className="fas fa-home"></i>Home</NavLink></li>
            <li><NavLink className='nav-link' to='/about' ><i className="fas fa-address-card"></i>About Me</NavLink></li>
            <li><NavLink className='nav-link' to='/contact'> <i className="fas fa-paper-plane"></i> Contact</NavLink></li>
            <li><NavLink className='nav-link' to='/projects'><i className="fas fa-briefcase"></i>Projects</NavLink></li>
            <li><a className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github brand"></i> My GitHub</a></li> 
            <li><a className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin brand"></i>My Linkedin</a></li> 
        </div>
    );
};
class Navbar extends Component{
    componentDidMount() {
        M.Sidenav.init(this.Sidenav);
    }
    render() {
        return (
          <nav className="transparent nav-wrapper">
            <div className="fixed-position halfTransparent">
                <div className="container">
                    <NavLink to="/" className="brand-logo push-s1">
                        <span className='logo'>Ronen Finish</span>
                    </NavLink>
                    <ul className="right hide-on-med-and-down">{navLinks()}</ul>
                    <a href="#!" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </div>
            <ul ref={Sidenav => {this.Sidenav = Sidenav;}} id="slide-out" className="sidenav">
                {navLinksToMobile()}
              </ul>
          </nav>
        );
      }
    }
    
    export default Navbar;