import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (

    <footer className="bg-dark text-white pt-5 pb-3 mt-5">

      <div className="container">

        <div className="row g-4">

          {/* Website Information */}
          <div className="col-lg-4 col-md-6">

            <h3 className="fw-bold text-primary">
              CJC
            </h3>

            <p className="text-white-50 mt-3">
              EduLearn is an online learning platform where students
              can explore programming courses, develop technical skills,
              and take a step towards their dream careers.
            </p>

            <div className="d-flex gap-3 mt-3">

              <a href="#" className="text-white text-decoration-none">
                Facebook
              </a>

              <a href="#" className="text-white text-decoration-none">
                Instagram
              </a>

              <a href="#" className="text-white text-decoration-none">
                LinkedIn
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/courses" className="text-white-50 text-decoration-none">
                  Courses
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/register" className="text-white-50 text-decoration-none">
                  Register
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/login" className="text-white-50 text-decoration-none">
                  Login
                </Link>
              </li>

            </ul>

          </div>

          {/* Popular Courses */}
          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-3">
              Popular Courses
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link to="/courses/java" className="text-white-50 text-decoration-none">
                  Java Programming
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/courses/python" className="text-white-50 text-decoration-none">
                  Python Programming
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/courses/sql" className="text-white-50 text-decoration-none">
                  SQL Database
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/courses" className="text-white-50 text-decoration-none">
                  Explore All Courses
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="text-white-50 mb-2">
              📍 Pune, Maharashtra, India
            </p>

            <p className="text-white-50 mb-2">
              ✉️ support@edulearn.com
            </p>

            <p className="text-white-50 mb-2">
              📞 +91 98765 43210
            </p>

          </div>

        </div>

        <hr className="border-secondary mt-4" />

        {/* Copyright */}
        <div className="text-center text-white-50">

          <p className="mb-0">
            © 2026 EduLearn. All Rights Reserved.
          </p>

          <p className="small mt-2">
            Learn Today, Build Tomorrow 🚀
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;