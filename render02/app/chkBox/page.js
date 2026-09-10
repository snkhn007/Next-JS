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
                <input type="checkbox" name="course" value="Java"></input> Java<br/>
                <input type="checkbox" name="course" value="Pyton"></input> Python<br/>
                <input type="checkbox" name="course" value="Cpp"></input> Cpp<br/>
                <input type="checkbox" name="course" value="C"></input> C<br/>
                <button type="submit">Submit</button>
            </form>
            {data &&(
                <div>
                    Name: {data.name }<br/>
                    Courses: {data.course}
                </div>
            )}
        </div>
    )
}