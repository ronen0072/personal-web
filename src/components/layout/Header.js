import React, { Component } from 'react';
import M from "materialize-css";
import { NavLink } from 'react-router-dom';

class Header extends Component{
    navLinks = () =>{
        const { changeSelection } = this.props;
        return(
            <div>
                <li><div className='nav-link' onClick={() => changeSelection(0)}>Home</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(1)}>Projects</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(2)} >About Me</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(3)}>Contact</div></li>
                <li><a target="_blank" rel="noopener noreferrer" className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github project-skills-icon"/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin project-skills-icon"/></a></li>
            </div>
        );
    };
    navLinksToMobile = () =>{
        const { changeSelection } = this.props;
        return(
            <div className={'mobile-menu'}>
                <li><div className='nav-link' onClick={() => changeSelection(0)}>Home</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(1)}>Projects</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(2)} >About Me</div></li>
                <li><div className='nav-link' onClick={() => changeSelection(3)}>Contact</div></li>
                <li><a target="_blank" rel="noopener noreferrer" className='nav-link' href='https://github.com/ronen0072'><i className="fab fa-github project-skills-icon"/> My GitHub</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className='nav-link' href='http://linkedin.com/in/ronenfinish'><i className="fab fa-linkedin project-skills-icon"/>My Linkedin</a></li>
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