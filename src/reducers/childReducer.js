const childReducer = (state = { children: [], loading: false}, action) => { // this takes in the current state and the action which is the case 
    switch(action.type){
        case "LOADING_CHILDREN":
            console.log("loading children is called")
           //debugger
            return {...state,
            loading: true
        }

        case "CHILDREN_LOADED":
            console.log("Loaded children")
            //debugger
            return {
                ...state,
                children: action.payload.data, // the payload is an array here 
                loading: false 
            }


        case "ADDING_CHILDREN":
                return {
                    ...state,
                    loading: true
    
            }
    
        case "CHILDREN_ADDED":
                return {
                    ...state,
                    children: [...state.children, action.payload.data],
                    loading: false 
    
    
            }


        case "DELETING_CHILDREN":
            return {
                 ...state,
                 loading: true
    
            }
    
        case "CHILDREN_DELETED":
            //debugger
            return {
                ...state,
                children: [...state.children.filter(child => `${child.id}` !== action.payload)],
                loading: false 
    
    
            }





        default:
            return state
    }
}

export default childReducer



