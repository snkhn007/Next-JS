"use client"
import React, { useActionState } from "react"
import SignUpData from "./action"
export default function Page(){
    const[student, formAction] = useActionState(
        SignUpData, null
    )
    return(
        <>
        <h2 className="m-2">SignUp Form</h2>
        <form className="flex flex-col w-60" action={formAction}>
            <input type="text" placeholder="Enter Name" name="name" className="border m-2"/>
            <input type="email" placeholder="Enter Email" name="email" className="border m-2"/>
            <input type="text" placeholder="Enter Password" name="pass" className="border m-2"/>
            <input type="text" placeholder="Confirm Password" name="cpass" className="border m-2"/>
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