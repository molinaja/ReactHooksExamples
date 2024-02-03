import  { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        
        const onMouseMove = ({ x, y }) => {
            setCords({ x, y });

        }

        console.log('message montado');
        window.addEventListener( 'mousemove', onMouseMove)

        return () => {
            console.log('message desmontado');
            window.removeEventListener( 'mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <h2>Usuario tomado</h2>
            <h3>
                {
                    JSON.stringify(cords)
                }
            </h3>
        </>

    )
}
