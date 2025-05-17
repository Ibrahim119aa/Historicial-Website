import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      localStorage.setItem("users", JSON.stringify(user));
      alert(`Login successful! Welcome ${user.email}`);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-lg w-full bg-[#2e2e2e] p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-white text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sign In
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-4 text-white bg-[#333333] border-2 border-[#444444] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div>
            <motion.input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-4 text-white bg-[#333333] border-2 border-[#444444] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-md text-white font-semibold hover:bg-blue-700 transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Log In
          </motion.button>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-400 hover:text-blue-500 transition">
                Sign Up
              </a>
            </p>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              By signing in, you agree to our{" "}
              <Link
                to="/Privacy-Policy"
                className="text-blue-400 hover:text-blue-500 font-semibold transition-all duration-200"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/Privacy-Policy"
                className="text-blue-400 hover:text-blue-500 font-semibold transition-all duration-200"
              >
                Privacy Policy
              </Link>.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
