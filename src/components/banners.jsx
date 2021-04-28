import React from 'react'

export default function Banners() {
    return (
        <>
            <ul id="banners_grid" class="clearfix">
			<li>
				<a href="#0" class="img_container">
					<img src="https://image.freepik.com/free-vector/delivery-service-with-man-truck-mask_23-2148496522.jpg" data-src="img/banner_1.jpg" alt="" class="lazy" style={{opacity : '.45',backgroundImage : "linear-gradient(270deg, rgba(0, 0, 0, .64), transparent)"}} />
					<div class="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<h3 style={{color : 'black'}}>Free Shipping</h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
			<li>
				<a href="#0" class="img_container">
					<img src="https://img.freepik.com/free-vector/customer-giving-quality-feedback_74855-5482.jpg?size=626&ext=jpg" data-src="img/banner_2.jpg" alt="" class="lazy"  style={{opacity : '.45',backgroundImage : "linear-gradient(270deg, rgba(0, 0, 0, .64), transparent)"}} />
					<div class="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<h3 style={{color : 'black'}}>Trusted Customers</h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
			<li>
				<a href="#0" class="img_container">
					<img src="https://img.freepik.com/free-vector/female-customer-service_7737-1767.jpg?size=626&ext=jpg" data-src="img/banner_3.jpg" alt="" class="lazy"  style={{opacity : '.45',backgroundImage : "linear-gradient(270deg, rgba(0, 0, 0, .64), transparent)"}} />
					<div class="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<h3 style={{color : 'black'}}>24/7 Customer Service </h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
		</ul>
        </>
    )
}
