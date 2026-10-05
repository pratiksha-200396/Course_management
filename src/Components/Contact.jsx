import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {

const {
register,
handleSubmit,
reset,
formState: { errors }
} = useForm();

// Form Submit Function
const onSubmit = (data) => {


console.log("Contact Form Submitted Successfully");

console.table(data);

alert("Your message has been sent successfully!");

reset();


};

return (


<div className="container py-5">

  {/* Heading */}
  <div className="text-center mb-5">

    <h6 className="text-primary fw-bold">CONTACT US</h6>

    <h1 className="fw-bold">Get In Touch With Us</h1>

    <p className="text-muted">
      Have questions about our courses? We would love to hear from you.
      Send us a message and we will get back to you.
    </p>

  </div>

  <div className="row g-4">

    {/* Left Side - Contact Information */}
    <div className="col-lg-5">

      <div className="card border-0 shadow h-100">

        <div className="card-body p-4">

          <h3 className="fw-bold mb-4">Contact Information</h3>

          {/* Address */}
          <div className="d-flex mb-4">

            <div className="me-3">
              <span className="badge bg-primary p-3 fs-5">📍</span>
            </div>

            <div>

              <h5 className="fw-bold">Our Address</h5>

              <p className="text-muted mb-0">
                EduLearn Education Center,<br />
                Pune, Maharashtra, India
              </p>

            </div>

          </div>

          {/* Email */}
          <div className="d-flex mb-4">

            <div className="me-3">
              <span className="badge bg-primary p-3 fs-5">✉️</span>
            </div>

            <div>

              <h5 className="fw-bold">Email Us</h5>

              <p className="text-muted mb-0">
                support@edulearn.com
              </p>

            </div>

          </div>

          {/* Phone */}
          <div className="d-flex mb-4">

            <div className="me-3">
              <span className="badge bg-primary p-3 fs-5">📞</span>
            </div>

            <div>

              <h5 className="fw-bold">Call Us</h5>

              <p className="text-muted mb-0">
                +91 98765 43210
              </p>

            </div>

          </div>

          {/* Google Map */}
          <h5 className="fw-bold mb-3">Find Us On Map</h5>

          <div className="ratio ratio-4x3 rounded overflow-hidden">

            <iframe
              src="https://maps.google.com/maps?q=Pune%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="EduLearn Location"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </div>

    {/* Right Side - Contact Form */}
    <div className="col-lg-7">

      <div className="card border-0 shadow h-100">

        <div className="card-body p-4 p-md-5">

          <h3 className="fw-bold mb-2">Send Us a Message</h3>

          <p className="text-muted mb-4">
            Fill out the form below and our team will contact you.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name and Email */}
            <div className="row">

              {/* Full Name */}
              <div className="col-md-6 mb-3">

                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Name must contain at least 3 characters"
                    }
                  })}
                />

                {errors.name && (
                  <small className="text-danger">
                    {errors.name.message}
                  </small>
                )}

              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">

                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address"
                    }
                  })}
                />

                {errors.email && (
                  <small className="text-danger">
                    {errors.email.message}
                  </small>
                )}

              </div>

            </div>

            {/* Phone and Subject */}
            <div className="row">

              {/* Phone Number */}
              <div className="col-md-6 mb-3">

                <label className="form-label fw-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number"
                    }
                  })}
                />

                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone.message}
                  </small>
                )}

              </div>

              {/* Subject */}
              <div className="col-md-6 mb-3">

                <label className="form-label fw-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                  {...register("subject", {
                    required: "Subject is required"
                  })}
                />

                {errors.subject && (
                  <small className="text-danger">
                    {errors.subject.message}
                  </small>
                )}

              </div>

            </div>

            {/* Course Selection */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Course Interested In
              </label>

              <select
                className="form-select"
                {...register("course", {
                  required: "Please select a course"
                })}
              >

                <option value="">Select a course</option>

                <option value="Java Full Stack">Java Full Stack</option>

                <option value="Python">Python</option>

                <option value="React JS">React JS</option>

                <option value="SQL">SQL</option>

                <option value="Node JS">Node JS</option>

              </select>

              {errors.course && (
                <small className="text-danger">
                  {errors.course.message}
                </small>
              )}

            </div>

            {/* Message */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Your Message
              </label>

              <textarea
                className="form-control"
                rows="5"
                placeholder="Write your message here..."
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must contain at least 10 characters"
                  }
                })}
              ></textarea>

              {errors.message && (
                <small className="text-danger">
                  {errors.message.message}
                </small>
              )}

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary px-5 py-2"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</div>


);

}

export default Contact;
