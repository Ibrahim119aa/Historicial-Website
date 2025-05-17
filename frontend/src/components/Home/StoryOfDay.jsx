
const StoryOfDay = () => {
    return (
        <div>
            <div className="flex justify-center  mt-3 text-[2.5rem] items-center ">
                <h3>Story of the day</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex relative mt-3 rounded-lg justify-center">
                <div className="storybox w-[100%] rounded-lg">


                    <h1 data-aos="fade-left" data-aos-duration="1000" className=" text-white text-[3rem] absolute bottom-[15%] left-[5%] ">The Brilliant Exiles</h1>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className=" text-white text-[1.8rem] absolute bottom-[10%] left-[5%]">American women in Paris from 1900–1939</h1>
                    <button data-aos="fade-left" data-aos-duration="1000" className="rounded border bg-blue-600 border-transparent px-5 py-2 absolute bottom-[3%] left-[5%] text-white">Explore</button>
                </div>
            </div>
        </div>
    )
}
export default StoryOfDay;