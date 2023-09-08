import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now using our dApp</h3>
              <h2>Quick & easy car rental in Nigeria</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Pick a Car</h3>
                <p>
                We provide an extensive selection of vehicles to cater to all your driving requirements.
                Rest assured, we have the ideal car to suit your needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Customer Service</h3>
                <p>
                Our experienced and approachable operators are constantly available to assist you with any inquiries or issues.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Start Driving</h3>
                <p>
                Whether you're embarking on a road trip or any other journey, our extensive range of cars has you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
