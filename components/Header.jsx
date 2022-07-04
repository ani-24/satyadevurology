import React, { useState } from "react";
import Link from "next/link";

const Header = ({ services, specialities }) => {
  const [visibility, setVisibility] = useState(false);
  const [servicesList, setServicesList] = useState(false);
  const [specialitiesList, setSpecialitiesList] = useState(false);
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="header__top__left">
            <div className="header__top__left__box">
              <i className="fa-solid fa-clock"></i>{" "}
              <span>Open 24 &times; 7</span>
            </div>
            <div className="header__top__left__box">
              <i className="fa-solid fa-envelope"></i>{" "}
              <Link href="mailto:drrajeshranjan447@gmail.com">
                drrajeshranjan447@gmail.com
              </Link>
            </div>
            <div className="header__top__left__box">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <Link href="https://maps.google.com/maps?ll=25.612901,85.0795&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=11279533622444542325">
                Magistrate colony, Patna - 800025
              </Link>
            </div>
          </div>
          <div className="header__top__right">
            <Link href="https://www.facebook.com/DrRajeshRanjanUrologistinPatna/">
              <a className="header__top__right__box">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UChjSdAvs6jSKTn9-9JaWjhQ">
              <a className="header__top__right__box">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </Link>
            <Link href="https://twitter.com/RajeshUrologist?s=08">
              <a className="header__top__right__box">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </Link>
            <Link href="https://www.instagram.com/drrajeshurologistpatna/?hl=en">
              <a className="header__top__right__box">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <ul className="header__bottom__list">
            <li className="header__bottom__list__item">
              <Link href="/">
                <a className="header__bottom__list__item__link">Home</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/about-us">
                <a className="header__bottom__list__item__link">About us</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/best-urologist-in-patna">
                <a className="header__bottom__list__item__link">
                  Dr. Rajesh Ranjan
                </a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <div className="header__bottom__list__item__link">
                Services <i className="fa-solid fa-caret-down"></i>
                <ul>
                  {services.map((el) => (
                    <Link href={`/service/${el.slug.current}`} key={el._key}>
                      <li>
                        <a>{el.title}</a>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            <li className="header__bottom__list__item">
              <div className="header__bottom__list__item__link">
                Services <i className="fa-solid fa-caret-down"></i>
                <ul>
                  {specialities.map((el) => (
                    <Link href={`/speciality/${el.slug.current}`} key={el._key}>
                      <li>
                        <a>{el.name}</a>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/facilities">
                <a className="header__bottom__list__item__link">Facilities</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/doctors-list">
                <a className="header__bottom__list__item__link">Our Doctors</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/gallery">
                <a className="header__bottom__list__item__link">Gallery</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/blogs">
                <a className="header__bottom__list__item__link">Blogs</a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/press-release">
                <a className="header__bottom__list__item__link">
                  Press Release
                </a>
              </Link>
            </li>
            <li className="header__bottom__list__item">
              <Link href="/contact-us">
                <a className="header__bottom__list__item__link">Contact us</a>
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setVisibility(true)}>
            <i className="fa-solid fa-list-ul"></i> <span>Menu</span>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${visibility ? "" : "hide"}`}
        onClick={() => setVisibility(false)}
      ></div>
      <div className={`sidenav ${visibility ? "" : "hide"}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about-us">
          <a>About us</a>
        </Link>
        <Link href="/best-urologist-in-patna">
          <a>Dr. Rajesh Ranjan</a>
        </Link>
        <div
          className="sidenav__item"
          onClick={() => {
            setServicesList(!servicesList);
            !servicesList ? setSpecialitiesList(false) : null;
          }}
        >
          Services <i className="fa-solid fa-caret-down"></i>
          <ul className={servicesList ? "active" : ""}>
            {services.map((el, index) => (
              <Link href={`/service/${el.slug.current}`} key={el._key}>
                <li>
                  <a>{el.title}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="sidenav__item"
          onClick={() => {
            setSpecialitiesList(!specialitiesList);
            !specialitiesList ? setServicesList(false) : null;
          }}
        >
          Specialities <i className="fa-solid fa-caret-down"></i>
          <ul className={specialitiesList ? "active" : ""}>
            {specialities.map((el, index) => (
              <Link href={`/service/${el.slug.current}`} key={el._key}>
                <li>
                  <a>{el.name}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Link href="/facilities">Facilities</Link>
        <Link href="/doctors-list">Our Doctors</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/press-release">Press Release</Link>
        <Link href="/contact-us">Contact us</Link>
      </div>
    </>
  );
};

export default Header;
