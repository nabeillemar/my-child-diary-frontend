import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () =>
        <div>
            <NavLink 
                to='/'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Home</NavLink>

            <NavLink 
                to='/children'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Child</NavLink>

            <NavLink 
                to='/attendance'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Attendance</NavLink>


        </div>


export default Navigation
