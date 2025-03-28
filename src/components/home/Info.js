import location from '../../images/location-white.png'
import telephone from '../../images/telephone-white.png'
import envelope from '../../images/envelope-white.png'
import fb from '../../images/fb.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import { useIsMobile } from '../hooks/IsMobile'

function Info () {
	const isMobile = useIsMobile()
	return (
		<section className="info_section layout_padding3">
			<div className="container">
				<div className="info_contact">
				<div className="row" style={{flexWrap: 'nowrap', alignItems: 'center', flexDirection: isMobile? 'column': 'row'}}>
						<div className="col-md-4">
							<a href="/">
								<img src={location} alt="" style={isMobile?{height: 13, width: 10}:{}} />
								<span style={isMobile?{fontSize: 13}:{}}>
									VI Lagos, Nigeria
								</span>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/">
								<img src={telephone} alt="" style={isMobile?{height: 14, width: 10}:{}} />
								<span style={isMobile?{fontSize: 13}:{}}>
									Call : +234 8888888888
								</span>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/">
								<img src={envelope} alt="" style={isMobile?{height: 12, width: 15}:{}} />
								<span style={isMobile?{fontSize: 13}:{}}>
									techflows@gmail.com
								</span>
							</a>
						</div>
					</div>
					<div className="row" style={{flexWrap: 'nowrap', alignItems: 'center', ...(isMobile?{paddingTop: 10}:{paddingTop: 20, justifyContent: 'center', flexDirection: 'row'})}}>
						<div className="col-md-4">
							<div className="info_social">
								<div>
									<a href="/">
										<img src={fb} alt="" style={isMobile?{height: 20, width: 20}:{}} />
									</a>
								</div>
								<div>
									<a href="/">
										<img src={twitter} alt="" style={isMobile?{height: 20, width: 20}:{}} />
									</a>
								</div>
								<div>
									<a href="/">
										<img src={linkedin} alt="" style={isMobile?{height: 20, width: 20}:{}} />
									</a>
								</div>
								<div>
									<a href="/">
										<img src={instagram} alt="" style={isMobile?{height: 20, width: 20}:{}} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { Info }
