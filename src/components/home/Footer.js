import { DateHook } from "../hooks/DateHook"
import dafetite from '../../images/dafelogoBlackTransparent.png'

function Footer () {
	const year = DateHook().todayYear
	return (
		<footer className="container-fluid footer_section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-9 mx-auto">
						<p>
							&copy; {year} All Rights Reserved | Developed by:
							<a href="https://dafetiteogaga.github.io/dafetite/"><img src={dafetite} alt="developer logo" style={styles.dafetite} /></a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
export {Footer}

const styles = {
	dafetite: {
		width: '120px',
		height: '55px'
	}
}
