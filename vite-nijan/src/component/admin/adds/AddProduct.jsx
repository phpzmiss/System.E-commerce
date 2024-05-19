import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../form/button/Button";
import InputProduct from "../form/input/InputProduct";
import TextareaProduct from "../form/textarea/TextareaProduct";
import CategoryService from "../../modules/CategoryService";
import ProductService from "../../modules/ProductService";

const AddProduct = () => {
  const {param1, param2} = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [cate, setCate] = useState(null);

  const navigate = useNavigate();
  const [multipleFile, setMultipleFile] = useState([]);
  const [preview, setPreview] = useState();
  const [previewMultiple, setPreviewMultiple] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({
    productId: "",
    productTitle: "",
    productDescription: "",
    productSummary: "",
    productPrice: "",
    productDiscountValue: "",
    categoryId: "",
    quantity: "",
    productImages: [],
  });
  if (param1 != null && param2 != null) {
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await ProductService.getProductById(param1, param2);
          const category = await CategoryService.getAll();
          if (category.data.code == 200) {
            setCategory(category.data.result);
            product.categoryId = category.data.result[0].categoryId;
          }
          if (response.data.code == 200) {
            let pro = response.data.result;
            setProduct({
              productId: pro.productId,
              productTitle: pro.title,
              productDescription: pro.description,
              productSummary: pro.summary,
              productPrice: pro.price,
              productDiscountValue: pro.discountValue,
              categoryId: pro.categoryId,
              quantity: pro.quantity,
              productImages: [],
            });
            setActiveCategory(response.data.result.categoryId);
            setLoading(false);
          }
        } catch (error) {}
      };
      fetchData();
    }, []);
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoryService.getAll();

        if (response.data.code == 200) {
          setCategory(response.data.result);
          product.categoryId = response.data.result[0].categoryId;
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [product.categoryId]);
  const [file, setFile] = useState(null);
  const handleChangeCate = (e) => {
    setCate(e.target.value);
  };
  const handleChangeProduct = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
    if (e.target.name == 'categoryId') {
      setActiveCategory(e.target.value);
    }
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
    if (product.categoryId == "") {
      product.categoryId = category[0].categoryId;
    }
    e.preventDefault();

    if (param1 && param2) {
      const formData = new FormData();
      formData.append("productId", param2);
      formData.append("productTitle", product.productTitle);
      formData.append("productDescription", product.productDescription);
      formData.append("productSummary", product.productSummary);
      formData.append("productPrice", product.productPrice);
      formData.append("productDiscountValue", product.productDiscountValue);
      formData.append("quantity", product.quantity != null && product.quantity != undefined ? product.quantity : 0);
      formData.append("categoryId", activeCategory);
      if (file) {
        formData.append("files", file, file.name);
      }
      if (multipleFile) {
        for (const key of Object.keys(multipleFile)) {
          formData.append("files", multipleFile[key], multipleFile[key].name);
        }
      }

      ProductService.update(param2, formData)
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {});
    } else {
      const formData = new FormData();
      formData.append("productId", product.productId);
      formData.append("productTitle", product.productTitle);
      formData.append("productDescription", product.productDescription);
      formData.append("productSummary", product.productSummary);
      formData.append("productPrice", product.productPrice);
      formData.append("productDiscountValue", product.productDiscountValue);
      formData.append("quantity", product.quantity != null && product.quantity != undefined ? product.quantity : 0);
      formData.append("categoryId", activeCategory);
      if (file) {
        formData.append("files", file, file.name);
      }
      if (multipleFile) {
        for (const key of Object.keys(multipleFile)) {
          formData.append("files", multipleFile[key], multipleFile[key].name);
        }
      }
      ProductService.insert(formData)
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {});
  
      setProduct({
        productId: "",
        productTitle: "",
        productDescription: "",
        productSummary: "",
        productPrice: "",
        productDiscountValue: "",
        categoryId: "",
        quantity: 0,
        productImages: [],
      });
      setFile({});
    }
    setTimeout(() => {
      navigate("/admin/product");
    }, 2000);
  };
  const handleResetEmployee = (id) => {
    if (id != null) {
      navigate("/admin/product");
      return;
    } 
    setProduct({
      productId: "",
      productTitle: "",
      productDescription: "",
      productSummary: "",
      productPrice: "",
      productDiscountValue: "",
      categoryId: "",
      quantity: 0,
      productImages: [],
    });

  }

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="min-w-[1600px] mx-auto my-10 p-10 shadow-md"
      method="post"
      encType="multipart/form-data"
      action="/"
    >
      <p className="mb-3 text-4xl font-bold text-center text-black">
        {param2 != null ? 'Edit' : 'Add'} Product
      </p>
      <div className="gap-y-3">
        <label htmlFor="categoryId mb-3">Category</label>
        <select
          name="categoryId"
          id="categoryId"
          className="w-full p-4 mt-3 mb-3 text-black transition-all bg-white border border-gray-100 rounded-md shadow-lg outline-none focus:border-blue-500"
          onChange={handleChangeProduct}
          value={activeCategory}
        >
          {!loading &&
            category.map((e) => (
              <option
                value={e.categoryId}
                key={e.categoryId}
                className="p-4 text-black transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-blue-500"
                selected={e.categoryId === activeCategory ? true : false}
              >
                {e.categoryName}
              </option>
            ))}
        </select>
      </div>
      <InputProduct
        name="productTitle"
        label="Title"
        control={control}
        value={product.productTitle}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="productPrice"
        label="Price"
        control={control}
        value={product.productPrice}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <InputProduct
        name="productDiscountValue"
        label="Discount value"
        control={control}
        value={product.productDiscountValue}
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
        label="Summary"
        name="productSummary"
        control={control}
        value={product.productSummary}
        handleChangeProduct={handleChangeProduct}
      ></InputProduct>
      <TextareaProduct
        label="Description"
        name="productDescription"
        control={control}
        value={product.productDescription}
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
          {param2 != null ? 'Update' : 'Add'}
        </Button>
        <Button
          className={"px-3 py-4 " + (param2 != null ? 'bg-violet-500 hover:bg-violet-400' : 'bg-red-500 hover:bg-red-700')}
          onClick={() => handleResetEmployee(param2)}
        >
          {param2 != null ? 'Back list' : 'Cancel'}
        </Button>
      </div>
      {message ? 
        <div className='w-full px-1 py-2 mt-2 font-bold text-center text-white bg-green-500 rounded-sm'>{message}</div>
        : ""
    }
    </form>
  </>
  );
};

export default AddProduct;
