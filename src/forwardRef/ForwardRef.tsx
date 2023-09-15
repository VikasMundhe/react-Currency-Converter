import { useRef } from "react";
import MyInput from "./MyInput";



const ForwardRefs = ()=> {

    const myref = useRef(null);

    const handleClick = () =>{
        myref.current.focus();
    }

    return (
      <div>
         <MyInput label="Enter your name:" ref={myref}></MyInput>

         <button type ="button" onClick={handleClick}> Edit </button>
      </div>
    );
  }
  
  export default ForwardRefs;