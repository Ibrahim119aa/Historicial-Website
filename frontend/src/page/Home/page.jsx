import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = React.lazy(() => import("../../components/Home/Banner"));
const TodayFun = React.lazy(() => import("../../components/Home/TodayFun"));
const TodayMedia = React.lazy(() => import("../../components/Home/TodayMedia"));
const StoryOfDay = React.lazy(() => import("../../components/Home/StoryOfDay"));
const TodayTopic = React.lazy(() => import("../../components/Home/TodayTopic"));
const RecommendedYou = React.lazy(() => import("../../components/Home/RecommendedYou"));
// const RecommendedYou = React.lazy(() => import("../../components/Home/RecommendedYou"));

const LandingPage = () => {


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Banner />
            <TodayFun />
            <TodayMedia />
            <StoryOfDay />
            <TodayTopic />
            <RecommendedYou />
        </div>
    )
}
export default LandingPage;

