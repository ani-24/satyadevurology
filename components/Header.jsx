import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="header__top__left">
            <div className="header__top__left__box">
              <i class="fa-solid fa-clock"></i> <span>Open 24 &times; 7</span>
            </div>
            <div className="header__top__left__box">
              <i class="fa-solid fa-envelope"></i>{" "}
              <Link href="mailto:drrajeshranjan447@gmail.com">
                drrajeshranjan447@gmail.com
              </Link>
            </div>
            <div className="header__top__left__box">
              <i class="fa-solid fa-location-dot"></i>{" "}
              <Link href="https://maps.google.com/maps?ll=25.612901,85.0795&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=11279533622444542325">
                Magistrate colony, Patna - 800025
              </Link>
            </div>
          </div>
          <div className="header__top__right">
            <Link href="#">
              <a className="header__top__right__box">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </Link>
            <Link href="#">
              <a className="header__top__right__box">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </Link>
            <Link href="#">
              <a className="header__top__right__box">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </Link>
            <Link href="#">
              <a className="header__top__right__box">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <ul className="header__bottom__list">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/best-urologist-in-patna">
                <a>Dr. Rajesh Ranjan</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div>
                  Services <i class="fa-solid fa-caret-down"></i>
                  <ul>
                    <Link href="/bladder-stone">
                      <a>Bladder Stone</a>
                    </Link>
                  </ul>
                </div>
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <i class="fa-solid fa-list-ul"></i> <span>Menu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
