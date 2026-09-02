export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h2>This is about page</h2>
    </div>
  );
}
