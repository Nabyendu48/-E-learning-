import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
// css
.courses {
  padding: 80px 0;
  text-align: center;
  min-height: 60vh;

  h2 {
    font-size: 32px;
    color: #8a4baf;
    margin-bottom: 30px;
  }

  .course-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
}
