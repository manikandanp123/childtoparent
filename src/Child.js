import React,{useState} from "react";

const Child = (props) => {
 const [all,setAll]=useState({name:'',age:"",date:""});
 let count=0;   
  function submitHandler(e){
      e.preventDefault();
      console.log("btn clicked");
      console.log("all",all);
      props.handleData(all);
  }
  function changeCount(){
    count=count+1;
  }
  return (
    <div>
      <button onClick={()=>changeCount()}>count -{count} </button>
      <div>Child</div>
      <input type="text" name="name" placeholder="name..." onChange={(e)=>setAll({...all,name:e.target.value}) } /><br />
      <input type="number" name="age" placeholder="age..." onChange={(e)=>setAll({...all,age:e.target.value}) } /><br />
      <input type="date" name='date'  onChange={(e)=>setAll({...all,date:e.target.value})} /><br />
      <button onClick={(e)=>submitHandler(e)} > submit </button>
      <p> child component {all.name} - {all.age} - {all.date} </p>
    </div>
  );
};

export default Child;
