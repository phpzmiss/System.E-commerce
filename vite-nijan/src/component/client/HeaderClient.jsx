import React, { Component } from 'react'

export default class HeaderClient extends Component {
  render() {
    return (
      <>
        <header class="header shop">
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-12 col-12">
							<div class="top-left">
								<ul class="list-main">
									<li><i class="ti-email"></i> support@shophub.com</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-8 col-md-12 col-12">
							<div class="right-content">
								<ul class="list-main">
									<li><i class="ti-location-pin"></i> Store location</li>
									<li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
									<li><i class="ti-user"></i> <a href="#">My account</a></li>
									<li><i class="ti-power-off"></i><a href="login.html#">Login</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--/ End Header Inner --> */}
		</header>
      </>
    )
  }
}
