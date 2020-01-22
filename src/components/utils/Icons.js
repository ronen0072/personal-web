import React from 'react';
const icons = new Map([
        ['HTML5' , 'html5'],
        ['html5' , 'html5'],
        ['HTML' , 'html5'],
        ['CSS' ,'css3-alt' ],
        ['css' ,'css3-alt' ],
        ['JavaScript', 'js'],
        ['JS', 'js'],
        ['js', 'js'],
        ['NodeJS', 'node-js'],
        ['nodejs', 'node-js'],
        ['MongoDB', 'mongodb'],
        ['Java', 'java'],
        ['java', 'java'],
        ['Python', 'python'],
        ['python', 'python'],
        ['React', 'react'],
        ['react', 'react']
    ]); 
const Icons = (props) => {
    let icomName = '';
    if(!isIcons(props.name)||!props.className.includes("brand")){
        icomName = props.name;
    }
    return(
        <i className={"fab fa-"+(icons.has(props.name)?(icons.get(props.name)):(props.name))+' '+props.className}><span className={props.className}>{' '+icomName}</span></i>
    )
};
const isIcons = (name) => {
    return icons.has(name);
};
export {Icons, isIcons}