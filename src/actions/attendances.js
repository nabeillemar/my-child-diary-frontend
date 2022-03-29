export const getAttendances = () => {
    return (dispatch) => {  
        dispatch({type: "LOADING_ATTENDANCES"})
        fetch('api/v1/attendances') 
        .then(res => res.json())
        .then(attendances =>  dispatch({type: "ATTENDANCES_LOADED", payload: attendances}))
     
    }
}


export const addAttendances = (attendance) => {
    return (dispatch) => {
        //debugger
        dispatch({type: "ADDING_ATTENDANCES" })
        fetch('api/v1/attendances', {
            method: "POST",
            body: JSON.stringify(attendance),
            headers: {
                "content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(attendances => dispatch({type: "ATTENDANCES_ADDED", payload: attendances}))
    }

}