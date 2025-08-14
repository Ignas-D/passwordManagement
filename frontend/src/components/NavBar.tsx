import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <>
            <div className="flex flex-row justify-evenly">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
                <Link to="/login">
                    <h3>Login</h3>
                </Link>
            </div>
        </>
    )
};