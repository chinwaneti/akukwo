// actions.js

import { MARK_COURSE_COMPLETED } from './actionTypes';

export const markCourseCompleted = (courseId) => ({
  type: MARK_COURSE_COMPLETED,
  payload: {
    courseId,
  },
});
