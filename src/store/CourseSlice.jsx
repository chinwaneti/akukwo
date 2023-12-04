// CourseSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const courseSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addToCourse(state, action) {
      state.push(action.payload);
    },
    markCourseCompleted: (state, action) => {
      const { courseId } = action.payload;
      // Use map to create a new array with the updated course
      state = state.map((course) =>
        course.id === courseId ? { ...course, enrollmentStatus: 'Completed' } : course
      );
    },
  },
});

export const { addToCourse, markCourseCompleted } = courseSlice.actions;
export default courseSlice.reducer;
