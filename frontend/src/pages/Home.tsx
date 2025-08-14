import {Link} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

export default function Home() {
    return (
        <>
            <div>
                {<NavBar/>}
            </div>
            <div>
                <h1>
                    Welcome to the Password Manager!
                </h1>
                <p>I created this Password Manager as a way to randomly generate and hold onto my own personal passwords
                    without the need to use a paid subscription.</p>
                <p>Security online should be important, but access to this privacy should not be hidden.</p>

                <Link to='/login'>
                    <button>
                        Login Here!
                    </button>
                </Link>

                <Link to='/sign-up'>
                    <button>Don't have an account? Click here to sign up!</button>
                </Link>
            </div>
        </>
    );
}