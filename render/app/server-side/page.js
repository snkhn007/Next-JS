export default async function Page(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache:'no-store'
    })

    const data = await res.json();
    return(
        <>
        {data.map((item) => (
            <p key={item.id}>{item.title}</p>
        ))}
        {/* <p>{data[0].userId}</p>
        <p>{data[0].id}</p>
        <p>{data[0].title}</p>
        <p>{data[0].body}</p> */}
        </>
    )
}