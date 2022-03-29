
export const getChildren = () => {
    return (dispatch) => {  
        dispatch({type: "LOADING_CHILDREN"})
        fetch('api/v1/children') 
        .then(res => res.json())
        .then(children =>  dispatch({type: "CHILDREN_LOADED", payload: children}))
     
    }
}


export const addChildren = (child) => {
    return (dispatch) => {
        dispatch({type: "ADDING_CHILDREN" })
        fetch('api/v1/children', {
            method: "POST",
            body: JSON.stringify(child),
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(children => dispatch({type: "CHILDREN_ADDED", payload: children}))
    }

}


export const deleteChildren = (id) => {
    //debugger
    return (dispatch) => {
        dispatch({type: "DELETEING_CHILDREN" })
        fetch(`api/v1/children/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then(() => dispatch({type: "CHILDREN_DELETED", payload: id}))
}

}

//should this be children.data


// issue is that State is not connected 
// seems like Action is 
// is it because of my nested data structure? not sure 
