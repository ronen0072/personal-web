import React, { Component } from 'react';
import M from "materialize-css";
//import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from 'react-router-dom';

class Header extends Component{
    navLinks = () =>{
        const { changeSelection } = this.props;
        return(
            <div>
                <li><a className='nav-link' onClick={() => changeSelection(0)}>Home</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(1)}>Projects</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(2)} >About Me</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(3)}>Contact</a></li>
                <li><a className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github brand"/></a></li>
                <li><a className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin brand"/></a></li>
            </div>
        );
    };
    navLinksToMobile = () =>{
        const { changeSelection } = this.props;
        return(
            <div>
                <li><a className='nav-link' onClick={() => changeSelection(0)}>Home</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(1)}>Projects</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(2)} >About Me</a></li>
                <li><a className='nav-link' onClick={() => changeSelection(3)}>Contact</a></li>
                <li><a className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github brand"/> My GitHub</a></li>
                <li><a className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin brand"/>My Linkedin</a></li>
            </div>
        );
    };
    componentDidMount() {
        M.Sidenav.init(this.Sidenav);
    }
    render() {

        return (
          <nav>
            <div className="nav-wrapper">
                <div className="my-container">
                    <NavLink to="/" className="brand-logo push-s1">
                        <span className='logo'>Ronen </span>
                        <span className='logo logo-continue'>Finish</span>
                    </NavLink>
                    <ul className="right hide-on-med-and-down">{this.navLinks()}</ul>
                    <a href="#!" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </div>
            <ul ref={Sidenav => {this.Sidenav = Sidenav;}} id="slide-out" className="sidenav">
                {this.navLinksToMobile()}
              </ul>
          </nav>
        );
      }
    }
    
    export default Header;