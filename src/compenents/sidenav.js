import React from 'react';
import {NavLink} from 'react-router-dom';
export default function sidenav() {
    return (
        <div class="sidenav">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/posts">Lorem</NavLink>
            <NavLink to="#ipsum">Ipsum</NavLink>
         </div>
    )
}
