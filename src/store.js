import {createStore} from "redux";

const myReducer = (state=0,action) => {
  switch (action.type) {
      case "add":
          return state+1
      case "reduce":
          return state-1
      default:
          return state
  }
}

const store = createStore(myReducer)
export default store