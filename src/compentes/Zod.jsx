import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// تعريف مخطط Zod للتحقق من صحة البيانات
const schema = z.object({
  email: z.string().email("Invalid email format"),
  username: z.string()
    .min(5, "Username must be at least 5 characters long")
    .max(15, "Username cannot exceed 15 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number cannot exceed 15 digits"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().refine(
    (value, ctx) => value === ctx.parent.password,
    "Passwords do not match"
  ),
  country: z.string().optional(),
});

const ZodS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched" // لتفعيل التحقق من الصحة عند اللمس
  });

  const submit = (data) => {
    console.log("Form Data", data);
  };

  return (
    <div className="container h-screen w-full bg-gray-700 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-8">Create Account</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-6 rounded-lg shadow-lg w-1/2"
      >
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 border-gray-300 p-2 w-full rounded"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border-2 border-gray-300 p-2 w-full rounded"
            {...register("username")}
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="border-2 border-gray-300 p-2 w-full rounded"
            {...register("phone")}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-2 border-gray-300 p-2 w-full rounded"
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="border-2 border-gray-300 p-2 w-full rounded"
            {...register("confirmPassword")}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className="text-red-600">{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* Country (Optional) */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">
            Country (Optional)
          </label>
          <select
            id="country"
            {...register("country")}
            className="border-2 border-gray-300 p-2 w-full rounded"
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="GB">United Kingdom</option>
            <option value="MA">Morocco</option>
            {/* أضف المزيد من الخيارات حسب الحاجة */}
          </select>
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

export default ZodS;
