"use client";
import React, { useState } from "react";

export default function Page() {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      {cnt}
      <button onClick={() => { setCnt(cnt + 1) }} > increment </button>
      <button onClick={() => { setCnt(cnt - 1) }} > dec </button>
    </>
  );
}
