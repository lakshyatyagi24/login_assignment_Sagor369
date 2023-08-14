// import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formHandle = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-green-300">
        <div className="text-center ">
            <h1 className="font-extrabold text-5xl uppercase py-6 ">wellcome to login </h1>
            <h3 className="text-3xl pb-4 ">please login</h3>
        </div>
      <div className="hero ">
        <div className="hero-content  ">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(formHandle)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  {...register("userName")}
                  placeholder="UserName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<span className="text-red-400 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password<span className="text-red-400 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">minimum 6 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400">Maximum 20 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">
                    At least one special character, one uppercase leter, one
                    number
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <button className="bg-gray-500 py-12 text-4xl text-yellow-200 font-bold ">
                google 
              </button>
              <button className="bg-blue-500 py-12 text-4xl text-white font-bold ">
                Facebook 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
