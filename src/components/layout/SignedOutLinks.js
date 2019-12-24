import React,{ Component } from 'react';
import { connect } from 'react-redux'
import firebase from "firebase";
import { signOut } from '../../store/actions/authActions'

class SingedOutLinks extends Component{
    handlClick = ()=>{
        this.props.signOut();
    }
    render(){
        return(
            (this.props.isLogin)? 
            <a href="#" onClick={() => firebase.auth().signOut()} className="grey-text text-lighten-4 margin"to='/'>Admin Out</a>
            : null
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
const mapStateToProps = (state) => {
    return{
        isLogin: !state.firebase.auth.isEmpty
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SingedOutLinks)
