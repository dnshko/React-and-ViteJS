import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export default function Brands() {
    return (
        <>
            <div class="bg_gray">
			<div class="container margin_30">
				<OwlCarousel id="brands" class="owl-carousel owl-theme" autoplay={true} autoplaySpeed={500} loop dots={false} items={6}>
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%201.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%201.png" alt=""  /></a>
					</div>
                    {/* <!-- /item --> */}
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%202.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%202.png" alt=""  /></a>
					</div>
                    {/* <!-- /item --> */}
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%203.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%203.png" alt=""  /></a>
					</div>
                    {/* <!-- /item --> */}
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%204.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%204.png" alt=""  /></a>
					</div>
                    {/* <!-- /item --> */}
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%205.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%205.png" alt=""  /></a>
					</div>
                    {/* <!-- /item --> */}
					<div class="item">
						<a href="http://ashweembroiderysolution.com/all_categories.php"><img src="http://ashweembroiderysolution.com/assets/promotions/BFM%206.png" data-src="http://ashweembroiderysolution.com/assets/promotions/BFM%206.png" alt=""  /></a>
					</div>
                    {/* <!-- /item -->  */}
				</OwlCarousel>
                {/* <!-- /carousel --> */}
			</div>
            {/* <!-- /container --> */}
		</div>
        </>
    )
}
