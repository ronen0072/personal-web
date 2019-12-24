import React,{ Component } from 'react';
import { connect } from 'react-redux'
import firebase from "firebase";
import { signIn } from '../../store/actions/authActions'

class SingedInLinks extends Component{
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    handlClick = ()=>{
        this.props.signIn();
    }
    render(){
        // console.log('this.state');
        // console.log(this.props);
        return(
            !this.props.isLogin?
            <a href="#" onClick={this.handlClick} className="grey-text text-lighten-4 margin" >Admin Login</a>
            :null
        )

    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        isLogin: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingedInLinks);