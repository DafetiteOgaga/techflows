import React, {useState, useEffect} from 'react'
import techflow from '../../images/techflowsTransparent.png'

function Header () {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [activeSection, setActiveSection] = useState("#home");
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// If scrolling down, hide header
				setIsVisible(false);
			} else {
				// If scrolling up, show header
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		};
	
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	useEffect(() => {
		// Intersection Observer to detect which section is visible
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);
				if (visibleSection) {
				setActiveSection(`#${visibleSection.target.id}`);
				}
			},
			{ threshold: 0.5 }
		);
	
		sections.forEach((section) => observer.observe(section));
	
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);
	const headerItems = [
		{
			item: 'Home',
			ref: '#home'
		},
		{
			item: 'Service',
			ref: '#service'
		},
		{
			item: 'About',
			ref: '#about'
		},
		{
			item: 'Contact',
			ref: '#contact'
		}
	]
	return (
		<header className={`header_section ${isVisible ? "show-header" : "hide-header"}`}>
			<div className="container">
				<nav className="navbar navbar-expand-lg custom_nav-container ">
					<a className="navbar-brand" href="index.html">
						<img src={techflow} alt="techflow logo"/>
						<span
						style={{
							fontFamily: ['Marck Script', 'Italianno', 'Bad Script', 'Homemade Apple', 'Cookie', 'Great Vibes', 'Caveat', 'Courgette', 'sans-serif'],
							fontSize: 27,
							// fontWeight: 200,
						}}
						>
							Techflows Engineering
						</span>
					</a>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
							<ul className="navbar-nav  ">
							{headerItems.map((item, index) => {
								return (
									<li key={index}
									className={`nav-item ${activeSection === item.ref ? "active" : ""}`}
									>
										<a className="nav-link" href={item.ref}>{item.item}</a>
									</li>
								)
							})}
								{/* <li className="nav-item active">
									<a className="nav-link" href="index.html">Home</a>
								</li> */}
								{/* <li className="nav-item">
									<a className="nav-link" href="about.html"> About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="service.html"> Service </a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="blog.html"> Blog </a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact.html">Contact </a>
								</li> */}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}
export {Header}
