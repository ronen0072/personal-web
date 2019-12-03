import React, { Component } from 'react';
import M from "materialize-css";
import background from '../../img/black-and-white-wood.jpg';


class BackgroundImg extends Component{
    componentDidMount() {
        M.Parallax.init(this.Parallax);
    }
    render(){
        return(
            <div className='Parallax-cotainer'>
                <div className="Parallax">
                    {this.props.children}
                    <img src={background} className='responsive-img ParallaxImg' />
                </div>
                
            </div>
        )
    }
}

export default BackgroundImg