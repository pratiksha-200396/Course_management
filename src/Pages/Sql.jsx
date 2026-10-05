
import React from "react";

function Sql() {
  return (
    <div className="bg-light min-vh-100">

      {/* ================= HERO SECTION ================= */}

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0f766e 0%, #115e59 100%)"
        }}
      >
        <div className="container py-4">

          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-8 text-white">

              <span className="badge bg-white text-success px-3 py-2 mb-3">
                DATABASE DEVELOPMENT
              </span>

              <h1 className="display-5 fw-bold mb-3">
                SQL & Database Development
              </h1>

              <p className="lead mb-4">
                Learn SQL from basics to advanced concepts and work with
                databases to store, manage and retrieve application data.
              </p>

              <div className="d-flex flex-wrap gap-3">

                <span className="badge bg-light text-dark px-3 py-2">
                  ⭐ Beginner Friendly
                </span>

                <span className="badge bg-light text-dark px-3 py-2">
                  💻 Practical Training
                </span>

                <span className="badge bg-light text-dark px-3 py-2">
                  🚀 Career Focused
                </span>

              </div>

            </div>

            {/* Right Image Card */}
            <div className="col-lg-4 mt-4 mt-lg-0">

              <div
                className="card border-0 shadow-lg text-center p-4"
                style={{
                  borderRadius: "20px"
                }}
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
                  alt="SQL"
                  className="mx-auto mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain"
                  }}
                />

                <h4 className="fw-bold">
                  SQL Course
                </h4>

                <p className="text-muted mb-0">
                  Learn database management and SQL queries
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}

      <div className="container py-5">

        <div className="row g-4">

          {/* ================= LEFT SIDE ================= */}

          <div className="col-lg-8">

            {/* About Course */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-3">
                  About This Course
                </h3>

                <p className="text-muted">
                  SQL is a standard language used to communicate with
                  relational databases. It is widely used for storing,
                  retrieving and managing application data.
                </p>

                <p className="text-muted">
                  This course covers SQL fundamentals, database concepts,
                  queries, joins, functions, subqueries, constraints,
                  normalization and practical database operations.
                </p>

              </div>

            </div>


            {/* What You Will Learn */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  What You Will Learn
                </h3>

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Database Fundamentals</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>SQL Queries</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>DDL, DML & DQL</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Primary & Foreign Keys</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Joins</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Aggregate Functions</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Subqueries</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-success fs-5 me-2">
                        ✓
                      </span>
                      <span>Constraints & Normalization</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>


            {/* Course Curriculum */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Course Curriculum
                </h3>

                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    01. Database Fundamentals
                  </h5>

                  <p className="text-muted mb-0">
                    Introduction to databases, DBMS, RDBMS, tables,
                    rows, columns and relationships.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    02. SQL Basics
                  </h5>

                  <p className="text-muted mb-0">
                    SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY
                    and basic SQL queries.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    03. Functions & Operators
                  </h5>

                  <p className="text-muted mb-0">
                    SQL operators, string functions, numeric functions,
                    date functions and aggregate functions.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    04. Joins
                  </h5>

                  <p className="text-muted mb-0">
                    INNER JOIN, LEFT JOIN, RIGHT JOIN and joining
                    multiple tables.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    05. Subqueries & Constraints
                  </h5>

                  <p className="text-muted mb-0">
                    Subqueries, primary key, foreign key, unique,
                    not null and other constraints.
                  </p>

                </div>


                <div className="border rounded p-3">

                  <h5 className="fw-bold">
                    06. Database Design
                  </h5>

                  <p className="text-muted mb-0">
                    Relationships, normalization and designing
                    structured relational databases.
                  </p>

                </div>

              </div>

            </div>


            {/* Technologies */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Technologies Covered
                </h3>

                <div className="d-flex flex-wrap gap-2">

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    SQL
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    MySQL
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    Database
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    RDBMS
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    Joins
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    Subqueries
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    Constraints
                  </span>

                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    Normalization
                  </span>

                </div>

              </div>

            </div>


            {/* Career Opportunities */}

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Career Opportunities
                </h3>

                <div className="row g-3">

                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        SQL Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Work with SQL queries and relational databases.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        Database Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Design and manage database structures.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        Backend Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Use databases with backend applications and APIs.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        Data Analyst
                      </h6>

                      <p className="text-muted small mb-0">
                        Query and analyze structured data using SQL.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-sm sticky-top"
              style={{
                top: "20px",
                borderRadius: "16px"
              }}
            >

              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  Course Details
                </h4>

                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Duration
                  </span>

                  <strong>
                    3 Months
                  </strong>

                </div>


                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Level
                  </span>

                  <strong>
                    Beginner
                  </strong>

                </div>


                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Mode
                  </span>

                  <strong>
                    Online
                  </strong>

                </div>


                <div className="d-flex justify-content-between mb-4">

                  <span className="text-muted">
                    Projects
                  </span>

                  <strong>
                    Practical
                  </strong>

                </div>


                <hr />


                <h6 className="fw-bold mb-3">
                  Why Learn SQL?
                </h6>

                <p className="text-muted small">
                  SQL is an important skill for backend development,
                  database development and data-related applications.
                </p>


                <button
                  className="btn btn-success w-100 py-2 fw-semibold"
                  style={{
                    borderRadius: "10px"
                  }}
                >
                  Enroll Now →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM CTA ================= */}

      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 p-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #0f766e, #115e59)"
            }}
          >

            <h2 className="fw-bold mb-3">
              Ready to Start Learning SQL?
            </h2>

            <p className="mb-4">
              Learn database concepts and build strong SQL skills.
            </p>

            <button
              className="btn btn-light text-success fw-bold px-4 py-2"
              style={{
                borderRadius: "10px"
              }}
            >
              Start Learning →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Sql;

