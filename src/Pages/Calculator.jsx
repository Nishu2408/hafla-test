import React, { useState } from "react";
import Num from "./Num";
import Operator from "./Operator";

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [displayNum, setDisplayNum] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
  const [equalsClicked,setEqualClick] = useState(false);

  const numbers = Array.from(Array(10).keys());

  const numClickHandle = num => {
    let updatedNum =  displayNum * 10 + num;
    if(equalsClicked){
        updatedNum = num
    }
    setDisplayNum(updatedNum);
    setEqualClick(false);
  };

  console.log({ displayNum, total });

  const handlePlus = () => {
    processOperator("+");
    setCurrentOperator("+");
  };


  const processOperator = (operator) => {
    let finalValue = total;
    switch (operator || currentOperator) {
      case "+":
        finalValue = Number(total) + Number(displayNum);
          
        break;
      default:
    }
    setTotal(finalValue);
    setDisplayNum(finalValue)
    setEqualClick(true);
  }

  const handleEquals = () => {
    processOperator();
    setEqualClick(true);
  };

  return (
    <>
      <h1>This is calculator</h1>
      <h2>{displayNum}</h2>
      {numbers.map(num => {
        return <Num key={num} num={num} clickHandle={() => numClickHandle(num)} />;
      })}
      <br/>
      <br/>

      <Operator operatorSymbol="+" operatorAction={handlePlus} />
      <Operator operatorSymbol="=" operatorAction={handleEquals} />
    </>
  );
}
