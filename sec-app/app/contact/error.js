"use client";
export default function Error({ error }) {
  return (
    <>
      <h1>EROOR : {error.message}</h1>
    </>
  );
}
