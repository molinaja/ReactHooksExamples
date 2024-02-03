import React from 'react'
import { UseCounter } from "../hooks/UseCounter";

export const CustomHookForCounter = () => {

    const { counter, increment, decrement, reset } = UseCounter();

    return (
        <>
            <hr />
            <h1>2- Counter with custom Hook</h1>
            <h3>Contador: {counter}</h3>
            <button onClick={ decrement } >
                    -1
            </button>
            <button onClick={ reset} >
                    Reset
            </button>
            <button onClick={ ()=>increment(2) } >
                    +1
            </button>
        </>
    )
}
