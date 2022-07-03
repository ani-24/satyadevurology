import React from "react";
import Header from "../components/Header";

import { client, urlFor } from "./../lib/client";

const PressRelease = ({ pressRelease, services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <div className="image-gallery image-gallery--press-release">
          {pressRelease[0].images.map((el, index) => {
            return (
              <div className="image-gallery__item" key={index}>
                <div>
                  <img
                    loading="lazy"
                    src={urlFor(el.asset._ref)}
                    onClick={() => {
                      lightBoxHandler(true, index);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PressRelease;

export const getServerSideProps = async () => {
  const pressRelease = await client.fetch(`*[_type == "pressRelease"]`);
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      pressRelease,
      services,
      specialities,
    },
  };
};
