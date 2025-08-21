import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <h1 className="flex justify-center text-6xl m-6">
                    Welcome to the Password Manager!
                </h1>
                <div className={"flex flex-col items-center"}>
                    <p>I created this Password Manager as a way to randomly generate and
                        hold onto my own personal passwords
                        without the need to use a paid subscription.</p>
                    <p>Security online should be important, but access to this privacy should not be hidden.</p>
                </div>


                <div className={"flex flex-row text-3xl justify-evenly mt-5"}>
                    <Link to='/login'>
                        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                            Login Here!
                        </button>
                    </Link>

                    <Link to='/sign-up'>
                        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Don't have an account? Click here to sign up!</button>
                    </Link>
                </div>

            </div>
        </>
    );
}