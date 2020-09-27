import React from "react";


import { User } from './User';
import { Main } from './Main';
import { connect } from "react-redux";



class App extends React.Component {


    render() {
        return (
            <div className="container">
                <Main changeUsername={this.props.changeName}/>
                <User username={this.props.user.name}/>
            </div>
        );
    };


}

const mapStateToProps = (state) =>  { 

    return { 

        user: state.nameReducer , 
        count:state.reducer
    } ; 
}

const  mapDispatchToProps =(dispatch)=> { 
    return{ 
        changeName : (name)=>{ 
            dispatch(
                {
                type : "CHANGE_NAME" ,
                payload : name 
                } , 
                dispatch: ( )=> { 

                })
            )
        }
    }

 

}

export default connect(mapStateToProps , mapDispatchToProps)(App) ; 
