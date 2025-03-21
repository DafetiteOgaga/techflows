import sliderImages from '../../images/slider-img.jpg'

function Slider () {
	return (
		<section class=" slider_section ">
			<div class="container">
				<div class="row">
					<div class="col-md-6 ">
						<div class="detail_box">
							<h1>
								Your Trusted <br/>
								IT Solution <br/>
								Partner
							</h1>
							<p>
								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
							</p>
							<a href="/" class="">
								Contact Us
							</a>
						</div>
					</div>
					<div class="col-lg-5 col-md-6 offset-lg-1">
						<div class="img_content">
							<div class="img_container">
								<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
									<div class="carousel-inner">
										<div class="carousel-item active">
											<div class="img-box">
												<img src={sliderImages} alt="slider img"/>
											</div>
										</div>
										<div class="carousel-item">
											<div class="img-box">
												<img src={sliderImages} alt="slider img"/>
											</div>
										</div>
										<div class="carousel-item">
											<div class="img-box">
												<img src={sliderImages} alt="slider img"/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
								<span class="sr-only">Next</span>
							</a>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
export {Slider}
