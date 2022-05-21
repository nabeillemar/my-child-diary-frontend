import React from 'react'

const Home = () => {
    const mystyle = {
        color: "brown"

    };

    return (
        <div>
            <h1 style={mystyle}>Welcome to the Nurture App</h1>
            <br></br>
            <br></br>
            <p>We designed this tool with child care providers in mind.</p>
            <p>This allows you to easily track all needed information for the children under your care.</p>

        </div>
    )
}

export default Home
