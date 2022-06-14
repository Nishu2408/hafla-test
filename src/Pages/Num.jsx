import React from "react";

export default function Num({ num, clickHandle }) {
  return (
    <button key={num} onClick={clickHandle}>
      {num}
    </button>
  );
}
