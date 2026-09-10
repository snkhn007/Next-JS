"use server";

export default async function courseData(prevState, formData) {
    const name = formData.get("name");
    const age = formData.get("age");
    const phone = formData.get("phone");
    const address = formData.get("address");

    const skills = formData.getAll("skills");

    const city = formData.get("city");

    console.log(name);
    console.log(age);
    console.log(phone);
    console.log(address);
    console.log(skills);
    console.log(city);

    return {
        name,
        age,
        phone,
        address,
        skills,
        city
    };
}