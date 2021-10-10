const countRedux = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + 1
        case "reduce":
            return state - 1
        default:
            return state
    }
}

const add = () => ({type: "add"})
const reduce = () => ({type: "reduce"})
const asyncAdd = () => (dispatch) => {
    setTimeout(() => {
        dispatch({type: "add"})
    }, 100)
}

export {countRedux, add, reduce, asyncAdd}