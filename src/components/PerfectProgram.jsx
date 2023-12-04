import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import dot from '../images/dot.webp';
import 'swiper/css/bundle';
import stars from "../images/fivestar.webp";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import { useDispatch } from "react-redux";
import { add } from "../store/EnrollSlice";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

function PerfectProgram() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

      // Set loading to false once data is fetched
      setLoading(false);
    };

    fetchData();
  }, []);

  const enroll = (course) => {
    dispatch(add(course));
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
    <div className="ml-[40%]">
      <RingLoader loading={loading} css={override} size={150} /></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id} className="p-8 mx-auto bg-white">
            <Link to={`/courses/${course.id}`}>
              <div className="mx-auto p-10 " style={{ height: "100%" }}>
                <img
                  src={course.image}
                  alt="course thumbnail"
                  className="h-[50vh] w-[50vw] object-cover"
                />
                <h2 className="font-bold mt-6 text-2xl">{course.name}</h2>
                <p className="font-semibold my-3 text-xl"> {course.instructor}</p>
                <p className="font-bold"> {course.description}</p>
                <div className="flex space-x-7 text-xl items-center my-3">
                  <p className="font-bold"> {course.duration}</p>
                  <img src={dot} alt="" className="h-3"/>
                  <p className="font-bold"> {course.enrollmentStatus}</p>
                </div>
                <img src={stars} alt="stars" className="h-6"/>
                <p className="font-bold text-green-700 text-left text-2xl my-2">&#8358;100,00</p>
              </div>
            </Link>
            <button
              onClick={() => enroll(course)}
              className="px-5 py-3 uppercase bg-green-700 rounded-lg text-white ml-10"
            >
              enroll
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PerfectProgram;
