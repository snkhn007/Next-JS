"use server"

import fs from "fs"
import path from "path"

export default async function StoreImage(prevState, formData) {
    const image = formData.get("image")

    const bytes = await image.arrayBuffer()

    const buffer = Buffer.from(bytes)

    const filePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        image.name
    )

    fs.writeFileSync(filePath, buffer)
    return { fileName: image.name }

    // return (fileName : image.name)
}