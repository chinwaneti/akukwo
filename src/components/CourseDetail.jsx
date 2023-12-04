import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dot from "../images/dot.webp";
import stars from "../images/fivestar.webp";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import ExpandableSection from "./ExpandableSection";

function CourseDetail() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

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

        const selectedCourse = coursesArray.find((c) => c.id.toString() === slug);

        if (selectedCourse) {
          setCourse(selectedCourse);
        } else {
          console.error(`Course not found for id: ${slug}`);
        }
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 mx-auto mt-32 mb-10 bg-white shadow-lg rounded-md max-w-2xl">
      <img
        src={course.image}
        alt="course thumbnail"
        className="h-[50vh] w-full object-cover rounded-t-md"
      />
      <div className="p-6">
        <h2 className="font-bold text-3xl text-gray-800 mb-2">{course.name}</h2>
        <p className="font-semibold text-lg text-gray-600 mb-4">{course.instructor}</p>
        <p className="font-normal text-gray-700 mb-4">{course.description}</p>
        <div className="flex items-center mb-4 space-x-4">
          <p className="font-bold text-gray-700">{course.duration}</p>
          <img src={dot} alt="" className="h-3" />
          <p className="font-bold text-gray-700">{course.enrollmentStatus}</p>
          <p className="font-bold text-gray-700 ml-2">{course.location}</p>
        </div>
        <div className="font-bold text-gray-700 mb-4">
          <p className="my-1">{course.schedule}</p>
          <p>{course.prerequisite}</p>
        </div>
        <ExpandableSection title="Syllabus" content={course.syllabus} />
        <div className="flex items-center mt-6">
          <img src={stars} alt="stars" className="h-6" />
          <p className="font-bold text-green-700 ml-3 text-lg">&#8358;100,00</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
