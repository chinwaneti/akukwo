import React from "react";

import headshot from '../images/hero1.webp'
import hero2 from "../images/hero2.webp";
import hero3 from "../images/hero3.webp";
import hero5 from "../images/hero5.webp";

import { Link } from 'react-router-dom';
import Testimonials from "./Testimonials";

// import Testimonials from "../components/Testimonials.json"
import PerfectProgram from "../components/PerfectProgram";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
<div className="w-[100px] md:w-full">
        <div className="bg-[#286f6b] w-full mx-auto pt-48">
          <div className="  bg-[#286f6b] mx-auto">
            <div className="flex  items-center px-16 mx-auto">
              <div className="text-white md:text-left text-center mx-auto">
                <h1  className="font-bold text-3xl" >Unlock Your Potential</h1>
                <h1 className="font-bold text-3xl">Anytime, Anywhere</h1>
                <p className="text-white py-8 md:w-4/5 w-[40%] md:mx-0 mx-auto leading-8">
                  Welcome to Akwukwo, your gateway to a world of knowledge and
                  growth. Explore our diverse range of courses, learn from
                  industry experts, and elevate your skills to new heights.
                  Whether you are a student, professional, or lifelong
                  learner, we are here to empower you on your learning
                  journey. Start exploring today and unlock your full potential!
                </p>
                <button className="px-6 py-4 text-black bg-[#fcdc66] hover:bg-white hover:text-green-700 hover:scale-105 hover:transition">
                  <Link to="/courses" className="">
                    Browse courses
                  </Link>
                </button>
              </div>
              <div>
                <img src={headshot} width={100} height={80} alt="heroshot" className="w-[180vw] h-[100vh] ml-10"/>
              </div>
          </div>
        </div>
        <div className="bg-gray-100 md:w-full w-[1000px]  mx-auto pt-16">
          <div className="py-2 mx-auto md:w-[1500px] w-[1000px]">
            <h3 className="px-4 text-3xl ml-[30%] my-14 text-[#286f6b] font-bold">
              Find your perfect program
            </h3>
            <PerfectProgram />
          </div>
          <div className="w-[1500px] mx-auto mt-16">
            <div className="grid grid-cols-2 items-center space-x-8">
              <div>
                <img src={hero2} width={900} height={900} alt="heroshot" />
              </div>

              <div className=" text-[#0a1f1e]">
                <h1 className="font-bold text-3xl">
                  Best Education Platform
                </h1>
                <p className=" py-8 w-3/5 leading-8">
                  Akwukwo is a game-changer in online education. The
                  platform is user-friendly interface and comprehensive
                  course materials exceeded my expectations. Thanks to Akwukwo,
                  I have gained the skills and confidence needed to succeed
                  in todays competitive job market.
                </p>
                <button className="px-6 py-4 text-black bg-[#fcdc66] hover:bg-white hover:text-green-700 hover:scale-105 hover:transition">
                  <Link to="/about" className="my-16">
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="  mt-16">
            <div className="flex px-16 items-center">
              <div className="space-y-4  text-[#0a1f1e] ">
                <div className="ml-0">
                <h1 className="font-bold text-3xl">
                  Our World class <br /> Instructors
                </h1></div>
                <p className="py-8 w-[60%] leading-8 ">
                
                  Akwukwo is a game-changer in online education. The
                  platform is user-friendly interface and comprehensive
                  course materials exceeded my expectations. Thanks to Akwukwo,
                  I have gained the skills and confidence needed to succeed
                  in todays competitive job market.
                </p>
                <button className="px-6 py-4 text-black bg-[#fcdc66] hover:bg-white hover:text-green-700 hover:scale-105 hover:transition">
                  <Link to="/about" className="my-16">
                    Read More
                  </Link>
                </button>
              </div>
              <div>
                <img src={hero3} width={90} height={90} alt="heroshot" className="w-[180vw] h-[100vh] "/>
              </div>
            </div>
          </div>
          <div className="bg-[#286f6b] h-[800px] p-16 pb-32 flex flex-col text-white mx-auto">
            <div>
              <h2 className="pb-4 text-center">What Our Student Say</h2>
              <p className="italic font-medium mx-auto leading-40 pb-8 w-[600px] text-center">
                Akwukwo has revolutionized my learning experience. The platform
                offers a wide range of courses with top-notch instructors.
                I have gained valuable skills that have helped me excel in my
                career. Highly recommended! <br /> Chidinma Nwaneti.
              </p>
            </div>
            <div>
              {/* <Testimonials /> */}
              <Testimonials />
            </div>
          </div>
          <div className=" mx-auto">
            <div className="flex pt-8  items-center ">
              <div className="pl-8 space-y-4 mb-4 text-[#0a1f1e] ">
                <h1 className="font-bold text-3xl">Get ready to learn and <br /> grow your skill</h1>
                <p className="w-4/5 leading-8">
                  Akwukwo is a game-changer in online education. The
                  platform is user-friendly interface and comprehensive
                  course materials exceeded my expectations. Thanks to Akwukwo,
                  I have gained the skills and confidence need to succeed
                  in today&apos;s competitive job market.
                </p>
                <button className="px-6 py-4 hover:bg-green-700 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                  <Link to="/courses" className="hover:text-[#fcdc66]">
                    Get started now
                  </Link>
                </button>
              </div>
              <div className="">
                <img src={hero5} width={100} height={30} alt="heroshot" className="w-[180vw] h-[100vh] "/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <div>
    </div>
    </div>
  );
}

export default Home;
