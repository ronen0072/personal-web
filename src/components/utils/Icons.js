import React from 'react';
const icons = new Map([
        ['HTML5' , 'html5'],
        ['CSS' ,'css3-alt' ],
        ['css' ,'css3-alt' ],
        ['JavaScript', 'js'],
        ['JS', 'js'],
        ['js', 'js'],
        ['NodeJS', 'node-js'],
        ['nodejs', 'node-js'],
        ['MongoDB', 'mongodb'],
        ['Java', 'java'],
        ['Python', 'python'],
        ['React', 'react']
    ]); 
const Icons = (props) => {
    let icomName = '';
    if(!props.className.includes("brand")){
        icomName = props.name;
    }
    return(
        <i className={"fab fa-"+(icons.has(props.name)?(icons.get(props.name)):(props.name))+' '+props.className}>{' '+icomName}</i> 
    )
}
export default Icons