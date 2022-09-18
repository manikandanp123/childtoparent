import React, { useState } from "react";
import Child from "./Child";

const Parent = (props) => {
  // console.log("parent",props.name[0].name)
  // console.log( "parent name", props.name.name,props.name.age)

  const [p1,setP1]=useState({});

  const getDetails = (data) => {
    console.log("parent data", data);
    setP1(data);
    props.name(data);
  };
  return (
    <div>
      <h1>Parent component </h1>
      <Child handleData={getDetails} />
      <h2> parent component - {p1.name} -{p1.age} - {p1.date} </h2>
    </div>
  );
};

export default Parent;
