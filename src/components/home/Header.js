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
		<header class="header_section">
			<div class="container">
				<nav class="navbar navbar-expand-lg custom_nav-container ">
					<a class="navbar-brand" href="index.html">
						<img src={techflow} alt="techflow logo"/>
						<span>
							TECHFLOWS
						</span>
					</a>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
							<ul class="navbar-nav  ">
							{headerItems.map((item, index) => {
								return (
									<li key={index} class="nav-item">
										<a class="nav-link" href={item.ref}>{item.item}</a>
									</li>
								)
							})}
								{/* <li class="nav-item active">
									<a class="nav-link" href="index.html">Home</a>
								</li> */}
								{/* <li class="nav-item">
									<a class="nav-link" href="about.html"> About</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="service.html"> Service </a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="blog.html"> Blog </a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="contact.html">Contact </a>
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
