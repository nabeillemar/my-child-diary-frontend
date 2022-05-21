//These are my action creators that returns actions 
export const getChildren = () => { 
    console.log("getChildren Action Creator is called")
    return (dispatch) => {  
        dispatch({type: "LOADING_CHILDREN"}) //when we use dispatch we have to invoke it with an action 
        fetch('api/v1/children') 
        .then(res => res.json())
        .then(children =>  dispatch({type: "CHILDREN_LOADED", payload: children})) //when we use dispatch we have to invoke it with an action, here it is carrying a payload 
        // the payload is carrying our data from our fetch request from this action to the reducer 
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




export const editChildren = (child) => {
    debugger
  return (dispatch) => {
      fetch(`api/v1/children/${child.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(child)
    })
    .then(response => response.json())
    .then(children => dispatch({type: 'CHILDREN_EDITED', payload: children}))
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

