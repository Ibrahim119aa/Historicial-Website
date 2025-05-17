import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import react-slick
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdminSign = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (!email.includes(".com")) {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email");
      return;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters");
      return;
    }

    try {
      nprogress.start();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      toast.success("Login successful");
      navigate("/Dashboard");
    } catch (error) {
      if (["auth/user-not-found", "auth/wrong-password"].includes(error.code)) {
        toast.error("Invalid email or password");
      } else {
        toast.error(error.message);
      }
    } finally {
      nprogress.done();
    }
  };

  // Slick Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  return (
    <div className="bg-[#1d1d1b] min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#282827] bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden">

        {/* Slick Slider */}
        <Slider {...sliderSettings}>
          <div className="flex flex-col justify-center items-center text-white p-10">
            <img
              src="assets/images/registration/temple.png"
              alt="Login"
              className="w-full max-w-md rounded-lg shadow-md"
            />
            <h2 className="text-2xl text-white opacity-70 font-semibold mt-6">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-300   ">
              Login to access your dashboard and manage your profile easily.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white p-10">
            <img
              src="assets/images/registration/rome.png"
              alt="Login"
              className="w-full max-w-md rounded-lg shadow-md"
            />
            <h2 className="text-2xl text-white opacity-70 font-semibold mt-6">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-300   ">
              Login to access your dashboard and manage your profile easily.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white p-10">
            <img
              src="assets/images/registration/rename.png"
              alt="Login"
              className="w-full max-w-md rounded-lg shadow-md"
            />
            <h2 className="text-2xl text-white opacity-70 font-semibold mt-6">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-300   ">
              Login to access your dashboard and manage your profile easily.
            </p>
          </div>
        </Slider>

        <div className="flex flex-col justify-center p-10">
          <h2 className="text-white text-2xl font-semibold mb-6">Login to Your Account</h2>

          <form onSubmit={loginHandler} className="space-y-4 text-white">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className={`input-field ${emailError ? 'border-red-500' : ''}`}
            />
            {emailError && <p className="text-red-300 text-sm">{emailErrorMessage}</p>}

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`input-field ${passwordError ? 'border-red-500' : ''}`}
            />
            {passwordError && <p className="text-red-300 text-sm">{passwordErrorMessage}</p>}

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400  text-sm mt-6 text-center">
            Don't have an account? <Link to="/sign-up" className="text-blue-400 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminSign;
