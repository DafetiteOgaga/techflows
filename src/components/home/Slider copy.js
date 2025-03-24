// import sliderImagesLoad1 from '../../images/slider-img.jpg'
// import sliderImagesLoad2 from '../../images/about-img1.jpg'
// import sliderImagesLoad3 from '../../images/about-img2.jpg'
// import sliderImagesLoad4 from '../../images/blog1.jpg'
// import { useState, useRef } from 'react'
// // import { Link}
// // import { Link } from 'react-router-dom';

// function Slider () {
// 	// Array of image URLs (Replace with your actual images)
// 	const sliderImages = [
// 		sliderImagesLoad1,
// 		sliderImagesLoad2,
// 		sliderImagesLoad3,
// 		];
	
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [transitionClass, setTransitionClass] = useState("");

// 	// Function to move to the next slide
// 	const nextSlide = () => {
// 		console.log('nextSlide')
// 		setTransitionClass("carousel-item-next");
// 		setTimeout(() => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
// 		);
// 		setTransitionClass("");
// 		}, 900); // Matches the CSS transition duration
// 	};
// 	// Function to move to the previous slide
// 	const prevSlide = () => {
// 		console.log('prevSlide')
// 		setTransitionClass("carousel-item-prev");
// 		setTimeout(() => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
// 		);
// 		setTransitionClass("");
// 		}, 900);
// 	};
// 	console.log('current image:', sliderImages[currentIndex],
// 		'\n', {transitionClass}
// 	)
// 	// console.log({transitionClass})
// 	return (
// 		<section className=" slider_section ">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-6 ">
// 						<div className="detail_box">
// 							<h1>
// 								Your Trusted <br/>
// 								IT Solution <br/>
// 								Partner
// 							</h1>
// 							<p>
// 								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
// 							</p>
// 							<a href="/" className="">
// 								Contact Us
// 							</a>
// 						</div>
// 					</div>
// 					<div className="col-lg-5 col-md-6 offset-lg-1">
// 						<div className="img_content"
// 						>
// 							<div className="img_container"
// 							>
// 								<div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
// 								>
// 									<div className="carousel-inner"
// 									>
// 										<div className={`carousel-item active ${transitionClass}`}>
//               <div className="img-box">
//                 <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//               </div>
//             </div>
// 											{/* <div
// 												className={`carousel-item active ${transitionClass}`}
// 												>
// 												<div className="img-box"
// 												>
// 													<img src={sliderImages[currentIndex]} alt={`slider img`}
// 													/>
// 												</div>
// 											</div> */}
// 									</div>
// 								</div>
// 							</div>
// 							<button className="carousel-control-prev"
// 							onClick={prevSlide}
// 							// style={{cursor: 'pointer'}}
// 							// href="#carouselExampleControls"
// 							// role="button"
// 							// data-slide="prev"
// 							>
// 								<span className="sr-only">Previous</span>
// 							</button>
// 							<button className="carousel-control-next"
// 							onClick={nextSlide}
// 							// style={{cursor: 'pointer'}}
// 							// href="#carouselExampleControls"
// 							// role="button"
// 							// data-slide="next"
// 							>
// 								<span className="sr-only">Next</span>
// 							</button>
// 						</div>

// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export {Slider}

import sliderImagesLoad1 from '../../images/slider-img.jpg'
import sliderImagesLoad2 from '../../images/about-img1.jpg'
import sliderImagesLoad3 from '../../images/about-img2.jpg'
import { useState } from 'react'

function Slider() {
  const sliderImages = [
    sliderImagesLoad1, 
    sliderImagesLoad2, 
    sliderImagesLoad3
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    setDirection("next");
    // setTransitionClass("carousel-item-next");
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
      setTransitionClass("");
      setDirection(null);
    }, 600);
  };

  const prevSlide = () => {
    setDirection("prev");
    // setTransitionClass("carousel-item-prev");
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      );
      setTransitionClass("");
      setDirection(null);
    }, 600);
  };

  return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail_box">
              <h1>
                Your Trusted <br/> 
                IT Solution <br/> 
                Partner
              </h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
              </p>
              <a href="/" className="">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <div className="img_content">
              <div className="img_container">
                <div className="carousel slide">
                  <div className="carousel-inner">
                    {sliderImages.map((image, index) => (
                      <div 
                        key={index}
                        className={`carousel-item 
                          ${currentIndex === index ? 'active' : ''} 
                          ${direction === 'next' && currentIndex === index ? 'carousel-item-next' : ''}
                          ${direction === 'prev' && currentIndex === index ? 'carousel-item-prev' : ''}
                        `}
                      >
                        <div className="img-box">
                          <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                className="carousel-control-prev" 
                onClick={prevSlide}
              >
                <span className="sr-only">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                onClick={nextSlide}
              >
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Slider }