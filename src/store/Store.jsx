import { configureStore } from "@reduxjs/toolkit";
import EnrollSlice from "./EnrollSlice";
import CourseSlice from "./CourseSlice";

const store = configureStore({
  reducer: {
    dashboard: EnrollSlice,
    products: CourseSlice,
  },
});

export default store;
