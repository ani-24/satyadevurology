import Header from "../../components/Header";
import { client, urlFor } from "../../lib/client";

import PortableText from "@sanity/block-content-to-react";

const Service = ({ service, services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container service">
        <h1 className="title">{service.title}</h1>
        <div className="img-container">
          <img src={urlFor(service.image)} className="img" />
        </div>
        <PortableText className="description" blocks={service.description} />
      </div>
    </>
  );
};

export default Service;

export const getServerSideProps = async ({ params }) => {
  const service = await client.fetch(
    `*[_type == "services" && slug.current == "${params.service}"][0]`
  );
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      service,
      services,
      specialities,
    },
  };
};
