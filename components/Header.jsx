import React, { useState } from "react";
import Link from "next/link";

const Header = ({ services, specialities }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      {/* <div className="header"> */}
      <div className="header__top">
        <div className="container">
          <ul className="header__top__left">
            <li className="header__top__left__box">
              <i className="fa-regular fa-clock"></i>{" "}
              <span>Open 24&times;7</span>
            </li>
            <li className="header__top__left__box">
              <i className="fa-regular fa-envelope"></i>{" "}
              <a href="mailto:drrajeshranjan447@gmail.com">
                drrajeshranjan447@gmail.com
              </a>
            </li>
            <li className="header__top__left__box">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <Link
                target="_blank"
                href="https://maps.google.com/maps?ll=25.612901,85.0795&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=11279533622444542325"
              >
                Magistrate colony, Patna - 800025
              </Link>
            </li>
          </ul>
          <ul className="header__top__right">
            <a href="#" className="header__top__right__box">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="header__top__right__box">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="header__top__right__box">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="header__top__right__box">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <ul className="header__bottom__list">
            <li className="header__bottom__list__item">
              <Link href="/">
                <a href="#">Home</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/about-us">
                <a href="#">About us</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/best-urologist-in-patna">
                <a href="#">Dr. Rajesh Ranjan</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <a href="#">
                Services <i className="fa-solid fa-caret-down"></i>
                <ul>
                  {services.map((el, idx) => {
                    return (
                      <Link href={`/service/${el.slug.current}`} key={idx}>
                        <li key={idx}>
                          <a onClick={() => setVisibility(false)}>{el.title}</a>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </a>
            </li>
            <li className="header__bottom__list__item">
              <a href="#">
                Spcialities <i className="fa-solid fa-caret-down"></i>
                <ul>
                  {specialities.map((el, idx) => {
                    return (
                      <Link href={`/speciality/${el.slug.current}`} key={idx}>
                        <li key={idx}>
                          <a onClick={() => setVisibility(false)}>{el.name}</a>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </a>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/facilities">Facilities</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/doctors-list">Our Doctors</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/press-release">Press Release</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setVisibility(true)}>
            <i className="fa-solid fa-ellipsis-vertical"></i> Menu
          </div>
        </div>
      </div>
      {/* </div> */}
      <div
        className={`overlay ${visibility ? "show" : "hide"}`}
        onClick={() => setVisibility(false)}
      ></div>
      <ul className={`sidenav ${visibility ? "show" : "hide"}`}>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Home</a>
        </Link>
        <Link href="/about-us">
          <a onClick={() => setVisibility(false)}>About us</a>
        </Link>
        <Link href="/best-urologist-in-patna">
          <a onClick={() => setVisibility(false)}>Dr. Rajesh Ranjan</a>
        </Link>
        <a
          href="#"
          data-target="services-list"
          onClick={(e) => {
            document
              .querySelector(".specialities-list")
              .classList.remove("active");
            document.querySelector(".services-list").classList.toggle("active");
          }}
        >
          Services <i className="fa-solid fa-caret-down"></i>
          <ul className="services-list">
            {services.map((el, idx) => {
              return (
                <Link href={`/service/${el.slug.current}`} key={idx}>
                  <li key={idx}>
                    <a onClick={() => setVisibility(false)}>{el.title}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </a>
        <a
          href="#"
          data-target="specialities-list"
          onClick={(e) => {
            document.querySelector(".services-list").classList.remove("active");
            document
              .querySelector(".specialities-list")
              .classList.toggle("active");
          }}
        >
          Spcialities <i className="fa-solid fa-caret-down"></i>
          <ul className="specialities-list">
            {specialities.map((el, idx) => {
              return (
                <Link href={`/speciality/${el.slug.current}`} key={idx}>
                  <li key={idx}>
                    <a onClick={() => setVisibility(false)}>{el.name}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </a>
        <Link href="/facilities">
          <a onClick={() => setVisibility(false)}>Facilities</a>
        </Link>
        <Link href="/doctors-list">
          <a onClick={() => setVisibility(false)}>List of Doctors</a>
        </Link>
        <Link href="/gallery">
          <a onClick={() => setVisibility(false)}>Gallery</a>
        </Link>
        <Link href="/blogs">
          <a onClick={() => setVisibility(false)}>Blog</a>
        </Link>
        <Link href="/press-release">
          <a onClick={() => setVisibility(false)}>Press Release</a>
        </Link>
        <Link href="/contact-us">
          <a onClick={() => setVisibility(false)}>Contact us</a>
        </Link>
      </ul>
    </>
  );
};

export default Header;
