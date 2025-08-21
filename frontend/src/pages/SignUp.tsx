import { useState } from "react";
import axios from "axios";


export default function SignUp(){
    const [email, setEmail] = useState("");
    const [masterPass, setMasterPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
    e.preventDefault();
    if (masterPass !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        email,
        masterPass
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error registering");
    }
  };


    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">

                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create an Account!</h1>
                            <p className="text-gray-600">Secure your digital life with a master password</p>
                        </div>
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit}>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input type="text"
                                           placeholder="Email"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Master Password
                                    </label>
                                    <div className="relative">
                                        <input type={showPassword ? 'text' : 'password'}
                                               placeholder="Master Password"
                                               value={masterPass}
                                               onChange={(e) => setMasterPass(e.target.value)}
                                               className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                        </input>
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                        >
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Confirm" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className={"relative"}>
                                        <input type={showPassword ? 'text' : 'password'}
                                               placeholder="Confirm Password"
                                               value={confirmPassword}
                                               onChange={(e) => setConfirmPassword(e.target.value)}
                                               className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                                        >
                                        </input>
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                        >
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button type="button"
                                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <a href="login" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};