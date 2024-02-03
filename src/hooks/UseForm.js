import { useState } from 'react';

export const UseForm = ( form={} ) => {

    const [formState, setFormstate] = useState(form)

    const onchangeInput = ({ target }) => {

        const { name, value } = target;

        setFormstate({

            ...formState,
            [name]: value

        });

    }

    return{
        ...formState,
        formState,
        onchangeInput,

    }

}
