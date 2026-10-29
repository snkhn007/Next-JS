"use client";
import React, { useEffect, useState } from "react";
export default function Page() {
  const [students, setStudents] = useState([]);
  async function fetchStudents() {
    try {
      const response = await fetch("/api/students");
      const data = await response.json();

      if (response.ok) {
        setStudents(data);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl">
        Welcome to the Home Page
      </h1>
      <h2 className="text-center text-2xl mt-5">
        Student Records
      </h2>
      <table className="mx-auto mt-5 border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-3">ID</th>
            <th className="border border-black p-3">Name</th>
            <th className="border border-black p-3">Email</th>
            <th className="border border-black p-3">Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-black p-3">
                {student.id}
              </td>

              <td className="border border-black p-3">
                {student.name}
              </td>

              <td className="border border-black p-3">
                {student.email}
              </td>

              <td className="border border-black p-3">
                {student.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}