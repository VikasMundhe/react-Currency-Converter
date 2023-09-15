import { memo, useState } from "react"


const MemoTutorial:React.FC = ()=>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return(
        <>
           <label>
                Name: 
                <input value ={name} onChange={e=>setName(e.target.value)}></input>
           </label>

           <label>
                Address: 
                <input value ={address} onChange={e=>setAddress(e.target.value)}></input>
           </label>
           <Greetings name={name} />
        </>
    )

}

const Greetings:React.FC<{name:string}> = memo(function Greetings({name}){
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
})

export default MemoTutorial