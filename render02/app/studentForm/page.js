export default function Page(){
    async function addStud(formData) {
        "use server"
        const name = formData.get("name");
        const email = formData.get("email");
        const address = formData.get("address");
        const phone = formData.get("phone");
        console.log(name, email, address, phone);
        return console.log("Form Submitted");        
    }
    return(
        <div>
            <form action={addStud} className="p-3 flex flex-col gap-4 w-100 mx-auto mt-10 border">
                <label>Name</label>
                <input type="text" placeholder="Enter Name" name="name" className="border"/>
                <label>Eamil</label>
                <input type="email" placeholder="Enter Email" name="email" className="border"/>
                <label>Address</label>
                <input type="text" placeholder="Enter address" name="address" className="border"/>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Phone" name="phone" className="border"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}