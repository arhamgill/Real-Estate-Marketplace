import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth";

function SignUp() {
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(signInStart());
    try {
      const res = await axios.post("/api/auth/signin", data);
      console.log(res.data.user);
      dispatch(signInSuccess(res.data.user));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl my-7 font-semibold text-center">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          })}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="bg-slate-800 text-white py-3 rounded-xl focus:outline-none w-full"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <OAuth />
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <div className="mt-4 flex gap-2">
        <span>Dont have an account?</span>
        <Link to={"/sign-up"} className="text-blue-500">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
