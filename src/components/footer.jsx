import React from 'react'

export default function Footer() {
    return (
        <>
        <footer class="revealed">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6">
						<h3 data-target="#collapse_3">Contacts</h3>
					<div class="contacts" >
						<ul>
							<li><i class="ti-home"></i>ASHWE EMBROIDERY SOLUTIONS,67, 1st floor, Villupuram Main road,<br/>Kannagi Nagar, Villianur, Pondycherry 605110</li>
							<li><i class="ti-headphone-alt"></i>+91 86955 18070 <br/>+91 99441 94550</li>
							<li><i class="ti-email"></i><a href="#0">ashweembroidery@gmail.com</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-6 col-md-6">
					<div >
						<div id="newsletter">
						    <div class="form-group">
						        <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email" />
						        <button type="submit" id="submit-newsletter"><i class="ti-angle-double-right"></i></button>
						    </div>
						</div>
						<div class="follow_us text-center">
							<h5>Follow Us</h5>
							<ul>
								<li><a href="#0"><img src="https://cdn.dnshko.in/tamilnaduembroidery/img/twitter_icon.svg" data-src="/src/img/twitter_icon.svg" alt="" /></a></li>
								<li><a href="#0"><img src="https://cdn.dnshko.in/tamilnaduembroidery/img/facebook_icon.svg" data-src="/src/img/facebook_icon.svg" alt=""  /></a></li>
								<li><a href="#0"><img src="https://cdn.dnshko.in/tamilnaduembroidery/img/instagram_icon.svg" data-src="/src/img/instagram_icon.svg" alt=""  /></a></li>
								<li><a href="#0"><img src="https://cdn.dnshko.in/tamilnaduembroidery/img/youtube_icon.svg" data-src="/src/img/youtube_icon.svg" alt=""  /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /row--> */}
			<hr/>
			<div class="row add_bottom_25">
				<div class="col-lg-6 col-sm-12 text-center">
					<ul class="footer-selector clearfix">
						
						<li><img src="https://cdn.dnshko.in/tamilnaduembroidery/img/cards_all.svg" data-src="/src/img/cards_all.svg" alt="" width="198" height="30"  /></li>
					</ul>
				</div>
				<div class="col-lg-6 col-sm-12 text-center">
					<ul class="additional_links">
						<li><a href="#0">Terms and conditions</a></li>
						<li><a href="#0">Privacy</a></li>
						<li><span>© 2020 Tamilnaduembroidery</span></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>   
        </>
    )
}
