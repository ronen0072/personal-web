import React,{ Component } from 'react';
import { connect } from 'react-redux'
import firebase from "firebase";
import { signOut } from '../../store/actions/authActions'

class SingedOutLinks extends Component{
    handleClick = ()=>{
        this.props.signOut();
    };
    render(){
        return(
            (this.props.isLogin)? 
            <button onClick={() => firebase.auth().signOut()} className="link grey-text text-lighten-4 margin">Admin Out</button>
            : null
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  };
const mapStateToProps = (state) => {
    return{
        isLogin: !state.firebase.auth.isEmpty
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SingedOutLinks)
