import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer>
      <div className="collapsible-sections md:hidden block">
        <div className="section">
          <h2 onClick={() => toggleSection("shop")}>
            SHOP {openSection === "shop" ? <FiMinus /> : <FaPlus />}
          </h2>
          {openSection === "shop" && (
            <div className="content">
              <ul>
                <li>
                  <a href="#">TWS</a>
                </li>
                <li>
                  <a href="#">Smart Watches</a>
                </li>
                <li>
                  <a href="#">Neckband</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Smart TV</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Mobile Accessories</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="section">
          <h2 onClick={() => toggleSection("information")}>
            INFORMATION{" "}
            {openSection === "information" ? <FiMinus /> : <FaPlus />}
          </h2>
          {openSection === "information" && (
            <div className="content">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Warranty Registration</a>
                </li>
                <li>
                  <a href="#">Management</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="section">
          <h2 onClick={() => toggleSection("customerService")}>
            CUSTOMER SERVICE{" "}
            {openSection === "customerService" ? <FiMinus /> : <FaPlus />}
          </h2>
          {openSection === "customerService" && (
            <div className="content">
              <ul>
                <li>
                  <a href="#">Service Center</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <div className="footer-section md:block hidden ">
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="#">TWS</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">Neckband</a>
            </li>
            <li>
              <a href="#">Headphones</a>
            </li>
            <li>
              <a href="#">Smart TV</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Mobile Accessories</a>
            </li>
          </ul>
        </div>

        <div className="footer-section md:block hidden ">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Warranty Registration</a>
            </li>
            <li>
              <a href="#">Management</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section md:block hidden">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Service Center</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-section ml-5">
          <h4 className="mt-5 mb-0">Newsletter Sign Up</h4>
          <p>
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email address here" />
            <button type="submit">SUBMIT</button>
          </div>

          <div className="social-icons ">
            <a href="#">
              <BiLogoFacebook />
            </a>
            <a href="#">
              <BiLogoInstagramAlt />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <GrTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-bar container">
        <p>Copyright 2023 Cellecor All Rights Reserved</p>
        <div className="payment-methods">
          <img src="../../src/assets/visa.png" alt="Visa" />
          <img src="../../src/assets/mastercard.png" alt="Mastercard" />
          <img src="../../src/assets/paypal.png" alt="PayPal" />
          <img
            src="../../src/assets/american-express.png"
            alt="american express"
          />
          <img src="../../src/assets/apple-pay.png" alt="apply pay" />
          <img src="../../src/assets/google-pay.png" alt="google pay" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
