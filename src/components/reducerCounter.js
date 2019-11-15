import React, {useReducer} from "react";

const initializeValue = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            throw new Error()
    }
}

function Count() {
    const [state, dispatch] = useReducer(reducer, initializeValue);
    return (
        <div>
            <h2>Счётчик с использованием хука "useReducer"</h2>
            <button onClick={() => {dispatch({type: "decrement"})}}>-</button>
            <span> {state.count} </span>
            <button onClick={() => {dispatch({type: "increment"})}}>+</button>
        </div>
    )
}

export default Count;