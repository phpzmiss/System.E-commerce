import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../form/button/Button";
import InputProduct from "../form/input/InputProduct";
import TextareaProduct from "../form/textarea/TextareaProduct";

const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [cate, setCate] = useState(null);

  const navigate = useNavigate();
  const [multipleFile, setMultipleFile] = useState([]);
  const [preview, setPreview] = useState();
  const [previewMultiple, setPreviewMultiple] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    priceSale: "",
    shortDescription: "",
    detailsDescription: "",
    categoryId: "",
    quantity: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // try {
      //   const response = await CategoriesService.getCategory();
      //   setCategory(response.data);
      //   setCate(product.categoryId);
      // } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, [product.categoryId]);
  const [file, setFile] = useState({});
  const handleChangeCate = (e) => {
    setCate(e.target.value);
  };
  const handleChangeProduct = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleChangeUploadImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeUploadMultipleImages = (e) => {
    // e.preventDefault();
    if (!e.target.files) return;
    setMultipleFile([...multipleFile, ...e.target.files]);
    const selectedFile = [];
    const targetFiles = e.target.files;
    const targetFileObject = [...targetFiles];
    targetFileObject.map((file) => {
      return selectedFile.push(URL.createObjectURL(file));
    });

    setPreviewMultiple(selectedFile);
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  const saveProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const obj = JSON.stringify(product);
    formData.append("product", obj);
    formData.append("file", file, file.name);
    for (const key of Object.keys(multipleFile)) {
      formData.append("files", multipleFile[key], multipleFile[key].name);
    }
    // ProductService.saveProduct(formData)
    //   .then((response) => {})
    //   .catch((error) => {});

    setProduct({
      id: "",
      title: "",
      price: "",
      priceSale: "",
      shortDescription: "",
      detailsDescription: "",
      quantity: "",
      categoryId: "",
    });
    setFile({});
    navigate("/product");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="min-w-[1600px] mx-auto my-10 p-10 shadow-md"
      method="post"
      encType="multipart/form-data"
      action="/"
    >
      <p className="mb-3 text-4xl font-bold text-center text-black">
        Add Product
      </p>
      <div className="gap-y-3">
        <label htmlFor="categoryId mb-3">Category</label>
        <select
          name="categoryId"
          id="categoryId"
          className="w-full p-4 mt-3 mb-3 text-black transition-all bg-white border border-gray-100 rounded-md shadow-lg outline-none focus:border-blue-500"
          onChange={handleChangeProduct}
        >
          {!loading &&
            category.map((cat) => (
              <option
                value={cat.id}
                key={cat.id}
                className="p-4 text-black transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-blue-500"
                selected={cat.id === product.categoryId ? true : false}
              >
                {cat.categoriesName}
              </option>
            ))}
        </select>
      </div>
      <InputProduct
        name="title"
        label="Title"
        control={control}
        value={product.title}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="price"
        label="Price"
        control={control}
        value={product.price}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="priceSale"
        label="Price Sale"
        control={control}
        value={product.priceSale}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="quantity"
        label="Quantity"
        control={control}
        value={product.quantity}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        label="Short Description"
        name="shortDescription"
        control={control}
        value={product.shortDescription}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <TextareaProduct
        label="Details Description"
        name="detailsDescription"
        control={control}
        value={product.detailsDescription}
        handleChangeProduct={handleChangeProduct}
      ></TextareaProduct>
      <InputProduct
        label="Image"
        name="fileImage"
        control={control}
        handleChangeProduct={handleChangeUploadImage}
        type="file"
        className="block w-full text-sm cursor-pointer text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200"
      ></InputProduct>
      <div className="object-cover w-[500px] h-auto m-auto">
        <img src={preview} alt="" />
        {/* product.length>0 ? product. : */}
      </div>
      <InputProduct
        label="Product Image"
        name="multipleImage"
        control={control}
        handleChangeProduct={handleChangeUploadMultipleImages}
        type="file"
        multiple="multiple"
        className="block w-full text-sm cursor-pointer text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200"
      ></InputProduct>
      <div>
        {multipleFile.map((url) => {
          <img src={url} alt="" />;
        })}
      </div>
      <div className="flex gap-5">
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={saveProduct}
        >
          Add
        </Button>
        <Button
          className="px-3 py-4 bg-red-500 hover:bg-red-700 "
          //   onClick={handleResetEmployee}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;
