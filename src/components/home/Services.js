import plug from '../../images/plug.png'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'
import s5 from '../../images/s5.png'
import { IoCodeSlash, IoHardwareChip, IoShieldCheckmark,
	IoCashOutline, IoSchoolOutline, IoCloudOutline
 } from "react-icons/io5";
import { useIsMobile } from '../hooks/IsMobile'

function Services () {
	const isMobile = useIsMobile()
	return (
		<section className="service_section layout_padding">
			<div className="container">
				<div className="heading_container">
					<h2>
						Our Services
					</h2>
					{/* <img src={plug} alt=""/> */}
				</div>

				<div className="service_container" style={{flexDirection: isMobile? 'column': 'row'}}>
					<div className="box">
						<div className="img-box">
							<IoCodeSlash size={100} color="blue" />
							{/* <img src={s1} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
							<h5>
								Software Development
								{/* (Custom solutions, Web and Mobile Apps) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div className="box active">
						<div className="img-box">
							<IoHardwareChip size={100} color="green" />
							{/* <img src={s2} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
							<h5>
								Computer Hardware Maintainance & sales
								{/* (Repairs, Upgrades, Installations and sales) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<IoShieldCheckmark size={100} color="red" />
							{/* <img src={s3} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
							<h5>
								Security Solutions for Businesses and Homes
								{/* (Fire Alarm Systems, CCTV, Access Control) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div className="box ">
						<div className="img-box">
							<IoCashOutline size={100} color="gold" />
							{/* <img src={s4} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
							<h5>
								ATM spare parts sales and maintenance
								{/* (Genuine parts and expert servicing) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<IoSchoolOutline size={100} color="purple" />
							{/* <img src={s5} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
							<h5>
								IT Training
								{/* (Software, Networking, Cybersecurity, etc) */}
							</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
							</p>
						</div>
					</div>

					<div className="box">
						<div className="img-box">
							<IoCloudOutline size={100} color="skyblue" />
							{/* <img src={s5} className="img1" alt=""/> */}
						</div>
						<div className="detail-box">
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
				{/* <div className="btn-box">
					<a href="/">
					Read More
					</a>
				</div> */}
			</div>
		</section>
	)
}
export {Services}
