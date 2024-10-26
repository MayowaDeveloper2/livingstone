/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from "next/image";
import livingstone from "../images/livingchurch1.png";
import sunday from "../images/Livingchurch3.png";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaBible, FaChair, FaPray } from "react-icons/fa";
import program1 from "../images/program1.jpg";
import program2 from "../images/program2.jpg";
import program3 from "../images/program3.jpg";
import program4 from "../images/church conference3.png";
import { useEffect, useRef } from 'react';
import { StaticImageData } from 'next/image'; // Import StaticImageData
import pastor from "../images/Livingchurch3.png";

// Change src type to accept StaticImageData
interface Program {
    src: StaticImageData;
    alt: string;
    date: string;
}

interface ProgramCarouselProps {
    Programs: Program[];
}

const ProgramCarousel: React.FC<ProgramCarouselProps> = ({ Programs }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const scrollToNextImage = () => {
            if (scrollContainer) {
                const firstImage = scrollContainer.firstElementChild as HTMLElement; // Type assertion
                const scrollAmount = firstImage.clientWidth + 32; // Adjust based on gap

                // Scroll to the next image
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                // Reset scroll if it reaches the end
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        };

        const intervalId = setInterval(scrollToNextImage, 1000); // Change image every 10 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide px-8 xs:px-4 xs:gap-[30px] gap-[30px]"
        >
            {Programs.map((program, index) => (
                <div key={index} className="flex-shrink-0">
                    <div className="w-[350px] flex flex-col items-center">
                        <Image
                            src={program.src}
                            alt={program.alt}
                            className="w-[350px] h-[350px] rounded-3xl"
                        />
                        <div className="text-white">{program.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Heropage() {
    const Programs: Program[] = [ // Specify Program[] type here
        { src: program1, alt: "program 1", date: "(October 10)" },
        { src: program2, alt: "program 2", date: "(October 12)" },
        { src: program3, alt: "program 3", date: "(October 14)" },
        { src: program4, alt: "program 3", date: "(October 29)" }

    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex flex-col justify-center w-full items-center">
                <Image src={livingstone} alt="" className="w-full lg:h-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute items-center text-center">
                    <button className="bg-customOrange w-[300px] text-white h-[20px] xs:mt-3 text-3xl xs:text-[24px] xs:w-[200px] sm:text-[20px] sm:w-[150px] items-center">
                        WELCOME TO
                    </button>
                    <div className="text-8xl xs:text-2xl bricolage text-white sm:text-[24px] xs:w-[300px] lg:mt-10">
                        Living Stone Fire And Revival Outreach
                    </div>
                    <div className="flex gap-2 xs:mt-10 sm:mt-14 justify-center xs:w-[300px] lg:mt-10">
                        <button className="px-3 py-2 w-[200px] sm:w-[150px] xs:h-[40px] sm:h-[38px] h-[60px] bg-customOrange text-white">
                            Watch Sermons
                        </button>
                        <button className="px-3 py-2 w-[200px] xs:h-[40px] sm:h-[38px] h-[60px] bg-customOrange text-white">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Welcome Message */}
            <div className="w-full text-center mx-auto">
                <div className="bricolage text-[20px] lg:text-4xl lg:mt-5 text-black font-bold">Welcome to Church</div>
                <div className="text-customOrange lg:text-[18px] sm:text-[14px] xs:text-[14px]">
                    A Christian organization with the aim of soul winning, deliverance, and getting people to know more about the Holy Ghost.
                </div>
            </div>

            {/* Service Cards */}
            <div className="w-full flex mx-auto mt-4">
                <div className="flex flex-col lg:flex-row gap-4 mx-auto">
                    {/* Service Card 1 */}
                    <div className="sm:w-[300px] xs:w-[300px] w-[400px] sm:h-[450px] h-[500px] xs:h-[400px] bg-white relative hover:bg-customOrange group hover:text-white p-10">
                        <Image src={sunday} alt="sunday service" />
                        <div className="absolute top-48 left-28 lg:top-72 lg:left-40">
                            <div className="w-[50px] h-[50px] group-hover:bg-white bg-customOrange rounded-full relative justify-center flex items-center">
                                <PiMicrophoneStageFill className="absolute group-hover:text-customOrange text-white" />
                            </div>
                        </div>
                        <div className="font-bold mt-3 lg:mt-5 text-black group-hover:text-white">Join Us Every Sunday for a Glorious Sunday Service</div>
                        <div className="mt-4 xs:text-[12px] text-black group-hover:text-white">
                            Experience uplifting sermons, heartfelt fellowship, and spiritual uplifting every Sunday at our Glorious Sunday Service.
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="sm:w-[300px] xs:w-[300px] w-[400px] sm:h-[450px] h-[500px] xs:h-[400px] bg-white relative hover:bg-customOrange group hover:text-white p-10">
                        <Image src={sunday} alt="sunday service" />
                        <div className="absolute top-48 left-28 lg:top-72 lg:left-40">
                            <div className="w-[50px] h-[50px] group-hover:bg-white bg-customOrange rounded-full relative justify-center flex items-center">
                                <FaBible className="absolute group-hover:text-customOrange text-white" />
                            </div>
                        </div>
                        <div className="font-bold mt-3 lg:mt-5 text-black group-hover:text-white">Word & Power Service</div>
                        <div className="mt-4 xs:text-[12px] text-black group-hover:text-white">
                            Elevate your Tuesdays with the WORD & POWER service: Join us weekly at 5pm to gain a much deeper understanding of the word of God.
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="sm:w-[300px] xs:w-[300px] w-[400px] sm:h-[450px] h-[500px] xs:h-[400px] bg-white relative hover:bg-customOrange group hover:text-white p-10">
                        <Image src={sunday} alt="sunday service" />
                        <div className="absolute top-48 left-28 lg:top-72 lg:left-40">
                            <div className="w-[50px] h-[50px] group-hover:bg-white bg-customOrange rounded-full relative justify-center flex items-center">
                                <FaChair className="absolute group-hover:text-customOrange text-white" />
                            </div>
                        </div>
                        <div className="font-bold mt-3 lg:mt-5 text-black group-hover:text-white">Midweek Service</div>
                        <div className="mt-4 xs:text-[12px] text-black group-hover:text-white">
                            Join us every Wednesday for our midweek service where we dive deeper into the word and strengthen our faith.
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Carousel */}
            <div className="mt-10 bg-black h-screen w-full lg:p-7">
                <h2 className="text-3xl text-center text-white bricolage">Upcoming Programs</h2>
                <div className="mt-40">
                    <ProgramCarousel Programs={Programs} />
                </div>
            </div>
            {/* Message from Pastor */}
            <div className="items-center flex flex-col lg:flex-row p-4 justify-center">
                <Image src={pastor} alt="message from pastor" className="w-[300px] h-[300px] rounded-2xl"/>
                <div className="flex flex-col lg:w-[600px] lg:ml-7">
                    <div className="text-customOrange bricolage lg:text-2xl">Welcome Message from Presiding Pastor</div>
                    <div className="text-black">Hello! I am Alexander Ohia, the presiding pastor of Living Stone Fire and Revival Inc.
                        I want to personally welcome you to our official website. You will find-useful information about the work
                        the Lord has committed into our hands. Besides, sermons that will richly bless your life have also been included 
                        to make your visit an exciting and rewarding experience
                    </div>
                </div>
                
            </div>
        </div>
    );
}
