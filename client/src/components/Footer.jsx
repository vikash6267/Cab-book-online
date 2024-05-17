import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Ansh</span> Cab Service
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:917351183413" className=" flex ">
                  <IconPhoneCall /> &nbsp; +917351183413
                </a>
              </li>

              <li>
                <a className=" flex gap-4 ">
                  <IconMail />
                  anshacabservice@gmail.com &nbsp;
                </a>
              </li>
              <li>
                <a className=" flex gap-4 ">
                  <FaLocationDot size={20} />
                  <span className="text-xl font-bold">
                    77 Shakti vihar face 1 Maajre near by onix hotel
                  </span>
                </a>
              </li>
              {/* 
              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Design by INext 
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li className=" text-orange-400">Company</li>
              <li>
                <a href="#home">Dehradun Utrakhand </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/admin/login">Admin Protected</a>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li className=" font-bold">24 X 7</li>
              {/* <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
