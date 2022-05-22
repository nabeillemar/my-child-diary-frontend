import React from 'react'
import { Link } from 'react-router-dom'

const ChildContainer = (props) => {
    return (
        <div class="row">
            <div class="column">
            <br></br>
                <div class="card">
            {console.log("ChildContainer component is called")}
            <Link to={`/children/${props.id}`}>
            <button type="button" class="block">{props.child_name}</button>
            </Link>

               </div>
            </div>
        </div>

    )
}






export default ChildContainer

