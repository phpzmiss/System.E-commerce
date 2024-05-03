
import React, { useState } from 'react'
import Breadcrumbs from '../fragments/Breadcrumbs'
import Button from '../form/button/Button'
import { FaCartArrowDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import CommonItems from '../../fragment/CommonItems';
import ItemNews from '../../fragment/ItemNews';

const DetailProduct = () => {
    const [quantity, setQuantity] = useState("");
    const handleChange = (e) => {
        let quantity = e.target.value;
        if (isNaN(quantity) || Number(quantity) < 0) {
            setQuantity(1);
        } else {
            setQuantity(e.target.value);
        }
    };
    return (
        <section className="pt-[100px] mb-5">
            <Breadcrumbs redirect="Detail" />
            <div className="grid grid-cols-5 gap-3 mb-5 page-container">
                <div className='flex flex-col col-span-3'>
                    <img
                        className="w-full h-[400px] object-cover rounded-lg"
                        src='https://via.placeholder.com/600x370'
                        alt=""
                    />
                    <div className='grid grid-cols-4 gap-3 mt-3'>
                        <img
                            className="w-full h-[150px] object-cover rounded-lg"
                            src='https://via.placeholder.com/600x370'
                            alt=""
                        />
                        <img
                            className="w-full h-[150px] object-cover rounded-lg"
                            src='https://via.placeholder.com/600x370'
                            alt=""
                        />
                        <img
                            className="w-full h-[150px] object-cover rounded-lg"
                            src='https://via.placeholder.com/600x370'
                            alt=""
                        />
                        <img
                            className="w-full h-[150px] object-cover rounded-lg"
                            src='https://via.placeholder.com/600x370'
                            alt=""
                        />
                    </div>
                </div>
                <div className='flex flex-col col-span-2 gap-3 text-black'>
                    <h1 className='text-3xl font-bold'>Outdoor</h1>
                    <small>A colorful, water-resistant, insulated jacket that is constructed with eco-friendly and recycled materials.</small>
                    <div>
                        <div>
                            <h1 className='text-xl font-bold'>Price: 1000$</h1>
                            <p className='text-sm'>Category: Nikon</p>
                            <p className='text-sm'>Status: In Stock</p>
                            <p className='text-sm'>Quantity in Stock: 99</p>
                            <div class="col-lg-6 col-12 pb-1">
                                <div class="form-group">
                                    <label class="pb-1">Quantity</label>
                                    <input name="quantity" type="number" defaultValue="1" className='outline-none border-orange-500 border-solid border-[1px] px-2 py-1 max-w-[50px] ml-2 rounded-md' placeholder="" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="flex gap-2 form-group button">
                            <Button className="p-3 bg-orange-300 hover:bg-orange-200 min-w-[200px] transition-all rounded-sm flex items-center justify-center">
                                <span>Add to cart</span> <FaCartArrowDown class='w-[20px] h-[20px] ml-2' />
                            </Button>
                            <Button
                                className="max-w-[54px] pl-4 p-3 transition-all bg-orange-300 rounded-sm hover:bg-orange-200"
                                >
                                <FcLike class='w-[20px] h-[20px]' />
                            </Button>
                            <Button className="w-full p-3 transition-all bg-orange-500 rounded-sm hover:bg-orange-400">
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
                        Summary
                    </div>
                </div>
            </div>
            <div className='py-3 page-container'>
                Description
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