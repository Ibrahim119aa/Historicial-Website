import React, { Suspense, memo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const LandingPage = React.lazy(() => import("./page/Home/page"));
const Navbar = React.lazy(() => import("./components/HomePage/Navbar"));
const Footer = React.lazy(() => import("./components/HomePage/Footer"));

const HomePage = React.lazy(() => import("./page/LandingPage/page"));
const SignupPage = React.lazy(() => import("./page/Signup/SignupPage"));
const LoginPage = React.lazy(() => import("./page/Login/LoginPage"));
const BlogPage = React.lazy(() => import("./page/Blogs/BlogPage"));
const BlogDetailPage = React.lazy(() => import("./page/BlogDetail/BlogDetailPage"));
const QuizzPage = React.lazy(() => import("./page/Quizzes/QuizzPage"));
const QuizzCategoriePage = React.lazy(() => import("./page/Quizzes/QuizzCategorie"));
const MapPage = React.lazy(() => import("./page/Map/MapPage"));
const TimelinePage = React.lazy(() => import("./page/Timeline/TimeLinePage"));
const UserProfile = React.lazy(() => import("./page/Users/UserProfile"));
const StartPage = React.lazy(() => import("./page/StartPage/StartPage"));
const PrivacyPolicy = React.lazy(() => import("./page/PrivacyPolicy/PrivacyPolicy"));
const EncyclopediaPage = React.lazy(() => import("./page/Encyclopedia/EncyclopediaPage"));
const EncyclopediaDetailPage = React.lazy(() => import("./page/Encyclopedia/EncyclopediaDetailPage"));
const AdminLogin = React.lazy(() => import("./page/AdminLogin/page"));


//
// const QuizzPage = React.lazy(() => import("./page/Quizzes/QuizzPage")); Reusable Loader Component
const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress style={{ color: "#1890ff" }} />
  </div>
);


const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin-login" element={<Suspense fallback={<Loader />}><AdminLogin /></Suspense>} />

        <Route path="/" element={<Suspense fallback={<Loader />}><StartPage /></Suspense>} />
        <Route path="/Privacy-Policy" element={<Suspense fallback={<Loader />}><PrivacyPolicy /></Suspense>} />


        <Route path="/Profile" element={<Suspense fallback={<Loader />}><UserProfile /></Suspense>} />

        <Route path="/map" element={<Suspense fallback={<Loader />}><MapPage /></Suspense>} />
        <Route path="/Timeline" element={<Suspense fallback={<Loader />}><TimelinePage /></Suspense>} />

        <Route path="/encyclopedia" element={<Suspense fallback={<Loader />}><EncyclopediaPage /></Suspense>} />
        <Route path="/encyclopedia/:id" element={<Suspense fallback={<Loader />}><EncyclopediaDetailPage /></Suspense>} />

        {/* <Route path="/encyclopedia" element={<Suspense fallback={<Loader />}><LandingPage /></Suspense>} /> */}

        <Route path="/home" element={<Suspense fallback={<Loader />}><HomePage /></Suspense>} />
        <Route path="/sign-up" element={<Suspense fallback={<Loader />}><SignupPage /></Suspense>} />
        <Route path="/sign-in" element={<Suspense fallback={<Loader />}><LoginPage /></Suspense>} />
        <Route path="/blogs" element={<Suspense fallback={<Loader />}><BlogPage /></Suspense>} />
        <Route path="/blogs/:Id" element={<Suspense fallback={<Loader />}><BlogDetailPage /></Suspense>} />
        <Route path="/quizz" element={<Suspense fallback={<Loader />}><QuizzCategoriePage /></Suspense>} />
        <Route path="/quizz/:Id" element={<Suspense fallback={<Loader />}><QuizzPage /></Suspense>} />

      </Routes>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
