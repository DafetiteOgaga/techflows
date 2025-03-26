import plug from '../../images/plug.png'

function Contact () {
	return (
		<section className="contact_section layout_padding" id='contact'>
			<div className="container ">
				<div className="heading_container">
					<h2>
					Contact Us
					</h2>
					{/* <img src={plug} alt=""/> */}
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form action="">
							<div>
								<input type="text" placeholder="Name" />
							</div>
							<div>
								<input type="email" placeholder="Email" />
							</div>
							<div>
								<input type="text" placeholder="Phone Number" />
							</div>
							<div>
								<input type="text" className="message-box" placeholder="Message" />
							</div>
							<div className="d-flex ">
								<button>
									SEND
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-6">
						<div className="map_container">
							<div className="map-responsive">
								<iframe
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Vi+Lagos+Nigeria"
								width="600" height="300"
								// frameBorder="0"
								style={{border:0, width: '100%', height:'100%'}}
								title="location map"
								allowFullScreen />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { Contact }
