import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { get, ref, child } from 'firebase/database';

const Search = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const courseName = course.name ? course.name.toLowerCase() : '';
    const instructorName = course.instructor ? course.instructor.toLowerCase() : '';

    return (
      courseName.includes(searchQuery.toLowerCase()) ||
      instructorName.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className='w-full'>
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
      style={{ width: '100%', maxWidth: '400px' }} // Set the desired width here
    />
    {searchQuery !== '' && (
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            {course.name} || {course.instructor}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
};

export default Search;
