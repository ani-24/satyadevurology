import React, { useState } from "react";
import Link from "next/link";

const Header = ({ services, specialities }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header__top container">
          <ul className="header__top__left">
            <li className="header__top__left__box">
              <i className="fa-regular fa-clock"></i>{" "}
              <span>Open 24&times;7</span>
            </li>
            <li className="header__top__left__box">
              <i className="fa-regular fa-envelope"></i>{" "}
              <span>drrajeshranjan447@gmail.com</span>
            </li>
            <li className="header__top__left__box">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <span>Magistrate colony, Patna - 800025</span>
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
        <div className="header__bottom container">
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
              <Link href="/">Facilities</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/">Our Doctors</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/">Gallery</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/">Blog</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/">Press Release</Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/">Contact us</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setVisibility(true)}>
            <i className="fa-solid fa-ellipsis-vertical"></i> Menu
          </div>
        </div>
      </div>
      <div
        className={`overlay ${visibility ? "show" : "hide"}`}
        onClick={() => setVisibility(false)}
      ></div>
      <ul className={`sidenav ${visibility ? "show" : "hide"}`}>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Home</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>About us</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Dr. Rajesh Ranjan</a>
        </Link>
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
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Facilities</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Doctor List</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Gallery</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Blog</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Press Release</a>
        </Link>
        <Link href="/">
          <a onClick={() => setVisibility(false)}>Contact us</a>
        </Link>
      </ul>
    </>
  );
};

export default Header;
