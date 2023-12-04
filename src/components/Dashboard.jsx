import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { markCourseCompleted } from '../store/CourseSlice'; // Import your action creator

const Dashboard = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.dashboard);

  

  const calculateProgress = (currentWeek, totalWeeks) => {
    return (currentWeek / totalWeeks) * 100;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  const profile = Array.isArray(courses)
    ? courses.map((course) => (
        <div key={course.id} className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="text-xl font-semibold mb-2">{course.name}</p>
          <p className="text-gray-600 mb-2">{course.description}</p>
          <p className="text-gray-700 mb-2">Location: {course.location}</p>
          <p className="text-gray-700 mb-2">Duration: {course.duration}</p>
          <p className="text-gray-700 mb-2">Prerequisite: {course.prerequisite}</p>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 mr-2">Progress:</span>
            <div className="relative flex-1">
              <div className="flex absolute top-0 left-0 h-2 bg-green-500" style={{ width: `${calculateProgress(course.currentWeek, course.totalWeeks)}%` }}></div>
            </div>
            <span className="text-green-500 ml-2">{calculateProgress(course.currentWeek, course.totalWeeks)}%</span>
          </div>
          <p className="text-gray-700 mb-2">Due Date: {formatDate(course.dueDate)}</p>
          <p className="text-green-500 font-semibold">Enrollment Status: {course.enrollmentStatus}</p>
          {course.enrollmentStatus !== 'Completed' && (
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={() => handleMarkAsCompleted(course.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      ))
    : null;

  return (
    <div className="mt-11">
      <div>
        <Header />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden p-8">
        <h1 className="text-3xl font-bold mb-6">Your Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile}
        </div>
      </div>
    </div>
  );
};

export default connect()(Dashboard);
