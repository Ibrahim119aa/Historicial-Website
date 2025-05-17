import React from "react";
// const Navbar = React.lazy(() => import("../../components/HomePage/Navbar"));
const Banner = React.lazy(() => import("../../components/HomePage/Banner"));
const Body = React.lazy(() => import("../../components/HomePage/Body"));
const LandingPage = () => {
    return (
        <div>

            <Banner />
            <Body />


        </div>
    )

}
export default LandingPage;