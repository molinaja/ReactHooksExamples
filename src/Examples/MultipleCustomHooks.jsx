
import { UseCounter, UseFetch } from "../hooks/index";


export const MultipleCustomHooks = () => {

  const url = 'https://rickandmortyapi.com/api/character/'
  const { counter, increment, decrement, reset } = UseCounter(1);
  const { data, isloading, hasError } = UseFetch( url + counter );

  const { name, status} = !!data && data

  const nextCharacter = ()=>{

    increment();


  };

  return (
    <>
      <hr></hr>
      <h1>5- Examples, fetch with Rick and morty api</h1>

      {
        isloading
          ? (
            <div className="alert alert-info text-center">Loading</div>
          ) : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{ name }</p>
              <footer className="blockquote-footer">{ status }</footer>
            </blockquote>
          )
          
      }

      <button className="btn btn-primary" disabled={isloading} onClick={ nextCharacter }> Next Character {counter}</button>




    </>
  )
}
