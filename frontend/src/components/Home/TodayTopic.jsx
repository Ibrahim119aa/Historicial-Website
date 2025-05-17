const TodayTopic = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
            <div className="flex justify-center   text-[2rem] items-center ">
                <h3 data-aos="fade-left" data-aos-duration="1000" className="mt-6">Today's topic: Folk art</h3>

            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="px-36 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3"
            >
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="col-span-3 ">
                    <div className="topiconebg r1 relative w-full    rounded-xl shadow-lg flex items-center justify-center">
                        <button className="rounded border bg-blue-600 border-transparent px-2 py-1 absolute bottom-[15%] left-[5%] text-white">Art</button>
                        <h1 className=" text-white text-[1.3rem] absolute bottom-[7%] left-[5%] ">Jimini Roy</h1>
                        <h1 className=" text-white text-[0.8rem] absolute bottom-[2%] left-[5%] ">91 items</h1>

                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="col-span-6">
                    <div className="grid grid-cols-5 gap-3">
                        <div className="r1 col-span-3 relative topictwobg w-full    rounded-xl shadow-lg flex items-center justify-center ">
                            <button className="rounded border bg-blue-600 border-transparent px-2 py-1 absolute bottom-[22%] left-[5%] text-white">Artwork</button>
                            <h1 className=" text-white text-[1.3rem] absolute bottom-[9%] left-[5%] ">Painting of Dancing Gopi</h1>
                            <h1 className=" text-white text-[0.8rem] absolute bottom-[1%] left-[5%] ">Jamini Roy</h1>

                        </div>
                        <div className="r1 col-span-2 relative topicthreebg w-full    rounded-xl shadow-lg flex items-center justify-center ">
                            <button className="rounded border bg-blue-600 border-transparent px-2 py-1 absolute bottom-[22%] left-[5%] text-white">Color explorer</button>
                            <h1 className=" text-white text-[1.3rem] absolute bottom-[9%] left-[5%] ">Dark in Folk art</h1>
                            <h1 className=" text-white text-[0.8rem] absolute bottom-[1%] left-[5%] ">84 items</h1>

                        </div>
                    </div>
                    <div className="grid mt-4 grid-cols-5 gap-3">
                        <div className="r1 col-span-2 relative topicfourbg w-full    rounded-xl shadow-lg flex items-center justify-center ">
                            <button className="rounded border bg-blue-600 border-transparent px-2 py-1 absolute bottom-[33%] left-[5%] text-white">Story</button>
                            <h1 className=" text-white text-[1.3rem] absolute bottom-[8%] left-[5%] ">Aipan:Ritualistic Folk Art of Kumaon</h1>
                            <h1 className=" text-white text-[0.8rem] absolute bottom-[1%] left-[5%] ">Traditions from Uttarakhand</h1>

                        </div>
                        <div className="r1 col-span-3 relative topicfivebg w-full    rounded-xl shadow-lg flex items-center justify-center ">
                            <button className="rounded border bg-blue-600 border-transparent px-2 py-1 absolute bottom-[22%] left-[5%] text-white">Artist</button>
                            <h1 className=" text-white text-[1.3rem] absolute bottom-[9%] left-[5%] ">Osuitok Ipeelee</h1>
                            <h1 className=" text-white text-[0.8rem] absolute bottom-[1%] left-[5%] ">Jamini Roy</h1>

                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}
export default TodayTopic;