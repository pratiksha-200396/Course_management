
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UpdateStudent() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  let navigate = useNavigate();

  let {id} = useParams();

  let getSingleData = async ()=>{
    let result = await axios.get('http://localhost:8080/get/' + id);
    console.log(result.data);
    for(let props in result.data){
        setValue(props, result.data[props])
    }
    
  }
  useEffect (()=>{
    getSingleData();
  },[]);

  let onUpdate = async (data) => {

    alert("updated Form submitted...!");

    try {
      await axios.put('http://localhost:8080/update/' + data.id, data);
      navigate('/student');
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
  <div className="container mt-4 mb-5">

    <form onSubmit={handleSubmit(onUpdate)}>

      {/* Personal Details */}

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
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must contain at least 3 characters"
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Name should contain only letters"
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
          <label className="form-label">Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
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


        {/* Password */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters"
              }
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
            {...register("dob", {
              required: "Date of birth is required"
            })}
          />

          {errors.dob && (
            <small className="text-danger">
              {errors.dob.message}
            </small>
          )}
        </div>


        {/* Contact */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Contact</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Contact"
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact must contain exactly 10 digits"
              }
            })}
          />

          {errors.contact && (
            <small className="text-danger">
              {errors.contact.message}
            </small>
          )}
        </div>


        {/* Batch */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Select Batch</label>

          <select
            className="form-select"
            {...register("batch", {
              required: "Please select batch"
            })}
          >
            <option value="">Select Batch</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          {errors.batch && (
            <small className="text-danger">
              {errors.batch.message}
            </small>
          )}
        </div>


        {/* Fees */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Fees</label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Fees"
            {...register("fees", {
              required: "Fees is required"
            })}
          />

          {errors.fees && (
            <small className="text-danger">
              {errors.fees.message}
            </small>
          )}
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
              {...register("gender", {
                required: "Please select gender"
              })}
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
              {...register("gender", {
                required: "Please select gender"
              })}
            />

            <label className="form-check-label">
              Female
            </label>

          </div>

          {errors.gender && (
            <div>
              <small className="text-danger">
                {errors.gender.message}
              </small>
            </div>
          )}

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
              {...register("courses", {
                required: "Please select at least one course"
              })}
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

          {errors.courses && (
            <div>
              <small className="text-danger">
                {errors.courses.message}
              </small>
            </div>
          )}

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
            {...register("imageUrl", {
              required: "Image URL is required"
            })}
          />

          {errors.imageUrl && (
            <small className="text-danger">
              {errors.imageUrl.message}
            </small>
          )}

        </div>

      </div>


      {/* Address Details */}

      <h4 className="mb-4 mt-3">
        Address Details
      </h4>

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
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Pincode must contain 6 digits"
              }
            })}
          />

          {errors.pincode && (
            <small className="text-danger">
              {errors.pincode.message}
            </small>
          )}

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
            {...register("area", {
              required: "Area is required"
            })}
          />

          {errors.area && (
            <small className="text-danger">
              {errors.area.message}
            </small>
          )}

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
            {...register("city", {
              required: "City is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "City should contain only letters"
              }
            })}
          />

          {errors.city && (
            <small className="text-danger">
              {errors.city.message}
            </small>
          )}

        </div>

      </div>


      {/* Buttons */}

      <div className="d-grid gap-2 mt-3">

        <button
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>

      </div>


      {/* Back */}

      <div className="text-center mt-4">

        <Link to="/student">
          Back to Student List
        </Link>

      </div>

    </form>

  </div>
);

}

export default UpdateStudent;
