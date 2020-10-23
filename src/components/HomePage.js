import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const HomePage = props => (
  <React.Fragment>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.zara.net/photos///2020/I/0/1/p/1971/171/656/2/w/1373/1971171656_9_3_1.jpg?ts=1599643557223"
      alt="First slide" 
    />
    <Carousel.Caption>
      <h3>Join us</h3>
      <p>As we work to reduce the impact of our products.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100"
      src="https://static.zara.net/photos///2020/I/0/1/p/2587/157/330/2/w/1402/2587157330_9_3_1.jpg?ts=1599577003965"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Save with us</h3>
      <p>We are working so that our stores, traditional and online, become more sustainable.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.zara.net/photos///2020/I/0/1/p/3067/324/526/2/w/1373/3067324526_9_3_1.jpg?ts=1598524931477"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

{/* ----------------Center Page----------------------------------------------- */}
<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className="display-4 font-weight-normal">ELM</h1>
    <p className="lead font-weight-normal">We make the most beautiful essentials, at the best factories, without traditional markups. Free shipping on 2+ items.</p>
    <a><Button variant="light" size="sm" onClick={() => props.clickHeader("items")}>New Arrivals</Button></a>
</div>

<div className="product-device shadow-sm d-none d-md-block"></div>
  <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>
{/* --------------------FOOTER------------------------------------------------- */}
<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small class="d-block mb-3 text-muted">&copy; 2020 by Shawnae Johnson</small>
    </div>
    <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Cool stuff</a></li>
        <li><a class="text-muted" href="#">Random feature</a></li>
        <li><a class="text-muted" href="#">Team feature</a></li>
        <li><a class="text-muted" href="#">Stuff for developers</a></li>
        <li><a class="text-muted" href="#">Another one</a></li>
        <li><a class="text-muted" href="#">Last time</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Resource</a></li>
        <li><a class="text-muted" href="#">Resource name</a></li>
        <li><a class="text-muted" href="#">Another resource</a></li>
        <li><a class="text-muted" href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Business</a></li>
        <li><a class="text-muted" href="#">Education</a></li>
        <li><a class="text-muted" href="#">Government</a></li>
        <li><a class="text-muted" href="#">Gaming</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Team</a></li>
        <li><a class="text-muted" href="#">Locations</a></li>
        <li><a class="text-muted" href="#">Privacy</a></li>
        <li><a class="text-muted" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
  
</React.Fragment>
)
export default HomePage;