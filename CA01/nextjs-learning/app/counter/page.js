"use client"

import { useState } from "react";

export default function Counter(){
    const [cnt, setCnt] = useState(1);
    return(
        <div>
            <h1>{cnt}</h1>
            <button onClick={()=>setCnt(Math.min(cnt+1, 10))}>INC</button>
            <button onClick={()=>setCnt(Math.max(cnt-1, 1))}>DEC</button>
        </div>
    )
}