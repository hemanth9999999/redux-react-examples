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
                <button  onClick={() => this.props.changeCountAdd(1)}>click Add</button><br/>
                <button  onClick={() => this.props.changeCountDecr(1)}>click Subtract</button><br/>
                <h1>{this.props.count.charge}</h1>
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
                } 
            )
        } , 
        changeCountDecr : (count) => { 
            dispatch(
                { 
                    type :"SUBTRACT",
                    payload : 1

                }
            )
        },
        changeCountAdd : (count) => { 
            dispatch(
                { 
                    type :"ADD",
                    payload : count

                }
            )
        },

    }

 

}

export default connect(mapStateToProps , mapDispatchToProps)(App) ;