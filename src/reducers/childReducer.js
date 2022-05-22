const childReducer = (state = { children: [], loading: false}, action) => { 
    switch(action.type){
        case "LOADING_CHILDREN":
            console.log("loading children is called")

            return {...state,
            loading: true
        }


        case "CHILDREN_LOADED":
            console.log("Loaded children")

            return {
                ...state,
                children: action.payload.data, 
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
    
        case "DELETEING_ATTENDANCES":
   
            return {
                ...state,
                children: [...state.children.filter(child => `${child.id}` !== action.payload)],
                loading: false 
    
    
            }

        case "CHILDREN_EDITED":
            return {
                ...state,
                children:[...state.children.map(children => children.id === action.children.id ? action.children : children)]
            }



        default:
            return state
    }
}

export default childReducer



