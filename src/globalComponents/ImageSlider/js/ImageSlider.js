import React from 'react';
import  '../css/ImageSlider.css';

const ImageSlider = (props) => {
	return (
		<div>
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					{props.slider.map((images, key) => {
						return (
							<li data-target="#carouselExampleCaptions" data-slide-to={key} className={images.status}></li>
						)
					})}
				</ol>
				<div className="carousel-inner">
					{props.slider.map((images, key) => {
						return (
							<div key={key} className={images.className + ' ' + images.status}>
								<img src={images.image} className="d-block w-100" alt={images.image} />
								<div className="carousel-caption d-none d-md-block">
									<h5 style={{color: images.colorCode}}>{images.title}</h5>
									<p style={{color: images.colorCode}}>{images.description}</p>
								</div>
							</div>
						)
					})}
				</div>
				<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	)
}

export default ImageSlider