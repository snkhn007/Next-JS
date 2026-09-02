import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ----NAVIGATION--- */}
      {/* <main>
        <a href="about">About | </a>
        <a href="contact">Contact | </a>
        <a href="">home</a>
      </main> */}

      {/* LINK TAG */}
      {/* used for client side navigation so that the pages do not reload */}

      <Link href="about">About | </Link>
      <Link href="contact">Contact | </Link>
      <Link href="">Home</Link>

      <h1> Welcome to next Home Page</h1>

      {/* -----LOADING--- */}
    </>
  );
}
