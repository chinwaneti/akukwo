// CoursesPage.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database"; // Import the required functions
// import { database } from '../path/to/firebaseConfig';  // Adjust the path accordingly
import { database } from "../firebase";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesRef = ref(database, 'courses');

    const unsubscribe = onValue(coursesRef, (snapshot) => {
      const coursesData = snapshot.val();
      const coursesArray = coursesData ? Object.values(coursesData) : [];
      setCourses(coursesArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Courses Page</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
