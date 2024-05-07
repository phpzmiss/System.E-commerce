import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../admin/fragments/Breadcrumbs'
import ShopService from '../admin/fragments/ShopService'
import Subscribe from '../admin/fragments/Subscribe'
import { MdDeleteForever } from "react-icons/md";
import Button from '../admin/form/button/Button';
import Default from "../../assets/default.png";
import { NavLink } from 'react-router-dom';
import render from '../modules/re-render';
import formatter from '../modules/formatter';
import { useForm } from 'react-hook-form';
import Input from '../admin/form/input/Input';


const CartClient = () => {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      if (localStorage.getItem('cart')) {
        const storedName = JSON.parse(localStorage.getItem('cart'));
		let totalPrice = 0;
        setCart(storedName);
		for (let index = 0; index < storedName.length; index++) {
			const element = storedName[index];
			totalPrice += Number(element.productPrice) * Number(element.productQuantity);
		}
		setTotalPrice(totalPrice);
		setLoading(true);
      }
    }, []);
	const deleteProduct = (e, id) => {
		setLoading(false);
		let storedName = JSON.parse(localStorage.getItem('cart'));
		let arr = storedName.filter((c) => c.productId != id);
		let totalPrice = 0;
		if (arr?.length > 0) {
			setCart(arr);
			localStorage.setItem('cart', JSON.stringify(arr));
			for (let index = 0; index < storedName.length; index++) {
				const element = storedName[index];
				totalPrice += Number(element.productPrice) * Number(element.productQuantity);
			}
		} else {
			setCart([]);
			localStorage.removeItem("cart");
		}
		setTotalPrice(totalPrice);
		render();
		setLoading(true);
	}
	const handlePlus = (e, id) => {
		setLoading(false);
		const storedName = JSON.parse(localStorage.getItem('cart'));
		let totalPrice = 0;
		for (let index = 0; index < storedName.length; index++) {
			const element = storedName[index];
			if (element.productId == id) {
				element.productQuantity += 1;
				break;
			}
		}
		setCart(storedName);
		localStorage.setItem('cart', JSON.stringify(storedName));
		for (let index = 0; index < storedName.length; index++) {
			const element = storedName[index];
			totalPrice += Number(element.productPrice) * Number(element.productQuantity);
		}
		setTotalPrice(totalPrice);
		render();
		setLoading(true);
	}
	const handleMinus = (e, id) => {
		setLoading(false);
		let storedName = JSON.parse(localStorage.getItem('cart'));
		let totalPrice = 0;
		for (let index = 0; index < storedName.length; index++) {
			const element = storedName[index];
			if (element.productId == id) {
				if (element.productQuantity > 1) {
					element.productQuantity -= 1;
				} else {
					storedName = storedName.filter((c) => c.productId != id);
				}
				break;
			}
		}
		if (storedName?.length > 0) {
			setCart(storedName);
			localStorage.setItem('cart', JSON.stringify(storedName));
		} else {
			setCart([]);
			localStorage.removeItem('cart');
		}

		for (let index = 0; index < storedName.length; index++) {
			const element = storedName[index];
			totalPrice += Number(element.productPrice) * Number(element.productQuantity);
		}
		setTotalPrice(totalPrice);
		render();
		setLoading(true);
	}
	const {
		handleSubmit,
		formState: { errors },
		control,
	  } = useForm();
  return (
    <section className="pt-[100px]">
		<Breadcrumbs redirect="Checkout" />
		<div className="shopping-cart section">
			<div className="page-container">
				{loading && cart?.length > 0 
				?  (<><div className="row">
							<div className="col-12">
								<table className="table w-full shadow-lg shopping-summery">
									<thead className='rounded-sm'>
										<tr className="main-hading">
											<th>PRODUCT</th>
											<th>NAME</th>
											<th className="text-center">UNIT PRICE</th>
											<th className="text-center">QUANTITY</th>
											<th className="text-center">TOTAL</th> 
											<th className="text-center">DELETE</th>
										</tr>
									</thead>
									<tbody>
									{loading && cart.length >0 && (
										cart.map((item, index) => (
										<tr key={index}>
											<td className="image" data-title="No">
												<img
													className="w-full h-[250px] object-cover rounded-lg"
													src={item.productPicture != "" ? item.productPicture : Default}
													alt=""
												/>
											</td>
											<td className="product-des min-w-[300px]" data-title="Description">
												<p className="product-name"><a href="#">{item.productName}</a></p>
												<p className="product-des">{item.productSummary}</p>
											</td>
											<td className="price" data-title="Price"><span>{formatter(item.productPrice)}</span></td>
											<td className="flex items-center justify-center h-[150px] gap-3 text-center">
												<Button className="py-2 w-[24px] transition-all bg-red-500 rounded-full hover:bg-red-400" onClick={(e) => handlePlus(e, item.productId)}>
												+
												</Button>
												<Input
													name="categoryName"
													placeholder="Enter your category name"
													id="categoryName"
													control={control}
													type="text"
													className="w-[40px] px-0 text-center text-black border-[1px] border-solid py-1 border-slate-300"
													value={item.productQuantity}
												></Input>
												<Button className="py-2 rounded-full w-[24px] transition-all bg-red-500 hover:bg-red-400" onClick={(e) => handleMinus(e, item.productId)}>
												-
												</Button>
											</td>
											<td className="total-amount" data-title="Total"><span>{formatter(item.productPrice * item.productQuantity)}</span></td>
											<td className="action" data-title="Remove">
											<Button className="py-2 pl-3 w-[50px] transition-all bg-red-500 rounded-sm hover:bg-red-400" onClick={(e) => deleteProduct(e, item.productId)}>
												<MdDeleteForever className='w-fit h-[20px] text-center text-white' />
											</Button>
											</td>
										</tr>
										))
									)}
									</tbody>
								</table>
							</div>
						</div>
						<div className="px-2 py-1 mt-4 row">
							<div className="col-12">
								<div className="total-amount">
									<div className="grid grid-cols-5 gap-2">
										<div className="col-span-1">
											<div className="left">
												<div className="coupon">
													<form action="#" target="_blank" className='flex items-start justify-center '>
														<input name="Coupon" placeholder="Enter Your Coupon" className='outline-slate-400 border-[1px] border-slate-700 border-solid' />
														<Button className="ml-2 py-3 pl-4 pr-2 transition-all bg-orange-500 rounded-sm w-[100px] hover:bg-red-400">Apply</Button>
													</form>
												</div>
												<div className="checkbox">
													<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Shipping (+10$)</label>
												</div>
											</div>
										</div>
										<div className='col-span-1'></div>
										<div className='col-span-1'></div>
										<div className="col-span-2">
											<div className="right">
												<ul>
													<li>Cart Subtotal<span>{formatter(totalPrice)}</span></li>
													<li>Shipping<span>Free</span></li>
													<li>You Save<span>$20.0</span></li>
													<li className="last">You Pay<span>{totalPrice == 0 ? formatter(0) : formatter(totalPrice-20)}</span></li>
												</ul>
												<div className="flex flex-col gap-2 button5">
													<NavLink to="/checkout">
														<Button className="py-3 transition-all rounded-sm bg-slate-800 w-fit hover:bg-slate-600">Checkout</Button>
													</NavLink>
													<NavLink to="/product">
														<Button className="py-3 transition-all rounded-sm bg-slate-800 w-fit hover:bg-slate-600">Continue shopping</Button>
													</NavLink>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
					)
				: (<div className='w-full text-3xl font-bold text-center'>There are no products in the cart yet.</div>)}
			</div>
		</div>

		<ShopService />
		<Subscribe />
    </section>
  )
}

export default CartClient;
