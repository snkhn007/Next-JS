import Link from "next/link"
export default async function Home(){
  const data = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
  const parsed = await data.json();
  console.log(parsed);
  return(
    <div className="bg-black w-full">
      {/* navigation */}

      <div className=" border m-2 p-2 flex justify-between ">
        <div>
          <h1 className="text-red-500 text-2xl">NETFLIX</h1>
        </div>
        <nav className="text-white">
          <Link href="/about">About  |  </Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="text-white flex flex-wrap w-full">
        {
          parsed.map((el)=>(
            <div key={el.Year} className="border m-2 p-2 rounded">
              <p>{el.Title}</p>
              <p>{el.Year}</p>
              <p>{el.Runtime}</p>
              <img src={el.Poster} className="w-70 border rounded "></img>
            </div>
          ))
        }

      </div>
      <div className="bg-gray-500 w-full flex justify-center align-center p-10 text-white">
        <p>&copy; 2026 Netflix</p>
        {/* Footer */}

      </div>
    </div>
  )
}