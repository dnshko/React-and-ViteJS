import React from 'react'

export default function Header() {
    return (
        <>
            
<header className="version_1">
		<div className="layer"></div>
    {/* <!-- Mobile menu overlay mask --> */}
		<div className="main_header Sticky">
			<div className="container">
				<div className="row small-gutters">
					<div className="col-xl-3 col-lg-3 d-lg-flex align-items-center">
						<div id="logo">
							<a href="index.html"><img src="http://ashweembroiderysolution.com/assets/images/logo.png" alt="" width="100" height="80px" /></a>
						</div>
					</div>
					<nav className="col-xl-6 col-lg-7">
						<a className="open_close" href="javascript:void(0);">
							<div className="hamburger hamburger--spin">
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</div>
						</a>
						{/* <!-- Mobile menu button --> */}
						<div className="main-menu">
							<div id="header_menu">
								<a href="index.html"><img src="http://ashweembroiderysolution.com/assets/images/logo.png" alt="" width="100" height="35" /></a>
								<a href="#" className="open_close" id="close_in"><i className="ti-close"></i></a>
							</div>
							<ul>
								<li>
									<a href="javascript:void(0);" className="show-submenu">Home</a>
								</li>
								<li>
									<a href="http://ashweembroiderysolution.com/all_categories.php">All categories</a>
								</li>
								<li>
									<a href="http://ashweembroiderysolution.com/contact.php">Contact</a>
								</li>
							</ul>
						</div>
						{/* <!--/main-menu --> */}
					</nav>
				</div>
				{/* <!-- /row --> */}
			</div>
		</div>
		{/* <!-- /main_header --> */}
	</header>
  
        </>
    )
}
