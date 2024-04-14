import React from "react";
import { useForm } from "react-hook-form";
import Input from "../input/Input";

const Category = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <p className="mb-3 text-2xl font-bold text-center text-gray-600">
        Register Form
      </p>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <Input
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
          type="text"
        ></Input>
        <p className="text-sm text-red-500">Please enter your username</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <Input
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="email"
        ></Input>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <Input
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        ></Input>
      </div>
      {/* <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        ></CheckboxHook>
      </div> */}
      <button
        type="submit"
        className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default Category;
