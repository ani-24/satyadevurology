import React from "react";
import Header from "../components/Header";

import { client, urlFor } from "../lib/client";

import Link from "next/link";

const Blogs = ({ blogs, services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <section className="container section" style={{ marginTop: "50px" }}>
        <h1 className="section__title">Our Blog</h1>
        <div className="gallery">
          {blogs.map((el, index) => {
            console.log(el.slug?.current);
            return (
              <Link href={`/blog/${el.slug?.current}`} key={index}>
                <div className="card blog-card box-shadow" key={index}>
                  <div className="blog-card__img">
                    <img src={urlFor(el.image.asset._ref)} alt={el.title} />
                  </div>
                  <h1 className="blog-card__title">{el.title}</h1>
                  <div className="blog-card__footer">
                    <span className="blog-card__footer__author">
                      {el.author}
                    </span>
                    <span className="blog-card__footer__date">{el.date}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;

export const getServerSideProps = async ({ params }) => {
  const blogs = await client.fetch(`*[_type=="blogs"]`);
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      blogs,
      services,
      specialities,
    },
  };
};
