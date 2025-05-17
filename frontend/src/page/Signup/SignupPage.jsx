import { db, auth } from "../../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const n = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            const user = userCredential.user;

            const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                uid: user.uid,
            };

            await addDoc(collection(db, "users"), newUser);
            alert("User created successfully!");
            n("/sign-in");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", password: "" });
        } catch (err) {
            console.error("Error adding user: ", err);
            alert("Failed to create user.");
        }
    };

    return (
        <div className="bg-[#1d1d1b] bg-opacity-90 w-full min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full px-4 md:px-10 py-10 bg-[#282827] bg-opacity-70 rounded-lg shadow-lg backdrop-blur-xl">
                <div className="text-center mb-6">
                    <h2 className="text-white text-2xl font-bold">Join Us and Learn Many Things</h2>
                    <p className="text-white mt-2">Create an account to start your learning journey.</p>
                </div>

                <div className="flex justify-center items-center flex-col space-y-6">
                    <div className="flex gap-4 justify-center items-center">
                        {/* Social Media Icons */}
                        <div className="w-12 h-12 bg-[#3b5998] rounded-full flex justify-center items-center text-white hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                <path d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635z" />
                            </svg>
                        </div>
                        <div className="w-12 h-12 bg-[#4285F4] rounded-full flex justify-center items-center text-white hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" className="w-6 h-6">
                                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a47 47 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-white mt-4">or</div>

                    <div className="space-y-4">
                        {/* Form Fields */}
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={formData.firstName}
                            placeholder="First Name"
                            className="w-full h-12 px-4 text-sm text-white bg-transparent border-2 border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={formData.lastName}
                            placeholder="Last Name"
                            className="w-full h-12 px-4 text-sm text-white bg-transparent border-2 border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Email Address"
                            className="w-full h-12 px-4 text-sm text-white bg-transparent border-2 border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300"
                        />
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                            placeholder="Phone Number"
                            className="w-full h-12 px-4 text-sm text-white bg-transparent border-2 border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            placeholder="Password"
                            className="w-full h-12 px-4 text-sm text-white bg-transparent border-2 border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300"
                        />

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full h-12 bg-[#3498db] text-white rounded-md hover:bg-[#2980b9] transition-all duration-300 mt-4"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="text-center mt-4 text-white/60">
                        <Link to="/sign-in" className="hover:underline">Already have an account? Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
