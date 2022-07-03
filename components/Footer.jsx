import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__grid">
        <div className="footer__grid__item footer__grid__item--about">
          <div className="img-container">
            <img src="../sataydev-logo2.png" alt="" />
          </div>
          <p>
            Welcome to Satyadev Urology , most recommended urology hospital in
            Patna. The hospital is led by Dr. Kumar rajesh ranjan (senior
            urologist in Patna) who ensures that every patient get better
            treatment at affordable fee
          </p>
        </div>
        <div className="footer__grid__item footer__grid__item--links">
          <h2 className="footer__grid__item__title">Quick Links</h2>
          <ul>
            <li>
              <Link href="/about-us">
                <a>
                  {" "}
                  <i className="fa-solid fa-paperclip"></i> About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>
                  {" "}
                  <i className="fa-solid fa-paperclip"></i> Gallery
                </a>
              </Link>
            </li>
            <li>
              <Link href="/press-release">
                <a>
                  <i className="fa-solid fa-paperclip"></i> Press Release
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>
                  <i className="fa-solid fa-paperclip"></i> Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a>
                  {" "}
                  <i className="fa-solid fa-paperclip"></i> Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>
                  {" "}
                  <i className="fa-solid fa-paperclip"></i> Blogs
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__grid__item footer__grid__item--contact">
          <h2 className="footer__grid__item__title">Get in Touch</h2>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i> +91 8235152796, 6207909132
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>{" "}
              drrajeshranjan447@gmail.com
            </li>
            <li>
              <i className="fa-brands fa-whatsapp"></i> 80502 95197
            </li>
          </ul>
        </div>
        <div className="footer__grid__item footer__grid__item--address">
          <h2 className="footer__grid__item__title">Address</h2>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i> Magistrate Colony
              Main Rd, Magistrate Colony, Khajpura, Patna, Bihar 800025
            </li>
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14391.038691525333!2d85.0795!3d25.612901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c88f4116de1c975!2sDr%20Rajesh%20Ranjan%2CUrologist%2CSatyadev%20Superspeciality%20Hospital%2Ckidney%2Cstone%2Cadvance%20laparoscopy%20and%20urology%20hospital!5e0!3m2!1sen!2sin!4v1656561799408!5m2!1sen!2sin"
                className="map"
                style={{ border: 0, height: "200px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
          </ul>
        </div>
        <div className="footer__grid__item footer__grid__item--social">
          <h2 className="footer__grid__item__title">Follow us</h2>

          <ul>
            <li>
              <Link href="https://www.facebook.com/DrRajeshRanjanUrologistinPatna/">
                <a>
                  <i className="fa-brands fa-facebook social"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UChjSdAvs6jSKTn9-9JaWjhQ">
                <a>
                  <i className="fa-brands fa-youtube social"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/RajeshUrologist?s=08">
                <a>
                  <i className="fa-brands fa-twitter social"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/drrajeshurologistpatna/?hl=en">
                <a>
                  <i className="fa-brands fa-instagram social"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © Copyright 2022 satyadevhospital. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
