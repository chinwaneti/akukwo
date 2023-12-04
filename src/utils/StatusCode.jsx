import { configureStore } from "@reduxjs/toolkit";
import EnrollSlice from "../store/EnrollSlice";
import CourseSlice from "../store/CourseSlice";

const store = configureStore({
    reducer: {
        cart: EnrollSlice,
        products: CourseSlice
    }
})
export default store