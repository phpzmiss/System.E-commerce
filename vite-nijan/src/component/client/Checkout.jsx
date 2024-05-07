import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../admin/fragments/Breadcrumbs'
import ShopService from '../admin/fragments/ShopService'
import Subscribe from '../admin/fragments/Subscribe'
import Button from '../admin/form/button/Button'
import formatter from '../modules/formatter'
import OrderService from '../modules/OrderService'
import render from '../modules/re-render'

const Checkout = () => {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [message, setMessage] = useState("");
	const [code, setCode] = useState(400);
	const [user, setUser] = useState({
		userId: "",
		firstName: "",
		lastName: "",
		emailAddress: "",
		phoneNumber: "",
		country: "AS",
		stateDivision: "",
		postalCode: "",
		company: "",
	});
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

	  if (localStorage.getItem("user")) {
		const userLogin = JSON.parse(localStorage.getItem('user'));
		user.emailAddress = userLogin.email;
		user.userId = userLogin.id;
	  }
    }, []);
	const handleChange = (e) => {
		const value = e.target.value;
		setUser({ ...user, [e.target.name]: value });
	};
	const handleOrder = async (e) => {
		setLoading(false);
		let order = {
			orderList: cart,
			user: user,
		}
		OrderService.insert(order)
		.then((response) => {
			setCode(response.data.code);
			setMessage(response.data.message);
			setLoading(true);
			localStorage.removeItem("cart");
			render();
			setTotalPrice(0);
			setTimeout(() => {
				setLoading(false);
				setCode(400);
				setMessage("");
				setUser({
					firstName: "",
					lastName: "",
					phoneNumber: "",
					country: "AS",
					stateDivision: "",
					postalCode: "",
					company: "",
				});
				if (localStorage.getItem("user")) {
					const userLogin = JSON.parse(localStorage.getItem('user'));
					user.emailAddress = userLogin.email;
					user.userId = userLogin.id;
				  }
				setLoading(true);
			}, 3000)
		})
		.catch((error) => {});
	}
  return (
    <section className="pt-[100px]">
        <Breadcrumbs redirect="Checkout" />
		<section className="shop checkout section">
			<div className="page-container">
				{loading && code == 200 && message != "" ? 
				(<div className='w-full px-2 py-3 text-xl font-bold text-center text-white bg-green-400'>{message}</div>)
				: (<div className="grid grid-cols-4 gap-2"> 
					<div className="col-span-3  border-[1px] border-slate-100 p-5">
						<div className="checkout-form">
							<h2>Make Your Checkout Here</h2>
							<p>Please register in order to checkout more quickly</p>
							<form className="form" method="post" action="#">
								<div className="grid grid-cols-2 gap-3">
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<label>First Name<span>*</span></label>
											<input type="text" name="firstName" placeholder="" required="required" onChange={handleChange} value={user.firstName}/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<label>Last Name<span>*</span></label>
											<input type="text" name="lastName" placeholder="" required="required" onChange={handleChange} value={user.lastName}/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<label>Email Address<span>*</span></label>
											<input type="email" name="emailAddress" placeholder="" required="required" onChange={handleChange} value={user.emailAddress}/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<label>Phone Number<span>*</span></label>
											<input type="number" name="phoneNumber" placeholder="" required="required" onChange={handleChange} value={user.phoneNumber}/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="flex flex-col form-group">
											<label className="w-fit">Country<span>*</span></label>
											<select className="p-4 transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-black" name='country' onChange={handleChange} value={user.country}>
												<option value="AS">American Samoa</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="flex flex-col form-group">
											<label className="w-fit">State / Division<span>*</span></label>
											<select className="p-4 transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-black" onChange={handleChange} name='stateDivision' value={user.stateDivision}>
												<option value="divition" selected="selected">New Yourk</option>
												<option>Los Angeles</option>
												<option>Chicago</option>
												<option>Houston</option>
												<option>San Diego</option>
												<option>Dallas</option>
												<option>Charlotte</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<label>Postal Code<span>*</span></label>
											<input type="text" name="postalCode" placeholder="" required="required" onChange={handleChange} value={user.postalCode}/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="flex flex-col form-group">
											<label className="w-fit">Company<span>*</span></label>
											<select className="p-4 transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-black" onChange={handleChange} name='company' value={user.company}>
												<option selected="selected">Microsoft</option>
												<option>Apple</option>
												<option>Xaiomi</option>
												<option>Huawer</option>
												<option>Wpthemesgrid</option>
												<option>Samsung</option>
												<option>Motorola</option>
											</select>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group create-account">
											<input id="cbox" type="checkbox" />
											<label>Create an account?</label>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div>
						<div className="order-details">
							<div className="single-widget">
								<h2>CART  TOTALS</h2>
								<div className="content">
									<ul>
										<li>Sub Total<span>{formatter(totalPrice)}</span></li>
										<li>(+) Shipping<span>Free</span></li>
										<li className="last">Total<span>{formatter(totalPrice)}</span></li>
									</ul>
								</div>
							</div>
							<div className="single-widget">
								<h2>Payments</h2>
								<div className="content">
									<div className="checkbox">
										<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Cash On Delivery</label>
									</div>
								</div>
							</div>
							<div className="single-widget get-button">
								<div className="content">
                                <Button className="px-3 py-4 transition-all bg-orange-500 rounded-none hover:bg-orange-300" onClick={handleOrder}>
                                    Proceed to checkout
                                </Button>
								</div>
							</div>
						</div>
					</div>
				</div>)}
			</div>
		</section>
        <ShopService />
        <Subscribe />
    </section>
  )
}
export default Checkout;