import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Registration() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  let navigate = useNavigate();


  let onSubmit = async(data) => {
   
    try{
console.log(data);

      axios.post("http://localhost:8080/save",data);
      alert("Registration Successful");
      navigate('/student');
    }
    catch(error){
      console.log(error);
      
    }
  };

 

  

  return (
    <div className="container mt-4 mb-5">

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* ================= Personal Details ================= */}

        <h4 className="mb-4">Personal Details</h4>

        <div className="row">

          {/* Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              {...register("name", {
                required: "Name is required"
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
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <small className="text-danger">
                {errors.email.message}
              </small>
            )}
          </div>

          {/* Password */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required"
              })}
            />

            {errors.password && (
              <small className="text-danger">
                {errors.password.message}
              </small>
            )}
          </div>

          {/* Date */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              {...register("dob")}
            />
          </div>

          {/* Contact */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact"
              {...register("contact")}
            />
          </div>

          {/* Batch */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Select Batch</label>

            <select
              className="form-select"
              {...register("batch")}
            >
              <option value="">Select Batch</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* Fees */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Fees</label>

            <input
              type="number"
              className="form-control"
              placeholder="Enter Fees"
              {...register("fees")}
            />
          </div>

          {/* Gender */}
          <div className="col-md-6 mb-3">

            <label className="form-label d-block">
              Gender
            </label>

            <div className="form-check form-check-inline">

              <input
                type="radio"
                className="form-check-input"
                value="Male"
                {...register("gender")}
              />

              <label className="form-check-label">
                Male
              </label>

            </div>

            <div className="form-check form-check-inline">

              <input
                type="radio"
                className="form-check-input"
                value="Female"
                {...register("gender")}
              />

              <label className="form-check-label">
                Female
              </label>

            </div>

          </div>

          {/* Courses */}
          <div className="col-md-6 mb-3">

            <label className="form-label d-block">
              Courses
            </label>

            <div className="form-check form-check-inline">

              <input
                type="checkbox"
                className="form-check-input"
                value="Java"
                {...register("courses")}
              />

              <label className="form-check-label">
                Java
              </label>

            </div>

            <div className="form-check form-check-inline">

              <input
                type="checkbox"
                className="form-check-input"
                value="Spring"
                {...register("courses")}
              />

              <label className="form-check-label">
                Spring
              </label>

            </div>

            <div className="form-check form-check-inline">

              <input
                type="checkbox"
                className="form-check-input"
                value="React"
                {...register("courses")}
              />

              <label className="form-check-label">
                React
              </label>

            </div>

          </div>

          {/* Image URL */}
          <div className="col-md-6 mb-4">

            <label className="form-label">
              Image URL
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Url"
              {...register("imageUrl")}
            />

          </div>

        </div>


        {/* ================= Address Details ================= */}

        <h4 className="mb-4 mt-3">Address Details</h4>

        <div className="row">

          {/* Pincode */}
          <div className="col-md-4 mb-3">

            <label className="form-label">
              Pincode
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Pincode"
              {...register("address.pincode")}
            />

          </div>

          {/* Area */}
          <div className="col-md-4 mb-3">

            <label className="form-label">
              Area
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Area"
              {...register("address.area")}
            />

          </div>

          {/* City */}
          <div className="col-md-4 mb-3">

            <label className="form-label">
              City
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              {...register("address.city")}
            />

          </div>

        </div>


        {/* ================= Buttons ================= */}

        <div className="d-grid gap-2 mt-3">

          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => reset()}
          >
            Reset
          </button>

        </div>


        {/* Sign In */}

        <div className="text-center mt-4">

          Already have an account?{" "}

          <Link to="/login">
            Sign In
          </Link>

        </div>

      </form>

    </div>
  );
}

export default Registration;