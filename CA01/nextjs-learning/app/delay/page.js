export default async function Delay(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1>This is Main Page </h1>
        </div>
    )

}