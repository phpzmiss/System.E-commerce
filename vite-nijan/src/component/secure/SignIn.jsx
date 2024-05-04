import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../admin/form/button/Button";
import FormGroup from "../admin/form/form/FormGroup";
import Image from '../../assets/bg-image.jpg';
import { FaGoogle, FaFacebookF  } from "react-icons/fa";
import AuthService from "../modules/AuthService";

const Login = styled.div`
  background-image: url(${Image});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  padding-top: 100px;
`;

const SignIn = () => {
  const [message, setMessage] = useState("");
  const [code, setCode] = useState(200);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeUser = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem('user'));
    if (storedName) {
      storedName.roles.includes('ADMIN') ? navigate("/admin") : navigate("/");
    }
  }, []);

  const onLogin = (e) => {
    AuthService.login(user)
    .then((response) => {
      setCode(response.code);
      if (response.code == 403) {
        setMessage("Username or password is not exists.");
      } else {
        if (response.result.accessToken) {
          const storedName = response.result;
          localStorage.setItem('user', JSON.stringify(storedName));
          if (storedName.roles.includes('ADMIN')) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      }
    })
    .catch((error) => {
    });
  }
  return (
    <Login>
      <div className="flex flex-col justify-center items-start m-10 gap-5 w-[40%] h-[80%] rounded-lg bg-slate-700 bg-opacity-60 p-10">
        <h1 className="text-[40px] font-bold">
          Sign in to Nijan Shop<span className="text-blue-600">.</span>
        </h1>

        <div className="flex items-center justify-center w-full gap-5">
          <div className="w-fit py-2 px-3 bg-red-500 font-bold tracking-widest text-center flex items-center gap-3 text-white rounded-[4px]">
            <FaGoogle className="w-[16px] h-[16px]" />
            <span>Google</span>
          </div>
          <div className="py-2 px-3 bg-blue-600 font-bold tracking-widest text-center flex items-center gap-3 text-white rounded-[4px]">
            <FaFacebookF className="w-[16px] h-[16px]" />
            <span>Facebook</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-[400px] h-[2px] bg-slate-400"></div>
        </div>
        <form
          action=""
          className="flex flex-col items-start justify-center w-full gap-5"
        >
          <FormGroup
            control={control}
            handleChangeUser={handleChangeUser}
            value={user.username}
            name="username"
          >
            Username
          </FormGroup>
          <FormGroup
            control={control}
            handleChangeUser={handleChangeUser}
            value={user.password}
            name="password"
            type="password"
          >
            Password
          </FormGroup>
          <small className="text-[12px] tracking-widest ml-3">
            Do you have an new account?{" "}
            <NavLink to="/sign-up" className="text-blue-400">
              Sign Up
            </NavLink>
          </small>
          <div className="flex w-full gap-2">
            <Button className="px-5 py-3 text-base transition-all bg-blue-500 rounded-md hover:bg-blue-600" onClick={onLogin} type="button">
              Log In
            </Button>
          </div>
          {message ?
            <div className={Number(code) == 200 ? 'bg-green-400 w-full py-2 text-center text-white rounded' : 'bg-red-400 w-full py-2 text-center text-white rounded'} >
            {message}
          </div> : ""}
        </form>
      </div>
      <div></div>
    </Login>
  );
};

export default SignIn;
