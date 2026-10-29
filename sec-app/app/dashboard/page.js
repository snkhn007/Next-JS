
'use client';

import React, { useEffect, useState } from 'react';

export default function Dashboard() {
    const [user, setUser] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const name = sessionStorage.getItem("user");
        const savedRole = sessionStorage.getItem("role");

        if (!name || !savedRole) {
            window.location.href = "/login";
            return;
        }

        setUser(name);
        setRole(savedRole);
        setLoading(false);
    }, []);

    function logout() {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("role");
        window.location.href = "/login";
    }

    if (loading) {
        return <p>Loading dashboard...</p>;
    }

    if (role === "admin") {
        return (
            <>
                <h1>ADMIN DASHBOARD PAGE</h1>
                <p>You can access all student marks.</p>
                <p>Welcome {user}</p>
                <button onClick={logout}>Logout</button>
            </>
        );
    }

    if (role === "student") {
        return (
            <>
                <h1>STUDENT DASHBOARD PAGE</h1>
                <p>You can access your marks.</p>
                <p>Welcome {user}</p>
                <button onClick={logout}>Logout</button>
            </>
        );
    }

    return (
        <>
            <h1>Invalid role</h1>
            <button onClick={logout}>Logout</button>
        </>
    );
}

// npm i -D prisma@7
// npm i @prisma client@7
// npm i @prisma/adaptter-better-sqlite3 better-sqlite3 dotenv