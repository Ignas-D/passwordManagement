import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex flex-row items-center ml-auto bg-gray-500 pb-2">
            <h2 className="text-4xl">Password Manager</h2>
            <div className="flex flex-row space-x-6 ml-8 text-2xl">
                <Link to="/">
                    <h3 className={"hover:bg-gray-600"}>Home</h3>
                </Link>
                <Link to="/login">
                    <h3 className={"hover:bg-gray-600"}>Login</h3>
                </Link>
            </div>
        </div>
    );
}