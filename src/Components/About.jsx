
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container py-5">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-5">

        <h6 className="text-primary fw-bold letter-spacing">
          ABOUT US
        </h6>

        <h1 className="fw-bold display-6">
          Learn Today, Build Tomorrow
        </h1>

        <p
          className="text-muted mx-auto"
          style={{ maxWidth: "650px" }}
        >
          We provide quality education to help students develop skills
          and achieve their career goals.
        </p>

      </div>


      {/* ================= IMAGE + INFORMATION ================= */}

      <div className="row align-items-center g-5">

        {/* LEFT SIDE IMAGE */}

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
              alt="Students learning together"
              style={{
                height: "480px",
                objectFit: "cover"
              }}
            />

          </div>

        </div>


        {/* RIGHT SIDE INFORMATION */}

        <div className="col-lg-6">

          <h6 className="text-primary fw-bold mb-2">
            OUR STORY
          </h6>

          <h2 className="fw-bold mb-3">
            Who We Are
          </h2>

          <p className="text-muted lh-lg">
            We are passionate about making education simple, accessible,
            and enjoyable for everyone. Our platform helps students learn
            programming and technology through practical courses.
          </p>

          <p className="text-muted lh-lg">
            Whether you are a beginner or looking to improve your skills,
            we provide learning opportunities to help you grow and prepare
            for your future career.
          </p>


          {/* ================= FEATURES ================= */}

          <div className="row mt-4 g-3">

            {/* Feature 1 */}

            <div className="col-md-6">

              <div
                className="p-3 h-100 border rounded-4"
                style={{
                  transition: "0.3s"
                }}
              >

                <h5 className="fw-bold">
                  🎓 Expert Instructors
                </h5>

                <p className="text-muted small mb-0">
                  Learn programming concepts with proper guidance.
                </p>

              </div>

            </div>


            {/* Feature 2 */}

            <div className="col-md-6">

              <div
                className="p-3 h-100 border rounded-4"
                style={{
                  transition: "0.3s"
                }}
              >

                <h5 className="fw-bold">
                  💻 Flexible Learning
                </h5>

                <p className="text-muted small mb-0">
                  Learn new skills at your own pace.
                </p>

              </div>

            </div>


            {/* Feature 3 */}

            <div className="col-md-6">

              <div
                className="p-3 h-100 border rounded-4"
                style={{
                  transition: "0.3s"
                }}
              >

                <h5 className="fw-bold">
                  🤝 Student Support
                </h5>

                <p className="text-muted small mb-0">
                  Get support throughout your learning journey.
                </p>

              </div>

            </div>


            {/* Feature 4 */}

            <div className="col-md-6">

              <div
                className="p-3 h-100 border rounded-4"
                style={{
                  transition: "0.3s"
                }}
              >

                <h5 className="fw-bold">
                  🚀 Career Growth
                </h5>

                <p className="text-muted small mb-0">
                  Develop skills that help you prepare for career
                  opportunities.
                </p>

              </div>

            </div>

          </div>


          {/* ================= BUTTON ================= */}

          <div className="mt-4">

            <Link
              to="/courses"
              className="btn btn-primary px-4 py-2 fw-semibold shadow-sm"
              style={{
                borderRadius: "10px"
              }}
            >
              Explore Courses →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;