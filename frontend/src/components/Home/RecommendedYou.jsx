import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const RecommendYou = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        arrows: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="flex justify-center   text-[2rem] items-center ">
                <h3 className="mt-5">Recommended for you</h3>
            </div>
            <div className="flex justify-center  mt-2 text-[1rem] items-center ">

                <span className="text-gray-700">Discover popular artworks and hidden gems from around the world
                </span>
            </div>
            <div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    className="slider-container mt-5 mx-32 tablet:mx-[5rem] mobile:mx-[4rem] mobile-extra-small:mx-[2rem] mobile-small:mx-[3rem]"
                >
                    <Slider {...settings}>

                        <div className="testimonial-slide  px-2">
                            <img src="/assets/images/recommended1.jpg" className="rounded-lg h-[25rem]" alt="" />
                        </div>
                        <div className="testimonial-slide  px-2">
                            <img src="/assets/images/recommended2.jpg" className="rounded-lg h-[25rem]" alt="" />
                        </div>
                        <div className="testimonial-slide  px-2">
                            <img src="/assets/images/recommended3.jpg" className="rounded-lg h-[25rem]" alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default RecommendYou;