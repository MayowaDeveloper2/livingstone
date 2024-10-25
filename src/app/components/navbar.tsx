/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";
import Image from "next/image";
import livingstonelogo from "../images/living stone fire revival logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    const handlemenubar = () => {
        setisOpen(!isOpen);
    }



    return (
        <>
            <nav className="flex w-full bg-blue-700 justify-between px-24 sm:px-10 xs:px-10 items-center h-[60px]">
                <div>
                    <Image src={livingstonelogo} alt="" className="w-[50px] h-[50px]"/>
                </div>
                <ul className="lg:flex gap-20 text-2xl text-white hidden ml-10">
                    <li>LIVING STONE FIRE MINISTRY</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>SERMONS</li>
                    <li>DONATE</li>
                    <li>LIVE</li>
                </ul>
                <div onClick={handlemenubar}>
                    {isOpen ? <IoMdClose className="lg:hidden text-3xl text-white font-bold" /> : <RiMenu3Fill  className="lg:hidden text-white text-3xl font-bold"/>}
                </div>
            </nav>
            <div className={`fixed bg-blue-700 z-50 h-screen top-14 left-0 w-[300px] text-white ps-2 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
                <ul>
                    <li>LIVING STONE FIRE MINISTRY</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>SERMONS</li>
                    <li>DONATE</li>
                </ul>
            </div>
        </>
    )
};