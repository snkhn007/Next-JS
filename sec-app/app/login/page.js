'use client'
import React from 'react';

export default function Login() {
    function login(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let role = e.target.role.value;
        sessionStorage.setItem("user", name);
        sessionStorage.setItem("role", role);
        window.location.href = "/dashboard";
    }

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <form onSubmit={login}>
                <input type="text" name="name"  className='border-1 m-2 p-2' placeholder='Enter Name'/>
                <input type="text" name="role"  className='border-1 m-2 p-2' placeholder='Enter Role'/>
                <button type="submit" className='border-1 m-2 p-2'>Login</button>
            </form>
        </>
    );
}
