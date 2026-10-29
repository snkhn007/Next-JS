import Link from "next/link";
export default function Settings(){
    return (
        <div>
            <nav>
                <Link href="/dashboard/students">Students | </Link>
                <Link href="/dashboard/profile">Profile | </Link>
                <Link href="/dashboard/settings">Settings</Link>
            </nav>
            <h1>Setting Page</h1>
        </div>
    )
}