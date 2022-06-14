import React, { useState } from "react";
import Num from './Num';

export default function Calculator() {
//   const [total,setTotal] = useState(0);
  const [displayNum, setDisplayNum] = useState(0);
  const numbers = Array.from(Array(10).keys());
  const numClickHandle = num => {
      const updatedNum = (displayNum * 10 ) + num;
      console.log({displayNum,num,updatedNum})
     setDisplayNum(updatedNum)
    // setTotal();
  };

  return (
    <>
      <h1>This is calculator</h1>
      <h2>{displayNum}</h2>
      {numbers.map(num => {
        return <Num num = {num} clickHandle = {() => numClickHandle(num)}/>
      })}
    </>
  );
}
