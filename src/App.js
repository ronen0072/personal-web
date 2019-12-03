import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Project from './components/projects/Project'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Modal trigger='project'>
          <Project id='project1' name='temp' info="temp"/>
        </Modal>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
