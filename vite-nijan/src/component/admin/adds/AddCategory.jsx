import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../form/button/Button";
import Input from "../form/input/Input";
import Textarea from "../form/textarea/Textarea";
import CategoryService from "../../modules/CategoryService";
import { useNavigate, useParams } from "react-router-dom";

const AddCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    categoryId: "",
    categoryName: "",
    categoryDescription: "",
    categoryTags: "",
    categorySlug: "",
  });
  if (typeof id != undefined) {
    useEffect(() => {
      const fetchData = async () => {
        // setLoading(true);
        try {
          const response = await CategoryService.getCategoryById(id);
          if (response.data.code == 200) {
            setCategory(response.data.result);
          }
        } catch (error) {
        }
        // setLoading(false);
      };
      fetchData();
    }, []);
  }
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };
  // const filterDebounce = useDebounce(category, 500);
  const saveCategories = (e) => {
    e.preventDefault();
    CategoryService.createCategory(category)
      .then((response) => {
        if (response.data.code == 200) {
          navigate("/admin/category");
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    setCategory({
      categoryId: "",
      categoryName: "",
      categoryDescription: "",
      categoryTags: "",
      categorySlug: "",
    });
  };
  const handleResetEmployee = (e) => {
    e.preventDefault();
    setCategory({
      categoryId: "",
      categoryName: "",
      categoryDescription: "",
      categoryTags: "",
      categorySlug: "",
    });
  };
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
      className="min-w-[1600px] mx-auto my-10 p-10 shadow-md"
    >
      <p className="mb-3 text-4xl font-bold text-center text-black">
        {id ? "Edit" : "Add"} category
      </p>
      <div className="flex flex-col w-full gap-3 mb-5">
        <label htmlFor="categoryName" className="cursor-pointer">
          Category name
        </label>
        <Input
          name="categoryName"
          placeholder="Enter your category name"
          id="categoryName"
          control={control}
          type="text"
          className="w-full text-black shadow-lg"
          value={category.categoryName}
          onChange={handleFilterChange}
        ></Input>
        {/* <p className="text-sm text-red-500">Please enter your username</p> */}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="categoryTags" className="cursor-pointer">
          Category tag
        </label>
        <Input
          name="categorySlug"
          placeholder="Enter your title"
          id="categorySlug"
          control={control}
          type="text"
          className="text-black shadow-lg"
          value={category.categorySlug}
          onChange={handleFilterChange}
        ></Input>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="categoryDescription" className="cursor-pointer">
          Description
        </label>
        <Textarea
          name="categoryDescription"
          placeholder="Enter your description"
          id="categoryDescription"
          control={control}
          className="text-black shadow-lg"
          value={category.categoryDescription}
          onChange={handleFilterChange}
        ></Textarea>
      </div>
      <div className="flex gap-5">
        <Button
          className="p-3 bg-blue-500 hover:bg-blue-700 "
          onClick={saveCategories}
        >
          {id ? "Edit" : "Add"}
        </Button>
        {id ? "" : <Button
          className="p-3 bg-red-500 hover:bg-red-700 "
          onClick={handleResetEmployee}
        >
          Cancel
        </Button>
        }
        
      </div>
    </form>
  );
};

export default AddCategory;
