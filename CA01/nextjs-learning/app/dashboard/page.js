import Link from "next/link";
export default function Dashboard(){
    return (
        <div>
            <nav>
                <Link href="/dashboard/students">Students | </Link>
                <Link href="/dashboard/profile">Profile | </Link>
                <Link href="/dashboard/settings">Settings</Link>
            </nav>
            <h1>DashBoard Page</h1>
        </div>
    )
}