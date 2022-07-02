import Link from "next/link";
import { client, urlFor } from "../lib/client";

import Header from "../components/Header";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="text">
          <h1 className="title">SatyaDev Super Speciality Hospital</h1>
          <p className="subtitle">Kidney & Stone Clinic</p>
          <Link href="/">
            <a className="btn box-shadow">Contact us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const EmergencyNum = () => {
  return (
    <div className="container">
      <div className="emergency-section container box-shadow">
        <i className="fa-solid fa-triangle-exclamation icon"></i>
        <p className="text">
          For emergency Cases: <u>(+91)-6207909132</u>
        </p>
      </div>
    </div>
  );
};

const Services = ({ services }) => {
  return (
    <section className="section container">
      <h1 className="section__title">Services We Offer</h1>
      <div className="gallery">
        {services.map((el, index) => {
          return (
            <div className="card service-card" key={index}>
              <div className="service-card__img">
                <img src={urlFor(el.icon.asset._ref)} alt={el.title} />
              </div>
              <h3 className="service-card__title">{el.title}</h3>
              <p className="service-card__description">{el.introduction}</p>
              <Link href={`/service/${el.slug.current}`}>
                <a className="service-card__btn box-shadow">Read more</a>
              </Link>
              <div className="background box-shadow"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Blogs = ({ blogs }) => {
  return (
    <section className="section container">
      <h1 className="section__title">Our Blog</h1>
      <div className="gallery blog">
        {blogs.map((el, index) => {
          if (index < 4) {
            return (
              <Link href={`/blog/${el.slug?.current}`}>
                <div className="card blog-card box-shadow" key={index}>
                  <div className="blog-card__img">
                    <img src={urlFor(el.image.asset._ref)} alt={el.title} />
                  </div>
                  <h1 className="blog-card__title">{el.title}</h1>
                  <div className="blog-card__footer">
                    <span className="blog-card__footer__author">
                      {el.author}
                    </span>
                    <span className="blog-card__footer__date">
                      {new Date(el.date).toLocaleDateString("en-gb", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="btn--view-all">
        <Link href="/blogs">
          <a className="btn box-shadow">View all &rarr;</a>
        </Link>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section className="section container events">
      <h1 className="section__title">Events</h1>
      <p>
        Dr Rajesh Ranjan, an eminent urologist from Bihar has been conferred
        with the award of BEST UROLOGIST OF THE YEAR - BIHAR by ASIAN HEALTH
        CARE SUMMIT & AWARDS 2021 for his outstanding contribution in the field
        of Advanced Laparoscopic Surgery from ASIA TODAY REARCH & MEDIA . This
        event was organized at National level at Hotel Shangrilas New Delhi. Jai
        Hind, Jai Bihar.
      </p>
      <div className="events__gallery">
        <div className="img-container">
          <img src="event1.png" />
        </div>
        <div className="img-container">
          <img src="event2.png" />
        </div>
        <div className="img-container">
          <img src="event3.png" />
        </div>
        <div className="img-container">
          <img src="event4.png" />
        </div>
        <div className="img-container">
          <img src="event5.png" />
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ testimonial }) => {
  return (
    <section className="section container">
      <h1 className="section__title">Don't just take our words</h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination]}
        className="testimonial box-shadow"
      >
        {testimonial.map((feedback, index) => {
          return (
            <SwiperSlide key={index}>
              <p className="testimonial-text">{feedback.feedback}</p>
              <h3 className="author">{feedback.person}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.5193457626665!2d85.0795!3d25.612901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c88f4116de1c975!2sDr%20Rajesh%20Ranjan%2CUrologist%2CSatyadev%20Superspeciality%20Hospital%2Ckidney%2Cstone%2Cadvance%20laparoscopy%20and%20urology%20hospital!5e0!3m2!1sen!2sin!4v1656523206275!5m2!1sen!2sin"
      className="map"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default function Home({ services, specialities, blogs, testimonial }) {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <HeroSection />
      <EmergencyNum />
      <Services services={services} />
      <Blogs blogs={blogs} />
      <Events />
      <Testimonial testimonial={testimonial} />
      <Map />
    </>
  );
}

export async function getServerSideProps() {
  const services = await client.fetch(`*[_type == "services"]`);
  const specialities = await client.fetch(`*[_type == "specialities"]`);
  const blogs = await client.fetch(`*[_type == "blogs"]`);
  const testimonial = await client.fetch(`*[_type == "testimonial"]`);
  return {
    props: {
      services,
      specialities,
      blogs,
      testimonial,
    },
  };
}
