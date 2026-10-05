
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Java from "../Pages/Java";
import Sql from "../Pages/Sql";
import Python from "../Pages/Python";
import Reactt from "../Pages/Reactt";

function Courses() {

  const courses = [

    {
      id: 1,
      name: "Java Full Stack",
      shortName: "JAVA",
      path: "java",
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      category: "Development",
      duration: "6 Months",
      level: "Beginner",
      mode: "Online",
      info: "Master Java, Spring Boot, Hibernate, SQL and frontend technologies to build complete web applications."
    },

    {
      id: 2,
      name: "Python Development",
      shortName: "PYTHON",
      path: "python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      category: "Development",
      duration: "6 Months",
      level: "Beginner",
      mode: "Online",
      info: "Learn Python programming, OOP, database connectivity and development concepts with practical projects."
    },

    {
      id: 3,
      name: "React JS",
      shortName: "REACT",
      path: "reactt",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      category: "Frontend",
      duration: "4 Months",
      level: "Intermediate",
      mode: "Online",
      info: "Build modern and interactive web applications using React, components, hooks, routing and APIs."
    },

    {
      id: 4,
      name: "SQL & Database",
      shortName: "SQL",
      path: "sql",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      category: "Database",
      duration: "3 Months",
      level: "Beginner",
      mode: "Online",
      info: "Learn database concepts, SQL queries, joins, subqueries, constraints and database management."
    },

    {
      id: 5,
      name: "Data Analyst",
      shortName: "DATA ANALYST",
      path: "data-analyst",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      category: "Analytics",
      duration: "5 Months",
      level: "Beginner",
      mode: "Online",
      info: "Learn data analysis, Excel, SQL, visualization and analytical techniques to work with real-world data."
    },

    {
      id: 6,
      name: "Data Science",
      shortName: "DATA SCIENCE",
      path: "data-science",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      category: "Data",
      duration: "6 Months",
      level: "Intermediate",
      mode: "Online",
      info: "Explore Python, statistics, machine learning and data analysis to solve real-world problems and learn AI."
    },

    {
      id: 7,
      name: "MERN Stack",
      shortName: "MERN",
      path: "mern-stack",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      category: "Full Stack",
      duration: "6 Months",
      level: "Intermediate",
      mode: "Online",
      info: "Build complete full-stack applications using MongoDB, Express.js, React.js and Node.js."
    },

    {
      id: 8,
      name: "MEAN Stack",
      shortName: "MEAN",
      path: "mean-stack",
      image: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      category: "Full Stack",
      duration: "6 Months",
      level: "Intermediate",
      mode: "Online",
      info: "Learn MongoDB, Express.js, Angular and Node.js to develop modern full-stack applications."
    },

    {
      id: 9,
      name: ".NET Development",
      shortName: ".NET",
      path: "dotnet",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968389.png",
      category: "Development",
      duration: "6 Months",
      level: "Beginner",
      mode: "Online",
      info: "Learn C#, ASP.NET, .NET Core, SQL and web development for building enterprise applications."
    }

  ];


  return (
    <div className="bg-light min-vh-100">

      {/* ================= HERO SECTION ================= */}

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd 0%, #084298 100%)"
        }}
      >

        <div className="container text-center text-white py-4">

          <span
            className="badge bg-white text-primary px-3 py-2 mb-3"
            style={{ borderRadius: "20px" }}
          >
            LEARN • BUILD • GROW
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Explore Our Courses
          </h1>

          <p
            className="lead mb-0 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Learn industry-ready technologies with practical training,
            real-world projects and career-focused skills.
          </p>

        </div>

      </section>


      {/* ================= COURSE SECTION ================= */}

      <div className="container py-5">

        {/* Section Heading */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              Popular Courses
            </h2>

            <p className="text-muted mb-0">
              Choose the right course for your career
            </p>
          </div>

          <span className="badge bg-primary-subtle text-primary px-3 py-2">
            {courses.length} Courses
          </span>

        </div>


        {/* ================= CARDS ================= */}

        <div className="row g-4">

          {courses.map((c) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={c.id}
            >

              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >

                {/* Image */}

                <div
                  className="position-relative"
                  style={{
                    height: "210px",
                    background:
                      "linear-gradient(135deg, #eef5ff, #f8fbff)"
                  }}
                >

                  {/* Category */}

                  <span
                    className="position-absolute top-0 start-0 m-3 badge bg-white text-primary shadow-sm px-3 py-2"
                    style={{
                      borderRadius: "20px",
                      zIndex: 2
                    }}
                  >
                    {c.category}
                  </span>


                  {/* Popular */}

                  {c.id <= 4 && (

                    <span
                      className="position-absolute top-0 end-0 m-3 badge bg-primary px-3 py-2"
                      style={{
                        borderRadius: "20px",
                        zIndex: 2
                      }}
                    >
                      Popular
                    </span>

                  )}


                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "contain",
                      padding: "35px"
                    }}
                  />

                </div>


                {/* Card Body */}

                <div className="card-body p-4">

                  {/* Course Name */}

                  <h4 className="fw-bold mb-2">
                    {c.name}
                  </h4>


                  {/* Description */}

                  <p
                    className="text-muted"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6"
                    }}
                  >
                    {c.info}
                  </p>


                  {/* Divider */}

                  <hr className="my-3" />


                  {/* Course Details */}

                  <div className="row text-center mb-4">

                    <div className="col-4">

                      <small className="text-muted d-block">
                        Duration
                      </small>

                      <span className="fw-semibold small">
                        {c.duration}
                      </span>

                    </div>


                    <div className="col-4 border-start border-end">

                      <small className="text-muted d-block">
                        Level
                      </small>

                      <span className="fw-semibold small">
                        {c.level}
                      </span>

                    </div>


                    <div className="col-4">

                      <small className="text-muted d-block">
                        Mode
                      </small>

                      <span className="fw-semibold small">
                        {c.mode}
                      </span>

                    </div>

                  </div>


                  {/* Button */}

                  <Link
                    to={`/courses/${c.path}`}
                    className="btn btn-primary w-100 fw-semibold py-2"
                    style={{
                      borderRadius: "10px"
                    }}
                  >
                    View Course
                    <span className="ms-2">
                      →
                    </span>
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= ROUTES ================= */}

      <Routes>

        <Route
          path="/python"
          element={<Python />}
        />

        <Route
          path="/java"
          element={<Java />}
        />

        <Route
          path="/reactt"
          element={<Reactt />}
        />

        <Route
          path="/sql"
          element={<Sql />}
        />

      </Routes>

    </div>
  );
}

export default Courses;