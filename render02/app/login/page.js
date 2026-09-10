"use client"
import React, { useActionState } from "react"
import LogData from "./action"
export default function Page(){
    const[student, formAction] = useActionState(
        LogData, null
    )
    return(
        <>
        <h2 className="m-2">Login Form</h2>
        <form className="flex flex-col w-60" action={formAction}>
            <input type="test" placeholder="Enter name" name="name" className="border m-2"/>
            <input type="text" placeholder="Enter Password" name="pass" className="border m-2"/>
            <button type="submit" className="border m-2">Submit</button>
        </form>
        {student && (
            <p className="m-2">
                {student.message}
            </p>
        )}
        </>
    )
}