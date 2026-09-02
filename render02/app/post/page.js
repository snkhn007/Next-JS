export default async function Page(){
    // Products
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    return(
        <>
        {/* <h1> This is POST page: {data.products}</h1> */}
        <div >
            {
                data.products.map((item)=>(
                    <p key={item.id}>
                        <span>{item.id}</span><br/>
                        <span>{item.title}</span><br/>
                        <span>{item.category}</span><br/>
                    </p>
                ))
            }
        </div>

        </>
    )
}

// student management dashboarc 
// /db
// /db/stud
// /db/stud/[id]
// /db/profile
// /db/settings

