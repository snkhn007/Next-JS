export default function SignUpData(prevState, formdata){
    // formData will store data on submission

    const name = formdata.get('name');
    const email = formdata.get('email');
    const pass = formdata.get('pass');
    const cpass = formdata.get('cpass');
    
    if(!name){
        return{message:"Enter Name"}
    }
    if(!email){
        return{message:"Enter Email"}
    }
    if(!pass){
        return{message:"Enter Password"}
    }
    if(!cpass){
        return{message:"Confirm Password"}
    }

    console.log(name);
    console.log(email);
    console.log(pass);
    console.log(cpass);
    
    if (pass !== cpass) {
        return { message: "Passwords do not match" }
    }

    return{name, pass, message:"Signup Sucessfull"}

}