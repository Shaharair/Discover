import React from 'react'
import BannerDD from "../assets/banner1.png"

const About = () => {
  return (
    <section className="bg-[#000000]">
      <div className="container px-3 lg:px-0 mx-auto lg:py-[150px] py-[70px]">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[50%] w-full">
            <img src={BannerDD} alt="banner1" />
          </div>
          <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans lg:font-bold font-normal lg:text-[18px] text-[14px] text-[#FBD784] uppercase tracking-widest">East Nusa Tenggara</h3>
              <h2 className="font-sans font-bold lg:text-[64px] text-[24px] text-[white] uppercase pr-[100px]">Have you enjoyed your holiday?</h2>
              <p className="font-sans font-semibold lg:text-[14px] text-[12px] text-[white] uppercase">You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
              <h4 className="font-sans font-bold lg:text-[18px] text-[16px] text-[#FBD784] uppercase lg:pt-[30px] pt-[20px]">read more</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About