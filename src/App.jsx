import {useEffect, useState} from 'react'
// import Count from './components/Count.jsx';
import Count from './components/Count.jsx';
const App = () => {
const [count,setCount]=useState(0);
const [username,setUsername]=useState("");
const onincrement=() => {
  if (count>=0 && count<=20){
  setCount(count+1);}
}
const ondecrement=() => {
  if (count>0 ){
  setCount(count-1);
}}
useEffect(()=>{
  setUsername("Sana")
},[count])
  return (
    <div>
      <Count count={count} username={username}/>
      <button onClick={onincrement}>onincrement</button>
      <button onClick={ondecrement}>ondecrement</button>
    </div>
  )
}

export default App;