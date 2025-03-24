import { DateHook } from "../hooks/DateHook"
import dafetite from '../../images/dafelogoBlackTransparent.png'
import { useIsMobile } from "../hooks/IsMobile"

function Footer () {
	const isMobile = useIsMobile()
	const year = DateHook().todayYear
	return (
		<footer className="container-fluid footer_section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-9 mx-auto">
						<p style={isMobile?{fontSize: 12}:{}}>
							&copy; {year} All Rights Reserved | Developed by:
							<a href="https://dafetiteogaga.github.io/dafetite/"><img src={dafetite} alt="developer logo" className='dafetite' /></a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
export {Footer}

