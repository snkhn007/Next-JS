export default function CityData(prevState, formData){
    const name = formData.get("name");
    const city = formData.get("city");
    return{name, city};
}