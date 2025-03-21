// import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import './css/responsive.css'
import './css/style.css'
// import './css/style.css.map'
// import './css/style.scss'

import { Header } from './components/home/Header';
import { Slider } from './components/home/Slider';
import { Services } from './components/home/Services';
import { WhyUs } from './components/home/WhyUs';
import { About } from './components/home/About';
import { Contact } from './components/home/Contact';
import { Info } from './components/home/Info';
import { Footer } from './components/home/Footer';

function App() {
  return (
    <div className="App">
      <div class="hero_area">
        <Header />
        <Slider />
      </div>
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Info />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
				<p>
					<a
						className="App-link"					
          	href="https://github.com/DafetiteOgaga/custom_commands"					
          	target="_blank"
						rel="noopener noreferrer"
					>
          	Install more custom commands
					</a>
				</p>
      </header> */}
    </div>
  );
}

export default App;
