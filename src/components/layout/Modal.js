import React, { Component } from 'react';
import M from "materialize-css";

class Modal extends Component{
      componentDidMount = ()=>{
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems,
            {onOpenStart:this.props.onOpenStart}
        )
    }
    render() {
        return(
            <div className="modal" id={this.props.trigger}>
                {this.props.children}
            </div>   
        )
    }

}
export default Modal;