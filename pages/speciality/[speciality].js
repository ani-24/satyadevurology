import React from "react";
import Header from "../../components/Header";
import { client, urlFor } from "../../lib/client";

import PortableText from "@sanity/block-content-to-react";

const Speciality = ({ speciality, services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="speciality">
        <h1 className="title">{speciality.title}</h1>
        <PortableText blocks={speciality.description} className="description" />
      </div>
    </>
  );
};

export default Speciality;

export const getServerSideProps = async ({ params }) => {
  const speciality = await client.fetch(
    `*[_type == "specialities" && slug.current == "${params.speciality}"][0]`
  );
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      speciality,
      services,
      specialities,
    },
  };
};
