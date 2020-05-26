import React, {Component, createRef} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Project from './components/projects/Project'
import AOS from "aos";
import 'aos/dist/aos.css';
import {connect} from "react-redux";


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      selected: null
    };
  }


  //refs
  header = createRef();
  projects = createRef();
  about = createRef();
  contact = createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  componentDidUpdate(prevProps, prevState) {
    this.scrollToSection(this.state.selected);
  }

  scrollToSection = index => {
    let refs = [
      this.header,
      this.projects,
      this.about,
      this.contact
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      });
    }
  };
  render(){
    AOS.init({
      once: true,
    });
    return (
        <BrowserRouter>
          <div className="App">
            <div className={'header'} ref={this.header}>
              <div className={'background-header'}></div>
              <Header changeSelection={this.changeSelection}/>
              <Home changeSelection={this.changeSelection}/>
            </div>
            <div className={'projects'} ref={this.projects}>
              <Projects changeSelection={this.changeSelection}/>
            </div>
            <div ref={this.about}>
              <About changeSelection={this.changeSelection}/>
            </div>
            <div ref={this.contact}>
              <Contact/>
            </div>
            <Modal trigger='project'>
              <Project id='project1' name='temp' info="temp"/>
            </Modal>
            <Footer changeSelection={this.changeSelection}/>
          </div>
        </BrowserRouter>
    );
  }
}


export default App;
