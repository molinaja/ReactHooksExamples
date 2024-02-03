import { useState } from 'react';

export const UseCounter = (initValue = 0) => {

    const [counter, setcounter] = useState(initValue)

    const increment = (value = 1) => {

        setcounter(counter + value);

    }

    const decrement = () => {

        if (counter === 0) {
            return;
        }
        setcounter(counter - 1);

    }

    const reset = () => {

        setcounter( initValue );

    }

    return {
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset,
    }

}