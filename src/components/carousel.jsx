import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export default function Carousel() {
    return (
        <>
            <div id="carousel-home" class="add_top_5">
			<OwlCarousel class="owl-carousel owl-theme" items={1} loop={true}  autoplay={true}>
				<div class="owl-slide cover" style={{backgroundImage: "url(http://ashweembroiderysolution.com/admin/Upload/Banner/e2e5096d574976e8f115a8f1e0ffb52b.jpg)"}}>
					<div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<div class="container">
							<div class="row justify-content-center justify-content-md-end">
								<div class="col-lg-6 static">
									<div class="slide-text text-right white">
										<h2 class="owl-slide-animated owl-slide-title">Attack Air<br/>Max 720 Sage Low</h2>
										<p class="owl-slide-animated owl-slide-subtitle">
											Limited items available at this price
										</p>
										<div class="owl-slide-animated owl-slide-cta"><a class="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--/owl-slide--> */}
				<div class="owl-slide cover"style={{backgroundImage : "url(http://ashweembroiderysolution.com/admin/Upload/Banner/299e150c404f7fcf2e4a83e2ea70d42b.jpg)"}} >
					<div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
						<div class="container">
							<div class="row justify-content-center justify-content-md-start">
								<div class="col-lg-6 static">
									<div class="slide-text white">
										<h2 class="owl-slide-animated owl-slide-title">Attack Air<br/>VaporMax Flyknit 3</h2>
										<p class="owl-slide-animated owl-slide-subtitle">
											Limited items available at this price
										</p>
										<div class="owl-slide-animated owl-slide-cta"><a class="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--/owl-slide--> */}
				<div class="owl-slide cover" style={{backgroundImage: "url(http://ashweembroiderysolution.com/admin/Upload/Banner/f6b6d2a114a9644419dc8d2315f22401.jpg)"}}>
					<div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(255, 255, 255, 0.5)">
						<div class="container">
							<div class="row justify-content-center justify-content-md-start">
								<div class="col-lg-12 static">
									<div class="slide-text text-center black">
										<h2 class="owl-slide-animated owl-slide-title">Attack Air<br/>Monarch IV SE</h2>
										<p class="owl-slide-animated owl-slide-subtitle">
											Lightweight cushioning and durable support with a Phylon midsole
										</p>
										<div class="owl-slide-animated owl-slide-cta"><a class="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--/owl-slide--> */}
				</div>
			</OwlCarousel>
			<div id="icon_drag_mobile"></div>
		</div>
        </>
    )
}
