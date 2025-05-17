import React from "react";

const OverlappingCard = React.lazy(() => import("./OverlappingCard"));
const TodayMedia = () => {
    const cards = [
        {
            id: 1, image: "assets/images/todaypick1.jpg",
            title: "Title1",
            description: "Description1"
        },
        {
            id: 2, image: "assets/images/todaypic2.jpg",
            title: "Title2",
            description: "Description2"
        },
        {
            id: 3, image: "assets/images/todaypick3.jpg",
            title: "Title3",
            description: "Description3"
        },
        {
            id: 4, image: "assets/images/todaypick4.jpg",
            title: "Title4",
            description: "Description4"

        },

    ];
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="flex justify-center  mt-3 text-[2.5rem] items-center ">
                <h3>Today's top picks</h3>
            </div>
            <div>
                <OverlappingCard cards={cards} />
            </div>

        </div>
    )
}
export default TodayMedia;