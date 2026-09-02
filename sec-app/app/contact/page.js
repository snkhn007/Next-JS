import Link from "next/link";

export default async function Contact() {
  // this will cause the loading page to appear
  await new Promise((resolve) => setTimeout(resolve, 3000));

  {
    /* displaying   EROOR*/
  }
  // const data = "sana";
  return (
    <>
      {/* <main>
        <a href="about">About | </a>
        <a href="contact">Contact | </a>
        <a href="">home</a>
      </main> */}

      <Link href="about">About | </Link>
      <Link href="contact">Contact | </Link>
      <Link href="">Home</Link>

      <h1>CONTACT PAGE</h1>
      {/* displaying   EROOR*/}
      <h1>Causing error: {data}</h1>
    </>
  );
}
