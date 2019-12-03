import React from 'react';
import { NavLink } from 'react-router-dom';

const SingedOutLinks = () => {
    return(
        <NavLink className="grey-text text-lighten-4 margin" to='/'>Admin Log Login</NavLink>
    )
}
export default SingedOutLinks;