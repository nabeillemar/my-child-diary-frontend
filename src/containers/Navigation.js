import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '20px 20px 20px 20px',
    margin: ' 6px 6px',
    background: 'rgb(255, 136, 97)',
    textDecoration: 'none',
    color: 'white', 
    borderStyle: "double"
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

            <NavLink 
                to='/childform'
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Child Form</NavLink>


        </div>


export default Navigation
