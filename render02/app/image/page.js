"use client"
import { useActionState } from "react"
import StoreImage from "./action"
export default function Image(){
    const [imageData, actionForm] = useActionState(StoreImage, null)
    return(
        <div>
            <form action={actionForm} encType="multipart/form-data">
                <input type="text" className="border p-2 m-2"></input>
                <input type="file" name="image" className="border p-2 m-2"></input>
                <input type="submit" name="btn" className="border p-2"></input>
            </form>
            {imageData && (
                <img src={"/uploads/" + imageData.fileName} width={500}/>
            )}
        </div>
    )
}