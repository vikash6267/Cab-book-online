import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center  relative ">
      <div className=" w-screen h-screen flex items-center justify-center image-cont bg-cover bg-center filter blur-sm relative"></div>
      <div className=" absolute bg-slate-400 h-[370px] rounded-2xl w-[300px] shadow-2xl shadow-red-500 ">
        <div className=" m-5 flex flex-col justify-center items-center gap-12 border-2 border-green-300 rounded-xl pb-9 pt-3   ">
          <p className=" font-bold text-2xl ">Login</p>

          <div>
            <form onSubmit={handleOnSubmit} className="">
              <div className=" flex flex-col gap-2 ">
                <label htmlFor="email" className=" text-lg">
                  Email :
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  required
                  placeholder="Enter email"
                  className=" outline-yellow-200 placeholder:text-gray-500 rounded-sm outline "
                  onChange={handleOnChange}
                />
              </div>

              <div className=" flex flex-col gap-2 mt-4 ">
                <label htmlFor="password" className=" text-lg">
                  Password :
                </label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  id="password"
                  required
                  placeholder="Enter Password"
                  className=" outline-yellow-200 placeholder:text-gray-500 rounded-sm outline focus:outline-green-500 "
                  onChange={handleOnChange}
                />
              </div>

              <div className=" mt-5 flex items-center w-full justify-center">
                <button className=" bg-yellow-400 p-1 px-2 rounded-lg text-lg hover:bg-yellow-500 hovel:scale-105 border-[0.1px] border-black">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
