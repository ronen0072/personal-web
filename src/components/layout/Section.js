import React from 'react';

const Section = (props) => {
    return(
        <div className={"white section "+props.className}>
            {props.children}
        </div>
    )
}
export default Section