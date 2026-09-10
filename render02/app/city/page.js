"use client"
import { useActionState } from "react"

import CityData from "./action"

export default function Page(){
    const [data, formAction] = useActionState(CityData);
    return(
        <div>
            <form action={formAction}>
                <input type="text" name="name" className="border p-1 m-1"></input>
                <br/>
                <select name="city" className="border p-1 m-1">
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Phagwara">Phagwara</option>
                    <option value="Chandigarh">Chandigarh</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {data &&(
                <div>
                    Name: {data.name }<br/>
                    Gender: {data.city}
                </div>
            )}
        </div>
    )
}