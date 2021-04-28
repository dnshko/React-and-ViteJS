import React,{useContext} from 'react'
import { AppContext } from "../Context";

export default function TopSellingProducts() {
	const {
		vs_product,
		userLength,
	  } = useContext(AppContext);
	
    return (
        <>
        	<div class="container margin_60_35">
			<div class="main_title">
				<h2>Top Selling</h2>
				<span>Products</span>
			</div>
			<div class="row small-gutters" >
			{vs_product.map((x,i) => {
          return (
				<div class="col-6 col-md-4 col-xl-3" key={x.product_id}>
					<div class="grid_item card" style={{borderRadius: '20px',boxShadow: "0 1.5px 12px 2px rgb(0 0 0 / 6%)"}}>
						<span class="ribbon hot">Hot</span>
						<figure>
							<a href="http://ashweembroiderysolution.com/all_categories.php">
								<img class="img-fluid lazy"  style={{height : "150px"}} src={("http://ashweembroiderysolution.com/admin/Upload/Products/"+x.image)} data-src={("http://ashweembroiderysolution.com/admin/Upload/Products/"+x.image)} alt="" />
							</a>
						</figure>
						<div class="rating"><i class="ti-star voted"></i><i class="ti-star voted"></i><i class="ti-star voted"></i><i class="ti-star voted"></i><i class="ti-star"></i></div>
						<a href="http://ashweembroiderysolution.com/all_categories.php">
							<h3>{x.product_name}</h3>
						</a>
						<div class="price_box">
							<span class="new_price">{x.price}</span>
						</div>
					</div>
					{/* <!-- /grid_item --> */}
				</div>
			)})}
							{/* <!-- /col --> */}
							</div>
		</div> 
        </>
    )
}
