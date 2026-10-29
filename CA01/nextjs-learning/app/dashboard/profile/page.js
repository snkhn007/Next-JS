import Link from "next/link";
export default function Profile(){
    return (
        <div>
            <nav>
                <Link href="/dashboard/students">Students | </Link>
                <Link href="/dashboard/profile">Profile | </Link>
                <a href="/dashboard/settings">Settings</a>
                {/* <Link href="/dashboard/settings">Settings</Link> */}
            </nav>
            <h1>Profile Page</h1>
        </div>
    )
}