import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [username, setUsername] = useState("");
    const [masterPass, setMasterPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
    e.preventDefault();
    if (masterPass !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        masterPass
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error registering");
    }
  };


    return(
        <>
            <h1>Create an Account!</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Email"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       ></input>
                <input type="text"
                       placeholder="Master Password"
                       value={masterPass}
                       onChange={(e) => setMasterPass(e.target.value)}
                       >
                </input>
                <input type="text"
                       placeholder="Confirm Password"
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       >
                </input>
                <button type="submit">Register</button>
                <p>{message}</p>
            </form>
        </>
    )
};