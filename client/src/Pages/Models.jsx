import { Link } from "react-router-dom";
import { IconCar, IconUsers, IconStar, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import { CAR_DATA } from "../components/CarData";
import { IconCurrencyRupee } from "@tabler/icons-react";

function Models() {
  return (
    <>
      <Navbar />
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAR_DATA.map((car, index) => (
              <div key={index} className="models-div__box shadow-md">
                <div className="models-div__box__img">
                  <img src={car.img} alt={car.name} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.name}</p>
                        {/* <span>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <IconStar key={star} width={15} height={15} />
                          ))}
                        </span> */}
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4 className="flex items-center gap-1">   <IconCurrencyRupee className="text-3xl" />  {car.price ? `${car.price}` : "Contact for Price"}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span className="flex ">
                        <IconCar /> &nbsp; {car.model}
                      </span>
                      <span style={{ textAlign: "right" }} className="flex ">
                        {car.doors} Doors &nbsp; <IconCar />
                      </span>
                      <span className="flex ">
                        <IconUsers /> &nbsp; {car.seats} Seats
                      </span>
                      <span style={{ textAlign: "right" }} className="flex ">
                        {car.transmission} &nbsp; <IconCar />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+91 073511 83413</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
