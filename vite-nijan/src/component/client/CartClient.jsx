import React from 'react'
import Breadcrumbs from '../admin/fragments/Breadcrumbs'
import ShopService from '../admin/fragments/ShopService'
import Subscribe from '../admin/fragments/Subscribe'
import { MdDeleteForever } from "react-icons/md";
import Button from '../admin/form/button/Button';
import Input from '../admin/form/input/Input';

export default function CartClient() {
  return (
    <section className="pt-[100px]">
    <Breadcrumbs redirect="Checkout" />
	<div className="shopping-cart section">
		<div className="page-container">
			<div className="row">
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
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
												<i className="ti-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[1]" className="input-number"  data-min="1" data-max="100" value="1" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
												<i className="ti-plus"></i>
											</button>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove">
                                <Button className="py-2 pl-4 pr-2 transition-all bg-red-500 rounded-sm w-fit hover:bg-red-400">
                                    <MdDeleteForever className='w-fit h-[20px] text-center text-white' />
                                </Button>
                                </td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[2]">
												<i className="ti-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[2]" className="input-number"  data-min="1" data-max="100" value="2" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[2]">
												<i className="ti-plus"></i>
											</button>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[3]">
												<i className="ti-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[3]" className="input-number"  data-min="1" data-max="100" value="3" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[3]">
												<i className="ti-plus"></i>
											</button>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
							</tr>
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
										<li>Cart Subtotal<span>$330.00</span></li>
										<li>Shipping<span>Free</span></li>
										<li>You Save<span>$20.00</span></li>
										<li className="last">You Pay<span>$310.00</span></li>
									</ul>
									<div className="flex flex-col gap-2 button5">
										<Button className="py-3 transition-all rounded-sm bg-slate-800 w-fit hover:bg-slate-600">Checkout</Button>
										<Button className="py-3 transition-all rounded-sm bg-slate-800 w-fit hover:bg-slate-600">Continue shopping</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <ShopService />
    <Subscribe />
    </section>
  )
}
