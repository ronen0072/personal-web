import React from 'react';

const Section = (props) => {
    return(
        <div className={"section "+props.className} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            {props.children}
        </div>
    )
}
export default Section