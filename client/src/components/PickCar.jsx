import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [activeCarIndex, setActiveCarIndex] = useState(0); // Default active car index
  const [colorBtn, setColorBtn] = useState(""); // State to manage button color

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  const handleCarButtonClick = (index) => {
    setActiveCarIndex(index);
    btnID(`btn${index}`); // Change button color
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* Pick car buttons */}
              <div className="pick-box">
                {CAR_DATA.map((car, index) => (
                  <button
                    key={index}
                    className={`${coloringButton(`btn${index}`)}`}
                    onClick={() => handleCarButtonClick(index)}
                  >
                    {car.name}
                  </button>
                ))}
              </div>

              {/* Display selected car details */}
              <CarBox data={CAR_DATA} carID={activeCarIndex} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
