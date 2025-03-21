import location from '../../images/location-white.png'
import telephone from '../../images/telephone-white.png'
import envelope from '../../images/envelope-white.png'
import fb from '../../images/fb.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'

function Info () {
	return (
		<section className="info_section layout_padding">
			<div className="container">
				<div className="info_contact">
					<div className="row">
						<div className="col-md-4">
							<a href="/">
								<img src={location} alt=""/>
								<span>
									Passages of Lorem Ipsum available
								</span>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/">
								<img src={telephone} alt=""/>
								<span>
									Call : +012334567890
								</span>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/">
								<img src={envelope} alt=""/>
								<span>
									demo@gmail.com
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 col-lg-9">
						<div className="info_form">
							<form action="">
								<input type="text" placeholder="Enter your email"/>
								<button>
									subscribe
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-4 col-lg-3">
						<div className="info_social">
							<div>
								<a href="/">
									<img src={fb} alt=""/>
								</a>
							</div>
							<div>
								<a href="/">
									<img src={twitter} alt=""/>
								</a>
							</div>
							<div>
								<a href="/">
									<img src={linkedin} alt=""/>
								</a>
							</div>
							<div>
								<a href="/">
									<img src={instagram} alt=""/>
								</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}
export { Info }
