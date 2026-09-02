"use client";
import { useState } from "react";
export default function Counter() {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        Inc Cnt
      </button>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        Dec Cnt
      </button>
      <h2>Counter : {cnt}</h2>
    </>
  );
}
