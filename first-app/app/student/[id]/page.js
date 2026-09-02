export default async function StudentId({ params }) {
  const { id } = await params;

  //  If student id exists on db or not->
  const stud = {
    101: "Sana",
    102: "Saniya",
  };

  //   if (stud[id]) {
  //   or
  if (id in stud) {
    return (
      <>
        <h1>Student Id present</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>User ID not present</h1>
      </>
    );
  }

  //   const stud = {
  //     101: "Sana",
  //     102: "Saniya",
  //   };
  //   return (
  //     <>
  //       <h1>This is a Dynamic route with ID: {id}</h1>
  //       <h2>name : {stud[id]}</h2>
  //     </>
  //   );

  //   if (id == "101") {
  //     return (
  //       <>
  //         <h1>Student Id present</h1>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>User ID not present</h1>
  //       </>
  //     );
  //   }
}
