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
    const updatedNum = equalsClicked ? num : displayNum * 10 + num;
    setDisplayNum(updatedNum);
    setEqualClick(false);
  };

  console.log({ displayNum, total });

  const handlePlus = () => {
    setCurrentOperator("+");
    setTotal(total + displayNum);
    setDisplayNum(0);
  };

  const handleEquals = () => {
    let finalValue = total;
    switch (currentOperator) {
      case "+":
        finalValue = total + displayNum;  
        break;
      default:
    }
    setTotal(finalValue);
    setCurrentOperator("=");
    setDisplayNum(finalValue);
    setEqualClick(true);
  };

  return (
    <>
      <h1>This is calculator</h1>
      <h2>{displayNum}</h2>
      {numbers.map(num => {
        return <Num num={num} clickHandle={() => numClickHandle(num)} />;
      })}
      <br/>
      <br/>

      <Operator operatorSymbol="+" operatorAction={handlePlus} />
      <Operator operatorSymbol="=" operatorAction={handleEquals} />
    </>
  );
}
