import plug from '../../images/plug.png'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'
import s5 from '../../images/s5.png'

function Services () {
	return (
		<section class="service_section layout_padding">
			<div class="container">
				<div class="heading_container">
					<h2>
						Our Services
					</h2>
					<img src={plug} alt=""/>
				</div>

				<div class="service_container">
					<div class="box">
						<div class="img-box">
							<img src={s1} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								Software Development
								{/* (Custom solutions, Web and Mobile Apps) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div class="box active">
						<div class="img-box">
							<img src={s2} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								Computer Hardware Maintainance & sales
								{/* (Repairs, Upgrades, Installations and sales) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div class="box">
						<div class="img-box">
							<img src={s3} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								Security Solutions for Businesses and Homes
								{/* (Fire Alarm Systems, CCTV, Access Control) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div class="box ">
						<div class="img-box">
							<img src={s4} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								ATM spare parts sales and maintainance
								{/* (Genuine parts and expert servicing) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div class="box">
						<div class="img-box">
							<img src={s5} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								IT Training
								{/* (Software, Networking, Cybersecurity, etc) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>

					<div class="box">
						<div class="img-box">
							<img src={s5} class="img1" alt=""/>
						</div>
						<div class="detail-box">
							<h5>
								Cloud Solutions
								{/* (Software, Networking, Cybersecurity, etc) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>

				</div>
				<div class="btn-box">
					<a href="/">
					Read More
					</a>
				</div>
			</div>
		</section>
	)
}
export {Services}
