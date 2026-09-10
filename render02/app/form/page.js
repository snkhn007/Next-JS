"use client"
import { useActionState } from "react"
import FormData from "./action"
export default function Page(){
    const [data, formAction] = useActionState(FormData, null);
    return(
        <div>
            <form action={formAction} className="border m-4 p-4">
                <label>Name: </label>
                <br/>
                <input type="text" placeholder="Enter name" name="name" className="border"/>
                <br/>
                <label>Gender: </label>
                <br/>
                <input type="radio" className="border" name="gender" value="male"/>Male
                <br/>
                <input type="radio" className="border" name="gender" value="female"/>Female
                <br />
                <button type="submit" className="border p-1 m-1">Submit</button>
            </form>
            {data &&(
                <div>
                    Name: {data.name }<br/>
                    Gender: {data.gender}
                </div>
            )}
        </div>
    )
}
