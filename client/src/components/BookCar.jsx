import { useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import axios from "axios"
import Swal from "sweetalert2";

function BookCar() {
  // booking car
  const [carType, setCarType] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");
const[name,setName] = useState("")
const[contact,setContact] = useState("")



  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [totalDistance, setTotalDistance] = useState(null);

  const onChangeFrom = (event) => {
    const value = event.target.value;
    setFromValue(value);
    fetchSuggestions(value, setFromSuggestions);
  };

  const onChangeTo = (event) => {
    const value = event.target.value;
    setToValue(value);
    fetchSuggestions(value, setToSuggestions);
  };

  const fetchSuggestions = (value, setSuggestions) => {
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions({ input: value }, (predictions) => {
      setSuggestions(predictions || []);
    });
  };

  const onSuggestionSelectedFrom = (suggestion) => {
    setFromValue(suggestion.description);
    setFromSuggestions([]);
  };

  const onSuggestionSelectedTo = (suggestion) => {
    setToValue(suggestion.description);
    setToSuggestions([]);
  };






  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };



  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img


  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  const calculateDistance = () => {
    const origin = fromValue;
    const destination = toValue;
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: window.google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, (response, status) => {
      if (status === 'OK') {
        const distance = response.rows[0].elements[0].distance.text;
        setTotalDistance(distance);
      } else {
        setTotalDistance('Error calculating distance');
      }
    });
  };


  const submitData = async(e) =>{
    e.preventDefault()
    // console.log("hello")
    await calculateDistance()

    let formData = new FormData()

    formData.append("name" , name)
    formData.append("carType",carType)
    formData.append("from",fromValue)
    formData.append("to",toValue)
    formData.append("pickupDate",pickTime)
    formData.append("dropDate",dropTime)
    formData.append("contact",contact)
    formData.append("distance",totalDistance)

    // console.log(formData)

    // Swal.fire({
    //   title: 'Loading',
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   allowEnterKey: false,
    //   showConfirmButton: false,
    //   html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    // });
    
    // const res = await axios.post( "http://localhost:8080/api/v1/user/booking", formData)

   
    // if(res?.data?.success){
    //   Swal.fire({
    //     title: `Thankyou ${name} For Booking `,
    //     text: `Any Futher Information Contact - 6267144122`,
    //     icon: "success",
    //   });
    // }



// Show loading toast
Swal.fire({
  title: 'Loading',
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  showConfirmButton: false,
  html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
});

try {
  // Make the POST request
  const res = await axios.post("http://localhost:8080/api/v1/user/booking", formData);

  // Check if response is successful
  if (res?.data?.success) {
    // Close loading toast
    Swal.close();

    // Show success toast
    Swal.fire({
          title: `Thankyou ${name} For Booking `,
          text: `Any Futher Information Contact - 6267144122`,
          icon: "success",
        });
  } else {
    // Close loading toast
    Swal.close();

    // Show error toast
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Booking failed. Please try again later.'
    });
  }
} catch (error) {
  // Close loading toast
  Swal.close();

  // Show error toast if request fails
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'An error occurred while processing your request. Please try again later.'
  });
}



  }

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
       

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              {/* <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p> */}

              <form className="box-form" onSubmit={submitData}>

              <div className="box-form__car-type">
                  <label>
                    <IconUser className="input-icon" /> &nbsp; Enter Your Name <b>*</b>
                  </label>
               <input type="text" 
               placeholder="Enter Your name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
          className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
               
                />
                </div>



                <div className="box-form__car-type">
                  <label>
                    <IconPhone className="input-icon" /> &nbsp; Contact Number <b>*</b>
                  </label>
               <input type="text" 
               placeholder="Enter Your Number"
               value={contact}
               onChange={(e)=>setContact(e.target.value)}
          className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
               
                />
                </div>





                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  {/* <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select> */}

                  <input
          type="text"
          placeholder="From"
          value={fromValue}
          onChange={onChangeFrom}
          className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
        />
        <ul className="mt-2">
          {fromSuggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => onSuggestionSelectedFrom(suggestion)}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-2xl"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>


                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  {/* <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select> */}

                  <input
          type="text"
          placeholder="To"
          value={toValue}
          onChange={onChangeTo}
          className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
        />
        <ul className="mt-2">
          {toSuggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => onSuggestionSelectedTo(suggestion)}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-2xl"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>

                </div>

                <div className="box-form__car-time ">
                  <label htmlFor="picktime" className="flex">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime" className=" flex ">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    min={pickTime}
                  ></input>
                </div>

                <button  type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

     
    </>
  );
}

export default BookCar;
