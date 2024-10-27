import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Function to handle form submission
  const onSubmit = (data) => {
    setSubmitError('');
    console.log("Form Submitted:", data);
    // Replace with actual sign-in logic
    // Example:
    // signInApi(data.email, data.password).catch(() => setSubmitError('Invalid credentials'));
  };

  return (
    <div className="flex justify-center items-center w-full mt-5 ">
      <div className="w-full p-4 h-auto bg-gray-300 sm:w-[400px] rounded">
        <div className="mb-6 font-bold text-black w-full text-center text-2xl">Sign In</div>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email Field */}
          <div className="mb-4 relative w-full">
            <div className="absolute left-0 py-2 pl-2 text-gray-500">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address"
                }
              })}
              className="bg-gray-100 text-sm w-full p-2 pl-8 rounded-lg placeholder-gray-500 mr-2"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4 relative w-full">
            <div className="absolute left-0 py-2 pl-2 text-gray-500">
              <i className="bi bi-lock-fill"></i>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              className="bg-gray-100 text-sm w-full p-2 pl-8 rounded-lg placeholder-gray-500 mr-2"
            />
            <div
              className="absolute right-4 top-2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`bi ${showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"}`}></i>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="w-full rounded-lg text-center bg-gray-500 mb-4">
            <button type="submit" className="text-gray-800 font-semibold text-lg p-2 w-full rounded-md">
              Sign In
            </button>
          </div>

          {/* General Error Message */}
          {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}

          {/* Additional Links */}
          <div className="text-center mb-4">
            <span className="text-gray-800">Don't have an account? </span>
            <a href="#" className="text-blue-600 font-semibold">Register</a>
          </div>

          {/* Divider */}
          <div className="flex flex-row justify-around items-center mb-6">
            <hr className="w-1/3 h-[2px] bg-gray-500" />
            <span className="text-black">or</span>
            <hr className="w-1/3 h-[2px] bg-gray-500" />
          </div>

          {/* Social Sign-in Buttons */}
          <div className="flex justify-center rounded-lg bg-gray-400 mb-4 relative w-full">
            <div className="flex items-center ">
            <div className=" py-2 pl-2 text-gray-800"><i className="bi bi-google"></i></div>
            <button type="button" className="text-sm w-full border-0 p-2 pl-2 font-bold rounded-lg placeholder-gray-800 mr-2 text-gray-800">
              Sign in With Google
            </button>
            </div>
          </div>
          <div className="flex justify-center bg-gray-400 rounded-lg w-full mb-4 relative">
            <div className="flex items-center">
            <div className=" py-2 pl-2 text-gray-800"><i className="bi bi-twitter"></i></div>
            <button type="button" className="text-sm w-full border-0 p-2 pl-2 font-bold rounded-lg placeholder-gray-800 mr-2 text-gray-800">
              Sign in With Twitter
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
