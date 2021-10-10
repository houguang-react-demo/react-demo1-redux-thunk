import React, {Component} from 'react';
import store from "./store";

class App extends Component {
    render() {
        return (
            <div>
                <div>state:{store.getState()}</div>
                <button onClick={() => store.dispatch({type: "add"})}>+1</button>
                <button onClick={() => store.dispatch({type: "reduce"})}>-1</button>
            </div>
        );
    }
}

export default App;