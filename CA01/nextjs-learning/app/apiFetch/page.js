export default async function ApiFetch() {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const parsed = await data.json();

    console.log(parsed);

    return (
        <div>
            <h1>API</h1>
            <div className="flex flex-row flex-wrap">
                {parsed.map((el) => (
                    <div key={el.id} className="border border-black p-2 m-2 gap-2 h-auto w-auto">
                        <p >{el.title}</p>
                        <p >{el.id}</p>
                        <br />
                    </div>
                ))}

            </div>

        </div>
    );
}