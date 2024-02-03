
import { useState } from 'react';

export const UsestateHook = () => {

    const [count, setCount] = useState(0);
    const [stateObj, setstateObj] = useState({
        counter1: 11,
        counter2: 12,
        counter3: 13,
    });

    const { counter1, counter2, counter3 } = stateObj;

    return (
        <>
        <hr/>
            <h1>1- Counter with useState Hook</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count General is {count}
                </button>
            </div>
            <div className="card">
                <button onClick={
                    () => setstateObj(
                        { ...stateObj, counter1: counter1 + 1 }
                    )
                }>
                    counter1 + 1
                </button>
            </div>
            <h4>
                counter1 is {counter1}    
            </h4>
            <h4>
                counter2 is {counter2}    
            </h4>
            <h4>
                counter3 is {counter3}    
            </h4>
        </>
    )
}
