import React from 'react';
import Section from '../layout/Section';

const Contact = () => {
    return (
        <div className="my-container page">
            <Section className="section-padding">
                <form>
                    <h4 className="title">Contact</h4>
                    <div className="row">
                        <div className="input-field col s12 m5">
                            <i className="material-icons prefix">account_circle</i>
                            <input type="text" id='name' />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s12 m7">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id='email' />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">message</i>
                            <textarea id="message" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col ">
                            <button className="btn pink lighten-1"><i className="fas fa-paper-plane"></i> send</button>
                        </div>
                    </div>
                </form>
            </Section>
        </div>
      )
}
export default Contact