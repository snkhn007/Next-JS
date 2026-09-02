import Link from "next/link";

export default function About() {
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

      <h2>ABOUT PAGE</h2>
    </>
  );
}
