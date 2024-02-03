import { useState, useEffect } from 'react'
import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormstate] = useState({

    txtUserName: 'molina',
    txtEmail: 'juan@gmail.com',

  })

  const { txtUserName, txtEmail } = formState;

  const onchangeInput = ({ target }) => {

    const { name, value } = target;

    setFormstate({

      ...formState,
      [name]: value

    });

  }

  useEffect(() => {

    console.log('useeffect'); 

  }, []);

  useEffect(() => {

    console.log('form chaged'); 

  }, [formState]);

  useEffect(() => {

    console.log('e mail changed'); 

  }, [txtEmail]);



  return (
    <>
      <hr></hr>
      <h1>3- UseEffect Hook. Example for simple form using UseEffect Hook</h1>

      <input className="form-control" type="text" placeholder="User Name" name="txtUserName" value={txtUserName} onChange={onchangeInput} />

      <input className="form-control mt-2" type="email" placeholder="e-mail" name="txtEmail" value={txtEmail} onChange={onchangeInput} />

      {
        (txtUserName === 'molina')&&<Message/>
      }
      
    </>
  )

}
