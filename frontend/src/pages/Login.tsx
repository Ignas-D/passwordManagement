import {useState} from "react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [masterPass, setMasterPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {}


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">

                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Log In!</h1>
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
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
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
                                    <button type="button"
                                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4">Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <a href="sign-up" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Create an Account.
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
}