import { useState, useEffect } from 'react'
import { UseForm } from '../hooks/UseForm';

export const SimpleFormCustomHook = () => {



  const { formState, onchangeInput, txtUserName, txtEmail, txtPasswword } = UseForm({
    txtUserName: '',
    txtEmail: '',
    txtPasswword: '',
  })

  //const { txtUserName, txtEmail, txtPasswword } = formState;

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
      <h1>4- UseEffect Hook. Example for simple form using UseEffect Hook and custom hook</h1>

      <input className="form-control" type="text" placeholder="User Name" name="txtUserName" value={txtUserName} onChange={onchangeInput} />

      <input className="form-control mt-2" type="email" placeholder="e-mail" name="txtEmail" value={txtEmail} onChange={onchangeInput} />

      <input className="form-control mt-2" type="password" placeholder="Pass" name="txtPasswword" value={txtPasswword} onChange={onchangeInput} />


    </>
  )

}
