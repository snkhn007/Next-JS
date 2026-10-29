import Link from "next/link";

export default async function Id({params}){
    const {id} =await params;
    return (
        <div>
            <nav>
                <Link href="/dashboard/students">Students | </Link>
                <Link href="/dashboard/profile">Profile | </Link>
                <Link href="/dashboard/settings">Settings</Link>
            </nav>
            <h1>Id Page</h1>
            <p>Student ID: {id}</p>
        </div>
    )
}