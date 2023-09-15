import { forwardRef } from "react";

 const MyInput = forwardRef(function MyInput23 (props,ref){
    const { label, ...otherProps } = props;
    return(
        <>
        <label>{label}</label>

        <input ref={ref} ></input>
        </>
    )
 }) ;


export default MyInput;
