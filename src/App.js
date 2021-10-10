import React, {Component} from 'react';
import {connect} from "react-redux";
import {add, asyncAdd, reduce} from "./redux/count.redux";

@connect(state=>({count:state}),{add,reduce,asyncAdd})
class App extends Component {
    render() {
        return (
            <div>
                <div>state:{this.props.count}</div>
                <button onClick={()=>this.props.reduce()}>-1</button>
                <button onClick={()=>this.props.add()}>+1</button>
                <button onClick={()=>this.props.asyncAdd()}>延时+1</button>
            </div>
        );
    }
}

export default App;