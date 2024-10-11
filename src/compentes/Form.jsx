import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="container h-screen w-[100%] bg-gray-700 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-8">Create User</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-2 px-4 rounded-lg shadow-lg w-1/2"
      >
        <div className="mb-1">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={`border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500  ${
              errors.name ? "border-red-600" : "border-green-600"
            }`}
            placeholder="Enter your full name"
            {...register("name", {
              required: {
                value: true,
                message: "Full Name is required",
              },
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-1">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-1"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className="border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your age"
            {...register("age", {
              required: {
                value: true,
                message: "Age is required",
              },
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
            })}
          />
          {errors.age && (
            <span className="text-red-600">{errors.age.message}</span>
          )}
        </div>

        <div className="mb-1">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-1">
          <label
            htmlFor="passwordIs"
            className="block text-gray-700 font-semibold mb-1"
          >
           passwordIs
          </label>
          <input
            type="password"
            id="passwordIs"
            className="border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-1">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-semibold mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* قائمة الدول */}
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block text-gray-700 font-semibold mb-1"
          >
            Country
          </label>
          <select
            id="country"
            {...register("country", {
              required: {
                value: true,
                message: "Country is required",
              },
            })}
            className="border-2 border-gray-300 p-1 w-full rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="GB">United Kingdom</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MA">Morocco</option>
            <option value="DZ">Algeria</option>
            <option value="EG">Egypt</option>
          </select>
          {errors.country && (
            <span className="text-red-600">{errors.country.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
