import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <>
            <div>
                <Link to="/">
                    <h3>Home</h3>
                </Link>
                <Link to="/Login">
                    <h3>Login</h3>
                </Link>
            </div>
        </>
    )
};