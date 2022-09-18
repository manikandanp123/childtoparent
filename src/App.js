import { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  const person={name:"mani",age:25}
  const all=[{name:"mass",age:"50"},{name:"mani",age:"25"}];
  const [f1,setF1]=useState({});

  const newData=(data)=>{
    console.log("1st data",data);
    setF1(data);
  }
  return (
    <div className="App">
      {/* <Parent name={{name:"mani",age:25}} /> */}
      {/* <Parent name={person} /> */}
      <Parent name={newData} />
      <p> First component - {f1.name} -{f1.age} - {f1.date} </p>
    </div>
  );
}

export default App;
