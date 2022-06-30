import React from "react";
import Header from "../../components/Header";
import { client } from "../../lib/client";

import PortableText from "@sanity/block-content-to-react";

const Blog = ({ blog, services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="blog conatiner">
        <h1 className="title">{blog.title}</h1>
        <PortableText className="description" blocks={blog.description} />
      </div>
    </>
  );
};

export default Blog;

export const getServerSideProps = async ({ params }) => {
  const blog = await client.fetch(
    `*[_type == "blogs" && slug.current == "${params.blog}"][0]`
  );
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      blog,
      services,
      specialities,
    },
  };
};
