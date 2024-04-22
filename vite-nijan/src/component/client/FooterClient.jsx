import React, { Component } from 'react'

export default class FooterClient extends Component {
  render() {
    return (
      <footer class='bg-gray-700 text-white'>
		<div class="footer-top section">
			<div class="page-container mt-5 py-20">
				<div class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-4">
					<div class="col-span-2 ">
                        <div class="logo text-2xl font-bold text-orange-500 mb-5">
                            NijanShop.
                        </div>
                        <p class="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                        <p class="mt-5">Got Question? Call us 24/7<span><br/><a href="tel:123456789" class="text-2xl text-orange-500 font-bold">+0123 456 789</a></span></p>
					</div>
					<div class="col-lg-2 col-md-6 col-12">
						<div class="single-footer links">
							<h4 class="font-semibold mb-5 text-lg">Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Faq</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-2 col-md-6 col-12">
						<div class="single-footer links">
							<h4 class="font-semibold mb-5 text-lg">Customer Service</h4>
							<ul>
								<li><a href="#">Payment Methods</a></li>
								<li><a href="#">Money-back</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">Shipping</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<div class="single-footer social">
							<h4 class="font-semibold mb-5 text-lg">Get In Tuch</h4>
							<div class="contact">
								<ul>
									<li>NO. 342 - London Oxford Street.</li>
									<li>012 United Kingdom.</li>
									<li>info@eshop.com</li>
									<li>+032 3456 7890</li>
								</ul>
							</div>
							<ul>
								<li><a href="#"><i class="ti-facebook"></i></a></li>
								<li><a href="#"><i class="ti-twitter"></i></a></li>
								<li><a href="#"><i class="ti-flickr"></i></a></li>
								<li><a href="#"><i class="ti-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="copyright page-container py-3 border-t-[1px] border-white">
			<div class="container">
				<div class="inner">
					<div class="flex items-center justify-between mx-3">
						<div class="col-lg-6 col-12">
							<div class="left">
								<p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div class="col-lg-6 col-12">
							<div class="right">
								<img src="images/payments.png" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </footer>
    )
  }
}
