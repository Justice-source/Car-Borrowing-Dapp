import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover all positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you. We look forward to providing the best of the best 
                customer experience.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "I rented a car from this website and had an amazing
                  experience! The booking of the car was easy and the rental rates were
                  very affordable, i loved the Chevrolet Camaro."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Emeka Chinedu</h4>
                      <p>Eket</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  I highly recommend this website for renting cars for Nigerians."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Mercy Johnson</h4>
                      <p>Uyo</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
