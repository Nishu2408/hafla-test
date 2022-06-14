import React from "react";

export default function Operator({ operatorSymbol, operatorAction }) {
  return (
    <button onClick={operatorAction}>
      {operatorSymbol}
    </button>
  );
}
