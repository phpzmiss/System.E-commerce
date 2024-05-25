
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../fragments/Breadcrumbs'
import Button from '../form/button/Button'
import { FaCartArrowDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import CommonItems from '../../fragment/CommonItems';
import ItemNews from '../../fragment/ItemNews';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../modules/ProductService';
import Default from "../../../assets/default.png";
import formatter from '../../modules/formatter';
import render from '../../modules/re-render';

const DetailProduct = () => {
    const navigate = useNavigate();
    const { param1, param2 } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState("");
    const [active, setActive] = useState(Default);
    if (param1 != null && param2 != null) {
        useEffect(() => {
            setLoading(true);
          const fetchData = async () => {
            try {
            const response = await ProductService.getProductById(param1, param2);
                if (response.data.code == 200) {
                    let pro = response.data.result;
                    setProduct({
                        productId: pro.productId,
                        productTitle: pro.title,
                        productDescription: pro.description,
                        productSummary: pro.summary,
                        productPrice: pro.price ? Number(pro.price) : 0,
                        productDiscountValue: pro.discountValue ? Number(pro.discountValue) : 0,
                        categoryId: pro.categoryId,
                        categoryName: pro.categoryName,
                        totalQuantity: pro.quantity,
                        productImages: pro.pictureProductList,
                    });
                    setActive(pro.pictureProductList != null && pro.pictureProductList?.length > 0 && pro.pictureProductList[0].pictureData != "" ? pro.pictureProductList[0].pictureData : Default);
                    setLoading(false);
                }
            } catch (error) {}
            };
            fetchData();
        }, []);
    }
    const handleChange = (e) => {
        let quantity = e.target.value;
        if (isNaN(quantity) || Number(quantity) < 0) {
            setQuantity(1);
        } else {
            setQuantity(e.target.value);
        }
    };
    const onAddToCart = () => {
        const cart = localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart'));
        if (cart.length > 0) {
            for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if (element.productId == product.productId) {
                element.productQuantity += Number(quantity);
            }
            }
            if (!cart.some((c) => c.productId == product.productId)) {
            cart.push({
                productId: product.productId,
                productName: product.productName,
                productPrice: product.productPrice,
                productQuantity: Number(quantity),
                productPicture: product.productImages.length > 0 ? product.productImages[0].pictureName : null
                ,
                productSummary: product.productSummary,
            });
            }
            localStorage.setItem("cart", JSON.stringify(cart)); 
        } else {
            let arr = [];
            arr.push({
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            productQuantity: Number(quantity),
            productPicture: product.productImages.length > 0 ? product.productImages[0].pictureName : null,
            productSummary: product.productSummary,
            });
            localStorage.setItem("cart", JSON.stringify(arr));
        }
        render();
    }
    const handleOnChangeImage = (pictureImage) => {
        setActive(pictureImage);
    }

    const onBuy = () => {
        onAddToCart();
        navigate("/cart")
    }

    return (
        <section className="pt-[100px] mb-5">
            <Breadcrumbs redirect="Detail" />
            <div className="grid grid-cols-5 gap-3 mb-5 page-container">
                <div className='flex flex-col col-span-3'>
                {!loading && product !=  null && product.productImages.length >= 0 
                ? (
                    <img
                        className="w-full h-[500px] object-contain rounded-lg"
                        src={active}
                        alt=""
                    />)
                : (<img
                        className="w-full h-[500px] object-cover rounded-lg"
                        src={Default}
                        alt=""
                    />)
                }
                    <div className={'flex gap-2 mt-3'}>
                    {!loading && product !=  null && product.productImages.length >= 0
                    ? (product.productImages.filter((e, index) => index >= 1).map((p, index) => (
                            <img
                                className="w-[150px] h-[150px] object-cover rounded-lg cursor-pointer col-span-1"
                                src={p.pictureData != "" ? p.pictureData : Default}
                                alt="detail image"
                                onClick={() => handleOnChangeImage(p.pictureData != "" ? p.pictureData : Default)}
                            />
                        )))
                    : (<></>)}
                    </div>
                </div>
                <div className='flex flex-col col-span-2 gap-3 text-black'>
                    <h1 className='text-3xl font-bold'>{product.productTitle}</h1>
                    <small>{product.productSummary}</small>
                    <div>
                        <div>
                            <h1 className='text-xl font-bold'>Price: {formatter((product.productPrice - product.productDiscountValue) < 0 ? (-product.productPrice + product.productDiscountValue) : (product.productPrice - product.productDiscountValue))}</h1>
                            <p className='text-sm'>Category: {product.categoryName}</p>
                            <p className='text-sm'>Status: {product.quantity > 0 ? 'In Stock' : 'Out of stock'}</p>
                            <p className='text-sm'>Quantity in Stock: {product.totalQuantity}</p>
                            <div class="col-lg-6 col-12 pb-1">
                                <div class="form-group">
                                    <label class="pb-1">Quantity</label>
                                    <input name="quantity" type="number" defaultValue="1" className='outline-none border-orange-500 border-solid border-[1px] px-2 py-1 max-w-[50px] ml-2 rounded-md' placeholder="" onBlur={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="flex gap-2 form-group button">
                            <Button className="p-3 bg-orange-300 hover:bg-orange-200 min-w-[200px] transition-all rounded-sm flex items-center justify-center" onClick={onAddToCart}>
                                <span>Add to cart</span> <FaCartArrowDown class='w-[20px] h-[20px] ml-2' />
                            </Button>
                            <Button
                                className="max-w-[54px] pl-4 p-3 transition-all bg-orange-300 rounded-sm hover:bg-orange-200"
                                >
                                <FcLike class='w-[20px] h-[20px]' />
                            </Button>
                            <Button className="w-full p-3 transition-all bg-orange-500 rounded-sm hover:bg-orange-400" onClick={onBuy}>
                                Buy
                            </Button>
                        </div>
                    </div>
                    <div className="w-full p-2 mt-1 text-sm bg-gray-100">
                        <p>Extra incentives when purchasing at Nijan</p>
                        <p>- Free mold removal with UV Pro for cameras & Lens.</p>
                        <p>- Free cleaning of the outside of the device & Lens.</p>
                        <p>- Free sensor cleaning with VSGO DDR professional tools</p>
                    </div>
                    <div className="w-full p-2 mt-1 text-sm">
                        {product.productSummary}
                    </div>
                </div>
            </div>
            <div className='py-3 pt-8 page-container'>
                {product.productDescription}
            </div>
            <CommonItems title="Sale product" className="pt-5 page-container">
                <div className="grid grid-cols-3 my-3 gap-x-3">
                    <ItemNews
                        button="Detail..."
                        image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        >
                        This is a new space.
                    </ItemNews>
                    <ItemNews
                        button="Detail..."
                        image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    >
                        This is a new space.
                    </ItemNews>
                    <ItemNews
                        button="Detail..."
                        image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        >
                        This is a new space.
                    </ItemNews>
                </div>
            </CommonItems>
        </section>
    );
}

export default DetailProduct;
