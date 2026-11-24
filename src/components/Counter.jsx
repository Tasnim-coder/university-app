import { useState } from "react"
export const counter = () => {
    // let count = 0 ;
    const [count , setCount] = useState (0);
      function handleClick (){
      
        setCount( count +1);
        console.log (count);


    }
    
    return (
        <>
        <h1>counter: {count}</h1>
        <button onClick={handleClick}>Increment </button> </>

    ) ;
}














}