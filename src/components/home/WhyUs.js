// import plug from '../../images/plug.png'
import about1 from '../../images/about-img1.jpg'
import about2 from '../../images/about-img2.jpg'

function WhyUs() {
	return (
		// <section class="layout_padding">
		<section class="about_section layout_padding">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
					<div class="detail-box">
						<div class="heading_container">
								<h2>
									Why Choose Us?
								</h2>
								{/* <img src={plug} alt=""/> */}
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit
							</p>
							{/* <a href="/">
								Read More
							</a> */}
						</div>
					</div>
					<div class="col-md-6">
						<div class="img_container">
							<div class="img-box b1">
								<img src={about1} alt="" />
							</div>
							<div class="img-box b2">
								<img src={about2} alt="" />
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}
export { WhyUs }
