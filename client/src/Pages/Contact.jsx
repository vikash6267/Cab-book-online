import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitData = async (e) => {
    e.preventDefault();

    // Create FormData object
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Show loading toast
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
    });

    try {
      // Make the POST request
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/contact",
        formData
      );

      if (res?.data?.success) {
        Swal.fire({
          icon: "success",
          title: `Thank you ${name} for contacting us!`,
          text: "For further information, please contact: 6267144122",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contact failed. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request. Please try again later.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-page ">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development, as well as a learning specialist. Over 15
                years of experience.
              </p>
<<<<<<< HEAD
              <a href="tel:+1234567869">
                <IconPhone /> &nbsp; (123) 456-7869
              </a>
              <a href="mailto:carrental@carmail.com">
                <IconMail /> &nbsp; carrental@carmail.com
              </a>
              <p>
                <IconLocation />
                &nbsp; Belgrade, Serbia
              </p>
            </div>
            <div className="contact-div__form">
              <form onSubmit={submitData}>
=======
              <a href="/" className="flex">
                <IconPhone /> &nbsp; +9173511 83413
              </a>
              <a href="/" className="flex">
                <IconMail /> &nbsp; anshacabservice@gmail.com
              </a>
              <a href="/" className="flex">
                <IconLocation />
                &nbsp; Dehradun, Utrakhand
              </a>

            </div>
            <div className="contact-div__form ">
              <form className=""> 
>>>>>>> 17904cc88cb210cc72428e3cdf1364e33f948597
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  placeholder="Write message here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button type="submit" className="flex ">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+91 73511 83413</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
