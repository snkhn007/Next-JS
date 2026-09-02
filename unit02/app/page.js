import Header from "./components/header";
import Student from "./components/student";
import Button from "./components/Button";

import Counter from "./components/counter";
export default function Home() {
  return (
    <>
      <Header />
      <h3>Home Page</h3>
      <Student name="name 01" />
      <Button name="btn" />
      <Student name="name 02" />
      <Student name="name 03" />

      <Counter />
    </>
  );
  // component ->
  // 1. server component ex student, button, etc
  // 2. client component ex counter made using "use client  "
}
