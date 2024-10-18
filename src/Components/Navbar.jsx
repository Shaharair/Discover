import React, { useState } from 'react'
import LogoImg from "../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {

    let [show, setShow] = useState(false)

    return (
        <section className=" bg-ban">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between py-[50px]">
                    <div className="">
                        <img src={LogoImg} alt="logo" />
                    </div>
                    <div className="">
                        <ul className={`lg:flex gap-5 absolute top-0 left-0 lg:static text-center duration-700 ease-in-out pt-[70px] lg:pt-0 ${show == true ? "bg-[gray] w-[200px] h-[300px] mt-[80px]" : "left-[-200px]"}`}>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] hover:text-[#262626] duration-300 ease-in-out">Home</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] hover:text-[#262626] duration-300 ease-in-out py-[10px] lg:py-0">About us</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] hover:text-[#262626] duration-300 ease-in-out">Information</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] hover:text-[#262626] duration-300 ease-in-out py-[10px] lg:py-0">Culture</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] hover:text-[#262626] duration-300 ease-in-out">Contact Us</li>
                        </ul>
                        <div onClick={() => setShow(!show)} className="lg:hidden">
                            {show == true ? <RxCross2/> : <FaBars/>}
                        </div>
                    </div>
                </div>
                <div className="lg:py-[270px] py-[100px]">
                    <div className="">
                        <h3 className="font-sans lg:font-bold font-normal lg:text-[18px] text-[14px] text-[#FFC178] uppercase tracking-widest">explore the Nature Beauty</h3>
                        <h2 className=" font-sans font-bold lg:text-[96px] text-[36px] text-[white]">Discover</h2>
                        <h5 className="font-sans font-medium lg:text-[88px] text-[24px] text-[white]">Wonderful Indonesia</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar