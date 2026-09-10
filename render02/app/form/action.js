export default function FormData(prevState, formData){
    const name = formData.get("name");
    const gender = formData.get("gender");
    console.log(name);
    console.log(gender);
    return{name, gender};
}