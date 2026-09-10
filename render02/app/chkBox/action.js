
export default function CityData(prevState, formData){
    const name = formData.get("name");
    const course = formData.getAll("course");
    // return{name, course};
    console.log(name);
    console.log(course);
}