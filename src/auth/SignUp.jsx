import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap Icons

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate Form
  const validate = () => {
    const errors = {};
    if (formData.name.length < 3) errors.name = "Name must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters.";
    if (!formData.termsAccepted) errors.terms = "You must accept the terms and privacy policy.";
    return errors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted", formData);
      // Submit form data to an API or backend here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-[20] bg-gray-300 p-4">
      <div className="w-full sm:w-[500px] bg-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-black mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} id="formsub">
          {/* Name Input */}
          <div className="mb-4 relative">
            <i className="bi bi-person-fill absolute left-3 top-3 text-gray-500"></i>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 pl-10 rounded-lg placeholder-gray-500"
              required
              minLength="3"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4 relative">
            <i className="bi bi-envelope-fill absolute left-3 top-3 text-gray-500"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 pl-10 rounded-lg placeholder-gray-500"
              required
              maxLength="30"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <i className="bi bi-lock-fill absolute left-3 top-3 text-gray-500"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 pl-10 rounded-lg placeholder-gray-500"
              required
              minLength="6"
            />
            <i
              className={`bi ${showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"} absolute right-3 top-3 text-gray-500 cursor-pointer`}
              onClick={() => setShowPassword((prev) => !prev)}
            ></i>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-black">Terms and Services and Privacy Policy</span>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

          {/* Submit Button */}
          <button type="submit" className="w-full bg-gray-500 text-gray-800 font-semibold p-2 rounded-lg text-xl">
            Create an account
          </button>

          {/* Already Registered */}
          <div className="my-4 text-center">
            <span className="text-gray-800">Already Registered? </span>
            <a href="#" className="text-blue-600 font-semibold">
              Sign In
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-around mb-6">
            <hr className="w-1/3 h-[2px] bg-gray-500" />
            <span className="text-black">or</span>
            <hr className="w-1/3 h-[2px] bg-gray-500" />
          </div>

          {/* Sign Up with Google */}
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 mb-4 bg-gray-500 text-gray-800 font-bold rounded-lg"
          >
            <i className="bi bi-google mr-2"></i> Sign Up With Google
          </button>

          {/* Sign Up with Twitter */}
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 bg-gray-500 text-gray-800 font-bold rounded-lg"
          >
            <i className="bi bi-twitter mr-2"></i> Sign Up With Twitter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
