import {createStore,combineReducers,applyMiddleware} from "redux"
import {createLogger}  from 'redux-logger'
import App from "./components/App"
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"; 

const initState ={ 
    charge : 0 , 
    prev_charges : []
}



const reducer = (state=initState , action ) => { 
    switch ( action.type){ 
        case "ADD" : 
            state = { 
                        ...state,
                        charge : state.charge + action.payload , 
                        prev_charges : [state.prev_charges , action.payload]
                     }  
        break ;
        case "SUBTRACT" :
            state = { 
                ...state,
                charge : state.charge - action.payload , 
                prev_charges : [state.prev_charges , action.payload]
            }  
        break ;     
    }
    return state ; 
}

const nameReducer = (state ={name:"Max"}, action)=> { 

    switch(action.type){ 
        case "CHANGE_NAME":
            state = { 
                ...state ,
                name :  action.payload
            }
            break ; 
    }
    return state

}

    const store = createStore(   combineReducers({reducer,nameReducer}),    {}   ,      applyMiddleware(createLogger())  ); 
 
    

    render( <Provider store={store}><App/></Provider>
    , window.document.getElementById('app') );
