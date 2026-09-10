export default function LogData(prevState, formdata){
    // formData will store data on submission

    const name = formdata.get('name');
    const pass = formdata.get('pass');
    
    if(!name){
        return{message:"Enter name"}
    }
    if(!pass){
        return{message:"Enter Password"}
    }

    if(name == "admin" || name == "Admin"  && pass =="123"){
        return{name, pass, message:"Login Sucessfull"}
    }
    else{
        return {message: "Enter Correct name and password"}
    }

    console.log(email);
    console.log(pass);
    

}