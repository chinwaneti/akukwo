import React, { useState, useEffect } from "react";
import logo from "../images/akwukwo.webp";
import { Link } from "react-router-dom";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import Search from "./Search";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const dash = useSelector(state => state.dashboard)
  // console.log(state)
  console.log(dash)

  useEffect(() => {
   
    const fetchData = async () => {
      const coursesRef = ref(database, "courses");
      const coursesSnapshot = await get(child(coursesRef, "/"));
      const coursesData = coursesSnapshot.val();

      if (coursesData) {
        const coursesArray = Array.isArray(coursesData)
          ? coursesData
          : Object.keys(coursesData).map((key) => ({
              id: key,
              ...coursesData[key],
            }));

        setCourses(coursesArray);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#286f6b] w-full top-0 fixed z-50">
      <div className="md:w-[1700px] w-[500px] sticky mx-auto text-xl">
        <nav className="flex justify-between md:p-8 p-2 items-center">
          <div className="flex items-center md:space-x-8 space-x-4">
            <Link to="/home" className="hover:text-[#fcdc66]">
              <img
                src={logo}
                alt="logo"
                width={130}
                className="items-center cursor-pointer"
              />
            </Link>

            <div className="relative">
              <p
                onClick={() => setIsOpen((prev) => !prev)}
                className="font-semibold flex w-full rounded-xl text-center p-1 text-white text-xl cursor-pointer"
              >
                Courses {isOpen ? <FaAngleUp className="h-6 ml-4" /> : <FaAngleDown className="h-6 ml-4" />}
              </p>

              {isOpen && (
                <div className="absolute bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50 p-4 max-h-60 overflow-y-auto">
                  <ul className="text-white font-medium">
                    <li className="p-4 hover:bg-[#227e79] hover:scale-[1.02] hover:text-[#fcdc66] mb-2 rounded-2xl">
                      <Link to="/courses">
                        All Programs</Link>
                    </li>
                    {courses.map((course) => (
                      <div key={course.id} className="p-4 hover:bg-cyan-700 hover:rounded-xl">
                     <Link to={`/courses/${course.id}`}> 
                       <p>{course.name}</p></Link>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <p className="font-semibold flex w-full rounded-xl text-center p-1 text-white text-xl cursor-pointer">
                <Link to="/about">About us</Link>
              </p>
            </div>
            <div className="hidden sm:block">
              <Search />
            </div>
          
          <button className=" py-4  hover:bg-yellow-500 hover:text-black hover:scale-105 hover:transition ">
            <Link to="/dashboard"><p className="text-white">Dashboard {dash.length}</p></Link>
          </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
