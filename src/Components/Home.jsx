import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= CAROUSEL - SAME AS YOUR CODE ================= */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmd1FqRbjamNaS92sOfEYc5JenLhPZw5YGabx0X59oWLEAQIU8mJkeB7v2_uvt6ty2eztzPM58UICmibjXzo0OG4B1YrDp9-UCAGfOExNWusdHkrayqShHqcWQPkclT24qH8FkV1LezmuyR=s1360-w1360-h1020-rw"
              className="d-block w-100"
              alt="Education"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-A9wAXkN8LW0GpQ6cIY0CAP2WhLVHyF2BDfoWW7Mr5mCPuWfEvMyn8Kox6oanaYcp_JOJhkBAPOyK7UQ3ngQ7F-E0tymLxwTln2pCyPv4zyrWSjgFum9MZBYl2YdA1nBvOfoUwOOw67dR=s1360-w1360-h1020-rw"
              className="d-block w-100"
              alt="Students"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWh9Zs2P_YgYTvHRzIBDDvwQGOW6iJb0UsWVekYldYzN1YGATdyEB23thRaFJkZljaEIsITM_bafLHtM58t4NZR3KBUhbVboC3JLWsmMXypAsnaqPImUTDknqS7awfHMcLAoA6tnuVqwhN=s1360-w1360-h1020-rw"
              className="d-block w-100"
              alt="Learning"
              width="100px"
              height={600}
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* ================= WELCOME SECTION ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">
            <span className="badge bg-primary px-3 py-2 rounded-pill">
              WELCOME TO EDULEARN
            </span>

            <h1 className="fw-bold mt-3">
              Learn Today, <span className="text-primary">Build Tomorrow</span>
            </h1>

            <p
              className="text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Build your skills with practical courses, expert guidance,
              and career-focused learning programs designed for students.
            </p>
          </div>


          {/* Statistics */}
          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <h2 className="fw-bold text-primary">10+</h2>
                <p className="text-muted mb-0">
                  Professional Courses
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <h2 className="fw-bold text-primary">500+</h2>
                <p className="text-muted mb-0">
                  Students
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <h2 className="fw-bold text-primary">10+</h2>
                <p className="text-muted mb-0">
                  Expert Trainers
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <h2 className="fw-bold text-primary">100%</h2>
                <p className="text-muted mb-0">
                  Practical Learning
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h6 className="text-primary fw-bold">
              ABOUT US
            </h6>

            <h2 className="fw-bold display-6">
              Who We Are
            </h2>

            <p
              className="text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              We are passionate about making education simple,
              practical and career-focused for every student.
            </p>

          </div>


          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">

              <div
                className="position-relative shadow-lg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden"
                }}
              >

                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlanQSQjyx-RyENlj91zf4TOZjvrmGFPYvXpnHo99ec0yv9dgpzeyaOxLnQ7O8F1vpa4S1T_sXgA_WSP-ZJOL7Q5h27Vzret9k52qS5sWeZECJIMk0PP1GT--7Mj3i0Ap-Lq6duTfRf7iF5=s1360-w1360-h1020-rw"
                  className="img-fluid w-100"
                  alt="Students learning"
                  style={{
                    height: "470px",
                    objectFit: "cover"
                  }}
                />

              </div>

            </div>


            {/* Content */}
            <div className="col-lg-6">

              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                OUR STORY
              </span>

              <h2 className="fw-bold mb-4">
                Education That Helps You Grow
              </h2>

              <p className="text-muted lh-lg">
                EduLearn is focused on providing quality education
                through practical and easy-to-understand learning.
                Our courses are designed to help students develop
                technical skills and prepare for their careers.
              </p>

              <p className="text-muted lh-lg">
                From programming fundamentals to modern technologies,
                students can learn step-by-step with proper guidance
                and practical exposure.
              </p>


              {/* Features */}
              <div className="row g-3 mt-4">

                <div className="col-md-6">
                  <div className="p-3 border rounded-4 h-100 shadow-sm">
                    <h5 className="fw-bold">
                      🎓 Expert Trainers
                    </h5>

                    <p className="text-muted mb-0">
                      Learn from experienced instructors.
                    </p>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="p-3 border rounded-4 h-100 shadow-sm">
                    <h5 className="fw-bold">
                      💻 Practical Learning
                    </h5>

                    <p className="text-muted mb-0">
                      Learn through projects and practice.
                    </p>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="p-3 border rounded-4 h-100 shadow-sm">
                    <h5 className="fw-bold">
                      🤝 Student Support
                    </h5>

                    <p className="text-muted mb-0">
                      Get continuous learning support.
                    </p>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="p-3 border rounded-4 h-100 shadow-sm">
                    <h5 className="fw-bold">
                      🚀 Career Growth
                    </h5>

                    <p className="text-muted mb-0">
                      Build skills for future opportunities.
                    </p>
                  </div>
                </div>

              </div>


              <Link
                to="/courses"
                className="btn btn-primary px-4 py-2 mt-4 fw-semibold shadow-sm"
                style={{ borderRadius: "10px" }}
              >
                Explore Courses →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h6 className="text-primary fw-bold">
              WHY CHOOSE US
            </h6>

            <h2 className="fw-bold">
              Everything You Need To Learn Better
            </h2>

            <p className="text-muted">
              We focus on practical knowledge and student growth.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <div
                  className="mx-auto mb-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px"
                  }}
                >
                  💡
                </div>

                <h4 className="fw-bold">
                  Easy Learning
                </h4>

                <p className="text-muted mb-0">
                  Simple explanations and step-by-step learning
                  make technical concepts easier to understand.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <div
                  className="mx-auto mb-3 bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px"
                  }}
                >
                  💻
                </div>

                <h4 className="fw-bold">
                  Practical Skills
                </h4>

                <p className="text-muted mb-0">
                  Practice projects help students understand
                  real-world programming concepts.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <div
                  className="mx-auto mb-3 bg-warning text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px"
                  }}
                >
                  🚀
                </div>

                <h4 className="fw-bold">
                  Career Focus
                </h4>

                <p className="text-muted mb-0">
                  Build technical skills and confidence for
                  future career opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* ================= EXPERT TEACHERS ================= */}
<section className="py-5 bg-light">

  <div className="container">

    {/* Heading */}
    <div className="text-center mb-5">

      <span className="badge bg-primary px-3 py-2 rounded-pill">
        OUR EXPERTS
      </span>

      <h2 className="fw-bold mt-3">
        Meet Our Expert Teachers
      </h2>

      <p
        className="text-muted mx-auto"
        style={{ maxWidth: "650px" }}
      >
        Learn from experienced and specialized teachers who
        guide students with practical knowledge and industry-focused skills.
      </p>

    </div>


    {/* Teachers */}
    <div className="row g-4">

      {/* Teacher 1 */}
      <div className="col-md-6 col-lg-3">

        <div className="card border-0 shadow-sm h-100 text-center">

          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
            className="card-img-top"
            alt="Java Teacher"
            style={{
              height: "230px",
              objectFit: "cover"
            }}
          />

          <div className="card-body">

            <h5 className="fw-bold mb-1">
              Rahul Sharma
            </h5>

            <p className="text-primary fw-semibold mb-2">
              Java & Spring Boot
            </p>

            <p className="text-muted small mb-2">
              6+ Years Experience
            </p>

            <p className="text-muted small">
              Specialized in Core Java, Spring Boot,
              Hibernate and Backend Development.
            </p>

          </div>

        </div>

      </div>


      {/* Teacher 2 */}
      <div className="col-md-6 col-lg-3">

        <div className="card border-0 shadow-sm h-100 text-center">

          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500"
            className="card-img-top"
            alt="React Teacher"
            style={{
              height: "230px",
              objectFit: "cover"
            }}
          />

          <div className="card-body">

            <h5 className="fw-bold mb-1">
              Priya Patil
            </h5>

            <p className="text-primary fw-semibold mb-2">
              React & Frontend
            </p>

            <p className="text-muted small mb-2">
              5+ Years Experience
            </p>

            <p className="text-muted small">
              Specialized in React JS, JavaScript,
              Bootstrap and Frontend Development.
            </p>

          </div>

        </div>

      </div>


      {/* Teacher 3 */}
      <div className="col-md-6 col-lg-3">

        <div className="card border-0 shadow-sm h-100 text-center">

          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500"
            className="card-img-top"
            alt="Python Teacher"
            style={{
              height: "230px",
              objectFit: "cover"
            }}
          />

          <div className="card-body">

            <h5 className="fw-bold mb-1">
              Sneha Kulkarni
            </h5>

            <p className="text-primary fw-semibold mb-2">
              Python & Data Science
            </p>

            <p className="text-muted small mb-2">
              5+ Years Experience
            </p>

            <p className="text-muted small">
              Specialized in Python, Data Science,
              SQL and Data Analytics.
            </p>

          </div>

        </div>

      </div>


      {/* Teacher 4 */}
      <div className="col-md-6 col-lg-3">

        <div className="card border-0 shadow-sm h-100 text-center">

          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=500"
            className="card-img-top"
            alt="Database Teacher"
            style={{
              height: "230px",
              objectFit: "cover"
            }}
          />

          <div className="card-body">

            <h5 className="fw-bold mb-1">
              Amit Joshi
            </h5>

            <p className="text-primary fw-semibold mb-2">
              SQL & Database
            </p>

            <p className="text-muted small mb-2">
              7+ Years Experience
            </p>

            <p className="text-muted small">
              Specialized in SQL, MySQL,
              Database Management and Backend Systems.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= CONTACT SECTION ================= */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="badge bg-primary px-3 py-2 rounded-pill">
              CONTACT US
            </span>

            <h2 className="fw-bold mt-3">
              Let's Start Your Learning Journey
            </h2>

            <p className="text-muted">
              Have questions about our courses? We are here to help.
            </p>

          </div>


          <div className="row g-4">

            {/* Contact Information */}
            <div className="col-lg-5">

              <div
                className="card border-0 shadow-lg h-100 text-white"
                style={{
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, #0d6efd, #084298)"
                }}
              >

                <div className="card-body p-4 p-md-5">

                  <h3 className="fw-bold mb-3">
                    Get In Touch
                  </h3>

                  <p className="mb-4 opacity-75">
                    Feel free to contact us for course details,
                    admission information or any other queries.
                  </p>


                  {/* Address */}
                  <div className="d-flex align-items-start mb-4">

                    <div
                      className="bg-white text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "22px"
                      }}
                    >
                      📍
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Our Address
                      </h6>

                      <p className="mb-0 opacity-75">
                        EduLearn Education Center,
                        <br />
                        Pune, Maharashtra, India
                      </p>
                    </div>

                  </div>


                  {/* Email */}
                  <div className="d-flex align-items-start mb-4">

                    <div
                      className="bg-white text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "22px"
                      }}
                    >
                      ✉️
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Email Us
                      </h6>

                      <p className="mb-0 opacity-75">
                        support@edulearn.com
                      </p>
                    </div>

                  </div>


                  {/* Phone */}
                  <div className="d-flex align-items-start mb-4">

                    <div
                      className="bg-white text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "22px"
                      }}
                    >
                      📞
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Call Us
                      </h6>

                      <p className="mb-0 opacity-75">
                        +91 98765 43210
                      </p>
                    </div>

                  </div>


                  {/* Social */}
                  <div className="pt-3 border-top border-light border-opacity-25">

                    <p className="fw-semibold mb-3">
                      Follow Us
                    </p>

                    <div className="d-flex gap-2">

                      <button className="btn btn-light rounded-circle">
                        f
                      </button>

                      <button className="btn btn-light rounded-circle">
                        in
                      </button>

                      <button className="btn btn-light rounded-circle">
                        ◎
                      </button>

                      <button className="btn btn-light rounded-circle">
                        ▶
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>
            


            {/* Contact Form */}
            <div className="col-lg-7">

              <div
                className="card border-0 shadow-lg h-100"
                style={{ borderRadius: "20px" }}
              >

                <div className="card-body p-4 p-md-5">

                  <h3 className="fw-bold mb-2">
                    Send Us a Message
                  </h3>

                  <p className="text-muted mb-4">
                    Fill out the form and our team will get back
                    to you soon.
                  </p>


                  <form>

                    <div className="row">

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your name"
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter your email"
                        />

                      </div>

                    </div>


                    <div className="row">

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          placeholder="Enter your phone"
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Subject
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter subject"
                        />

                      </div>

                    </div>


                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Course Interested In
                      </label>

                      <select className="form-select form-select-lg">

                        <option value="">
                          Select a course
                        </option>

                        <option>Java Full Stack</option>
                        <option>Python</option>
                        <option>React JS</option>
                        <option>SQL</option>
                        <option>Node JS</option>

                      </select>

                    </div>


                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Your Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your message here..."
                      ></textarea>

                    </div>


                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-3 fw-semibold shadow-sm"
                      style={{ borderRadius: "10px" }}
                    >
                      Send Message →
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd, #084298)"
        }}
      >

        <div className="container text-center">

          <h2 className="fw-bold">
            Ready To Start Learning?
          </h2>

          <p className="mb-4 opacity-75">
            Explore our courses and start building your future today.
          </p>

          <Link
            to="/courses"
            className="btn btn-light text-primary px-5 py-3 fw-bold"
            style={{ borderRadius: "10px" }}
          >
            Explore Courses →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;