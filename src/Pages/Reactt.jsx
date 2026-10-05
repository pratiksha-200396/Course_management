
import React from "react";

function Reactt() {
  return (
    <div className="bg-light min-vh-100">

      {/* ================= HERO SECTION ================= */}

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #087ea4 0%, #075985 100%)"
        }}
      >
        <div className="container py-4">

          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-8 text-white">

              <span className="badge bg-white text-primary px-3 py-2 mb-3">
                FRONTEND DEVELOPMENT
              </span>

              <h1 className="display-5 fw-bold mb-3">
                React JS Development
              </h1>

              <p className="lead mb-4">
                Learn React JS and build modern, interactive and
                reusable web applications using components, hooks,
                routing and APIs.
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
                  src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                  alt="React"
                  className="mx-auto mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain"
                  }}
                />

                <h4 className="fw-bold">
                  React JS Course
                </h4>

                <p className="text-muted mb-0">
                  Build modern frontend applications
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
                  React is a JavaScript library used to build interactive
                  and reusable user interfaces for modern web applications.
                </p>

                <p className="text-muted">
                  This course covers React fundamentals, JSX, components,
                  props, state, hooks, forms, routing, Axios and API
                  integration with practical projects.
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
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>React Fundamentals</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>JSX and Components</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>Props and State</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>Event Handling</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>React Hooks</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>Forms and Validation</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>React Router</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <span className="text-primary fs-5 me-2">
                        ✓
                      </span>
                      <span>Axios and API Integration</span>
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
                    01. React Fundamentals
                  </h5>

                  <p className="text-muted mb-0">
                    Introduction to React, installation, project setup
                    and JSX.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    02. Components & Props
                  </h5>

                  <p className="text-muted mb-0">
                    Functional components, reusable components and props.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    03. State & Events
                  </h5>

                  <p className="text-muted mb-0">
                    State management, event handling and conditional
                    rendering.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    04. React Hooks
                  </h5>

                  <p className="text-muted mb-0">
                    useState, useEffect and commonly used React hooks.
                  </p>

                </div>


                <div className="border rounded p-3 mb-3">

                  <h5 className="fw-bold">
                    05. Forms & Validation
                  </h5>

                  <p className="text-muted mb-0">
                    React forms, form handling and validation.
                  </p>

                </div>


                <div className="border rounded p-3">

                  <h5 className="fw-bold">
                    06. Routing & API Integration
                  </h5>

                  <p className="text-muted mb-0">
                    React Router, Axios and REST API integration.
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

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    JSX
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    React Router
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Axios
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    Bootstrap
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    REST API
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
                        React Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Build modern React-based applications.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        Frontend Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Develop responsive and interactive websites.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        Web Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Create complete web interfaces and applications.
                      </p>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="border rounded p-3">

                      <h6 className="fw-bold">
                        UI Developer
                      </h6>

                      <p className="text-muted small mb-0">
                        Develop reusable and user-friendly interfaces.
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
                    4 Months
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
                  Why Learn React?
                </h6>

                <p className="text-muted small">
                  React helps developers create reusable components
                  and interactive user interfaces for modern web
                  applications.
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
                "linear-gradient(135deg, #087ea4, #075985)"
            }}
          >

            <h2 className="fw-bold mb-3">
              Ready to Start Learning React?
            </h2>

            <p className="mb-4">
              Build modern web applications and grow your frontend skills.
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

export default Reactt;