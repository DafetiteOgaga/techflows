import techflow from '../../images/techflowsTransparent.png'

function Header () {
	const headerItems = [
		{
			item: 'Home',
			ref: 'index.html'
		},
		{
			item: 'About',
			ref: 'about.html'
		},
		{
			item: 'Service',
			ref: 'service.html'
		},
		{
			item: 'Contact',
			ref: 'contact.html'
		}
	]
	return (
		<header className="header_section">
			<div className="container">
				<nav className="navbar navbar-expand-lg custom_nav-container ">
					<a className="navbar-brand" href="index.html">
						<img src={techflow} alt="techflow logo"/>
						<span>
							TECHFLOWS
						</span>
					</a>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
							<ul className="navbar-nav  ">
							{headerItems.map((item, index) => {
								return (
									<li key={index} className="nav-item">
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
