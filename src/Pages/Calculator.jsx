import React, { useState } from "react";
import Num from "./Num";
import Operator from "./Operator";

export default function Calculator() {
  const operators = [
    { opName: "Plus", opSym: "+" },
    { opName: "Multiply", opSym: "*" },
    { opName: "Equals", opSym: "=" }
  ];
  const [total, setTotal] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [displayNum, setDisplayNum] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
  const [equalsClicked, setEqualClick] = useState(false);

  const numbers = Array.from(Array(10).keys());

  const numClickHandle = num => {
    let updatedNum = displayNum * 10 + num;
    if (equalsClicked) {
      updatedNum = num;
    }
    setDisplayNum(updatedNum);
    setEqualClick(false);
  };

  console.log({ displayNum, total });

  const processOperator = operator => {
    // console.log({operator,currentOperator})
    if (!equalsClicked) {
      let finalValue = total;
      switch (currentOperator || operator) {
        case "+":
          finalValue = Number(total) + Number(displayNum);
          setCurrentOperator("+");
          break;
        case "*":
          if (total === 0) {
            setFirstNum(displayNum);
          }
          finalValue = Number(total || firstNum) * Number(displayNum);
          setCurrentOperator("*");
          break;
        default:
      }
      // console.log({ operator, currentOperator, finalValue, total, displayNum });
      setTotal(finalValue);
      setDisplayNum(finalValue);
      setEqualClick(true);
      setCurrentOperator(operator);
    }
  };

  return (
    <>
      <h1>This is calculator</h1>
      <h2>{displayNum}</h2>
      {numbers.map(num => {
        return (
          <Num key={num} num={num} clickHandle={() => numClickHandle(num)} />
        );
      })}
      <br />
      <br />
      {operators.map(op => {
        return (
          <Operator
            key={op.opName}
            operatorSymbol={op.opSym}
            operatorAction={() =>
              processOperator(op.opSym === "=" ? "" : op.opSym)
            }
          />
        );
      })}
    </>
  );
}
