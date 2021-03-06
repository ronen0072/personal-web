import React, {Component, Fragment} from 'react';
import {createMessage} from '../../store/actions/messagesActions';
import Section from '../layout/Section';
import {connect} from "react-redux";
import M from "materialize-css";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    validation = (e) => {
        if (e.target.id === 'email') {
            let emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            (!emailRE.test(e.target.value)) && M.toast({html: 'Email address is invalid', classes: 'fail'});
        }
        let val = (e.target.value);
        if (e.target.id !== 'email') {
            (val.length === 0) && M.toast({html: e.target.id + ' cannot be empty', classes: 'fail'});
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.name && this.state.name !== "" &&
            this.state.email && emailRE.test(this.state.email) &&
            this.state.message && this.state.message !== "") {
            this.props.createMessage(this.state);
            M.toast({html: 'The message has been sent', classes: 'success'});
        } else {
            M.toast({html: 'Message details are incorrect', classes: 'fail'});
        }
    };

    render() {
        return (
            <div className={'contact-section'}>
                <div className={'contact-title'}>
                    <h2 className="title">Contact</h2>
                </div>

                <div className="my-container page">
                    <Section className="section-padding">
                        <form onSubmit={(this.handleSubmit)}>


                            <div className="row contact-input ">
                                <div className="input-field col s12 m5">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input type="text" id='name' onChange={this.handleChange} onBlur={this.validation}/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12 m7">
                                    <i className="material-icons prefix">email</i>
                                    <input type="email" id='email' onChange={this.handleChange}
                                           onBlur={this.validation}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">message</i>
                                    <textarea id="message" className="materialize-textarea" data-length="120"
                                              onChange={this.handleChange} onBlur={this.validation}/>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 center-align">
                                    <button className="btn gold-btn focus-zoom-in"><i className="fas fa-paper-plane"/> send</button>
                                </div>
                            </div>
                        </form>
                    </Section>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createMessage: (project) => dispatch(createMessage(project))
    }
};

export default connect(null, mapDispatchToProps)(Contact);