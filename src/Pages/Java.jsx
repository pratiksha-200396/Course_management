
import React from "react";

function Java() {
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
        <div className="container py-4">

          <div className="row align-items-center">

            {/* Left Content */}

            <div className="col-lg-8 text-white">

              <span
                className="badge bg-white text-primary px-3 py-2 mb-3"
                style={{ borderRadius: "20px" }}
              >
                FULL STACK DEVELOPMENT
              </span>

              <h1 className="display-5 fw-bold mb-3">
                Java Full Stack Development
              </h1>

              <p className="lead mb-4">
                Learn Java from fundamentals to advanced concepts and
                build powerful web applications using modern backend
                and frontend technologies.
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


            {/* Right Java Card */}

            <div className="col-lg-4 mt-4 mt-lg-0">

              <div
                className="card border-0 shadow-lg text-center p-4"
                style={{
                  borderRadius: "20px"
                }}
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  alt="Java"
                  className="mx-auto mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain"
                  }}
                />

                <h4 className="fw-bold">
                  Java Course
                </h4>

                <p className="text-muted mb-0">
                  Build your Java development skills
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= COURSE OVERVIEW ================= */}

      <div className="container py-5">

        <div className="row g-4">

          {/* Main Content */}

          <div className="col-lg-8">

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">

                <h3 className="fw-bold mb-3">
                  About This Course
                </h3>

                <p className="text-muted">
                  Java is a popular object-oriented programming language
                  used for developing desktop, web and enterprise
                  applications.
                </p>

                <p className="text-muted">
                  This course starts with Java fundamentals and gradually
                  covers object-oriented programming, collections,
                  exception handling, multithreading, database connectivity
                  and modern Java development technologies.
                </p>

              </div>
            </div>


            {/* ================= WHAT YOU WILL LEARN ================= */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  What You Will Learn
                </h3>

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Core Java Programming
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Object-Oriented Programming
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Collections Framework
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Exception Handling
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Multithreading
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Database Connectivity
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Hibernate
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>
                        Spring & Spring Boot
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= SYLLABUS ================= */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Course Curriculum
                </h3>


                {/* Module 1 */}

                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold mb-2">
                    01. Java Fundamentals
                  </h5>

                  <p className="text-muted mb-0">
                    Introduction to Java, variables, data types,
                    operators, conditional statements and loops.
                  </p>

                </div>


                {/* Module 2 */}

                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold mb-2">
                    02. Object-Oriented Programming
                  </h5>

                  <p className="text-muted mb-0">
                    Classes, objects, inheritance, polymorphism,
                    abstraction and encapsulation.
                  </p>

                </div>


                {/* Module 3 */}

                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold mb-2">
                    03. Advanced Java
                  </h5>

                  <p className="text-muted mb-0">
                    Exception handling, collections, multithreading
                    and important Java concepts.
                  </p>

                </div>


                {/* Module 4 */}

                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold mb-2">
                    04. Database & Hibernate
                  </h5>

                  <p className="text-muted mb-0">
                    JDBC, database connectivity, Hibernate and
                    database operations.
                  </p>

                </div>


                {/* Module 5 */}

                <div className="border rounded p-3">

                  <h5 className="fw-bold mb-2">
                    05. Spring & Spring Boot
                  </h5>

                  <p className="text-muted mb-0">
                    Spring fundamentals, dependency injection,
                    Spring MVC and Spring Boot application development.
                  </p>

                </div>

              </div>

            </div>


            {/* ================= TECHNOLOGIES ================= */}

            <div className="card border-0 shadow-sm mb-4">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Technologies Covered
                </h3>

                <div className="d-flex flex-wrap gap-2">

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Core Java
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    JDBC
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    SQL
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Hibernate
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Spring
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Spring MVC
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Spring Boot
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    HTML
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    CSS
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    JavaScript
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    React JS
                  </span>

                </div>

              </div>

            </div>


            {/* ================= CAREER ================= */}

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Career Opportunities
                </h3>

                <div className="row g-3">

                  <div className="col-md-6">

                    <div className="border rounded p-3">
                      <h6 className="fw-bold">
                        Java Developer
                      </h6>
                      <p className="text-muted small mb-0">
                        Develop Java-based applications and backend
                        services.
                      </p>
                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">
                      <h6 className="fw-bold">
                        Backend Developer
                      </h6>
                      <p className="text-muted small mb-0">
                        Build server-side applications and APIs.
                      </p>
                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">
                      <h6 className="fw-bold">
                        Full Stack Developer
                      </h6>
                      <p className="text-muted small mb-0">
                        Work with both frontend and backend technologies.
                      </p>
                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">
                      <h6 className="fw-bold">
                        Software Developer
                      </h6>
                      <p className="text-muted small mb-0">
                        Develop and maintain software applications.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= SIDE CARD ================= */}

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
                    6 Months
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
                  Why Learn Java?
                </h6>

                <p className="text-muted small">
                  Java is widely used in software development and
                  enterprise applications. It provides platform
                  independence, security and good performance.
                </p>


                <button
                  className="btn btn-primary w-100 py-2 fw-semibold"
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
                "linear-gradient(135deg, #0d6efd, #084298)"
            }}
          >

            <h2 className="fw-bold mb-3">
              Ready to Start Your Java Journey?
            </h2>

            <p className="mb-4">
              Learn Java, build projects and develop your programming skills.
            </p>

            <button
              className="btn btn-light text-primary fw-bold px-4 py-2"
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

export default Java;