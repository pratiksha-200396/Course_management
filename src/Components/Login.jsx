import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
   

    if(data.email==="admin@gmail.com" && data.password==="admin@123"){
      console.log(data);
      navigate('/student');
    }
    else{
      console.log("try again");
      navigate('/login')
    }


    // Login successful झाल्यावर Home page open होईल

  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">

      <div className="card shadow-lg border-0" style={{ width: "400px" }}>

        <div className="card-header bg-primary text-white text-center py-4">

          <h3>Student Login</h3>

          <p className="mb-0">Welcome to Student Course Portal</p>

        </div>

        <div className="card-body p-4">

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email Field */}
            <div className="mb-3">

              <label className="form-label">Student Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
              />

              {errors.email && (
                <p className="text-danger mt-1">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* Password Field */}
            <div className="mb-3">

              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />

              {errors.password && (
                <p className="text-danger mt-1">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Remember Me and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              <div className="form-check">

                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />

                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>

              </div>

              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>

          </form>

          <hr />

          <p className="text-center mb-0">
            Don't have an account?{" "}

            <Link to="/registration" className="text-decoration-none">
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;