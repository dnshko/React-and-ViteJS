import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export default function NewModels() {
    
    return (
        <>
				<div class="featured lazy" style={{backgroundImage: "url(http://ashweembroiderysolution.com/assets/images/Back.png)"}}>
			<div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
				<div class="container margin_60">
					<div class="row justify-content-center justify-content-md-start">
						<div class="col-lg-6 wow" data-wow-offset="150">
							<h3>Tamil Naduembroidery Solution</h3>
							<p>Usha | Singer Merritt | Juki | Jack | Gemsy </p>
							<div class="feat_text_block">
								<a class="btn_1" href="http://ashweembroiderysolution.com/" role="button">Shop Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
           	<div class="container margin_60_35">
			<div class="main_title">
				<h2>NEW	Models</h2>
			</div>
			<OwlCarousel className='owl-carousel owl-theme products_carousel' >
				<div class="item" style={{padding: '5px'}}>
					<div class="grid_item card">
						<span class="ribbon new">New</span>
						<figure>
							<a href="http://ashweembroiderysolution.com/all_categories.php">
								<img  src="http://ashweembroiderysolution.com/assets/promotions/usha-8801-e.png" data-src="http://ashweembroiderysolution.com/assets/promotions/usha-8801-e.png" alt="" />
							</a>
						</figure>
						<a href="http://ashweembroiderysolution.com/all_categories.php">
							<h3>Usha 8801 e</h3>
						</a>
					</div>
					{/* <!-- /grid_item --> */}
				</div>
				<div class="item" style={{padding: '5px'}}>
					<div class="grid_item card">
						<span class="ribbon new">New</span>
						<figure>
							<a href="http://ashweembroiderysolution.com/all_categories.php">
								<img  src="http://ashweembroiderysolution.com/assets/promotions/wonder-stitch-plus.jpg" data-src="http://ashweembroiderysolution.com/assets/promotions/wonder-stitch-plus.jpg" alt="" />
							</a>
						</figure>
						<a href="http://ashweembroiderysolution.com/all_categories.php">
							<h3>Wonder Stitch</h3>
						</a>
					</div>
					{/* <!-- /grid_item --> */}
				</div><div class="item" style={{padding: '5px'}}>
					<div class="grid_item card">
						<span class="ribbon new">New</span>
						<figure>
							<a href="http://ashweembroiderysolution.com/all_categories.php">
								<img  src="http://ashweembroiderysolution.com/assets/promotions/singer-3342.jpg" data-src="http://ashweembroiderysolution.com/assets/promotions/singer-3342.jpg" alt="" />
							</a>
						</figure>
						<a href="http://ashweembroiderysolution.com/all_categories.php">
							<h3>Singer 3342</h3>
						</a>
					</div>
					{/* <!-- /grid_item --> */}
				</div>
				{/* <!-- /item --> */}
			</OwlCarousel>
			{/* <!-- /products_carousel --> */}
		</div> 
        </>
    )
}
