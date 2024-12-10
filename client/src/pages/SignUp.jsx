import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignUp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post("/api/auth/signup", data);
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl my-7 font-semibold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username..."
          className="p-3 rounded-xl focus:outline-none w-full border-2"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}
        <input
          type="email"
          placeholder="email..."
          className="p-3 rounded-xl focus:outline-none w-full border-2"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="password..."
          className="p-3 rounded-xl focus:outline-none w-full border-2"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="bg-slate-800 text-white py-3 rounded-xl focus:outline-none w-full hover:opacity-90"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <div className="mt-4 flex gap-2">
        <span>Already have an account?</span>
        <Link to={"/sign-in"} className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
