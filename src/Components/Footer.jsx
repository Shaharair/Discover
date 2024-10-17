import React from 'react'
import LogoSS from "../assets/logo.png"
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <section className="bg-[#000000]">
    <div className="container px-3 lg:px-0 mx-auto">
        <div className="flex items-center justify-between">
            <div className="">
                <img src={LogoSS} alt="logo" />
            </div>
            <div className="lg:flex items-center lg:gap-5 gap-3">
                <h3 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] pb-[10px] lg:pb-0">Ready to explore?</h3>
                <h4 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] border-2 border-[#FFA343] lg:px-[40px] px-[30px] py-3 hover:bg-[#FFA343] hover:text-[white] rounded duration-300 ease-in-out">Get started</h4>
            </div>
        </div>
        <div className="lg:flex items-center justify-between">
            <div className="lg:w-[40%] w-full">
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-[white] lg:py-[50px] py-[20px]">Let's go on vacation, Make your day</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:pb-[30px] pb-[20px]">Terms & Conditions</p>
                <div className=" flex items-center lg:gap-5 gap-3 text-[white] font-sans font-bold lg:text-[24px] text-[18px]">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaInstagram/>
                </div>
            </div>
            <div className="lg:w-[20%] w-full">
                <ul className="text-center">
                    <li className="font-sans font-bold lg:text-[20px] text-[16px] text-[#FFD1A0] pb-[10px]">Services</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Email Marketing</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Campaigns</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Branding</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Offline</li>
                </ul>
            </div>
            <div className="lg:w-[20%] w-full mt-[30px] lg:mt-0">
                <ul className="text-center">
                    <li className="font-sans font-bold lg:text-[20px] text-[16px] text-[#FFD1A0] pb-[10px]">About</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Our Story</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Benefits</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Term</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Career</li>
                </ul>
            </div>
            <div className="lg:w-[20%] w-full mt-[30px] lg:mt-0">
                <ul className="text-center">
                    <li className="font-sans font-bold lg:text-[20px] text-[16px] text-[#FFD1A0] pb-[10px]">Help</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">FAQ’S</li>
                    <li className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] py-1">Contact us</li>
                </ul>
            </div>
        </div>
        <div className="py-[60px]">
            <h3 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] text-center">Copyright 2023 QWERy</h3>
        </div>
    </div>
   </section>
  )
}

export default Footer