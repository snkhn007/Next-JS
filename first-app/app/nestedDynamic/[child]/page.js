export default async function Child({ params }) {
  const { id } = await params;
  return (
    <>
      <h1> Child with id : {id}</h1>
    </>
  );
}
