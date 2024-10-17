import React from 'react'
import BannerFF from "../assets/banner3.jpg"

const Culture = () => {
  return (
    <section className="bg-[#000000] py-[160px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className=" lg:flex items-center justify-between">
                <div className="lg:w-[50%] w-full">
                    <h5 className="font-sans font-bold lg:text-[18px] text-[16px] text-[#FBD784] tracking-widest uppercase">Indonesian Culture</h5>
                    <h3 className="font-sans font-bold lg:text-[64px] text-[24px] text-[white] uppercase">Our culture here is very friendly to people</h3>
                    <p className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] uppercase">known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                    <h4 className="font-sans font-bold lg:text-[18px] text-[16px] text-[#FBD784] uppercase lg:pt-[30px] pt-[20px]">read more</h4>
                </div>
                <div className="lg:w-[50%] w-full pt-[30px] lg:pt-0">
                    <img src={BannerFF} alt="banner3" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Culture