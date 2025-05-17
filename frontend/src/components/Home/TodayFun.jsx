const TodayFun = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full bg-[#b0a3bc] pb-10">
            <div className="flex justify-center   text-[2rem] items-center ">
                <h3 data-aos="fade-left" data-aos-duration="1000" className="mt-6">Today's fun</h3>

            </div>
            <div className="flex justify-center  mt-2 text-[0.9rem] items-center ">

                <span data-aos="fade-right" data-aos-duration="1000">Let AI talk you through culture
                </span>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex relative mt-3 rounded-lg justify-center">
                <div className="funbox w-[80%] rounded-lg">
                    <svg
                        className="cursor-pointer font-bold absolute top-[3%] text-white right-[11%]"
                        width="18"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M15 14c-.79 0-1.5.31-2.03.81L5.91 10.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L5.04 7.81C4.5 7.31 3.79 7 3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM3 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                        />
                    </svg>

                    <h1 data-aos="fade-left" data-aos-duration="1000" className=" text-white text-[2rem] absolute top-[10%] left-[41%]">Mice In The Museum</h1>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className=" text-white text-[1rem] absolute bottom-[5%] left-[39%]">An AI audio experiment following two curious mice</h1>
                </div>
            </div>
        </div>
    )
}
export default TodayFun;