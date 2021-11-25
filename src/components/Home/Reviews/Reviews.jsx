import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Images/citycentre-restaurant.jpg";
import img2 from "../../Images/ulriken-room.jpg";
import img3 from "../../Images/viewpoint-restaurant.jpg";

export default function Reviews() {
	return (
    <>
    <div className="container">
      <h2>Costumer reviews</h2>
    </div>
    <div className="carousel-review">
      <Carousel variant="dark" interval={5000}>
        <Carousel.Item>
          <img src={img1} alt="Hotel City Centre restaurant" />
          <Carousel.Caption>
            <blockquote>Amazing hotel experience! Would recommend to everyone. The restaurant is one of the best hotel restaurants I have ever tried.</blockquote>
            <p>- Anna, stayed at Hotel City Centre</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img2} alt="Ulriken Bed And Breakfast room" />
          <Carousel.Caption>
            <blockquote>Beautiful location, so close to the nature. Would really recommend if you are looking to experience the great nature of Bergen.</blockquote>
            <p>- Peter, stayed at Ulriken Bed And Breakfast</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img3} alt="Hotel Viewpoint restaurant" />
          <Carousel.Caption>
            <blockquote>The service was impeccable! I have already booked my family in for a new trip next year.</blockquote>
            <p>- Vendela, stayed at Hotel Viewpoint</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
	);
}