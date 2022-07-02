import React from "react";
import Header from "../components/Header";

import { client, urlFor } from "../lib/client";

import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const Gallery = ({ gallery, services, specialities }) => {
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };
  const data = [];
  gallery[0].images.forEach((el) => {
    data.push({ image: urlFor(el.asset._ref) });
  });
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <div className="image-gallery">
          {gallery[0].images.map((el, index) => {
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
          <LightBox
            state={toggle}
            event={lightBoxHandler}
            data={data}
            imageWidth="60vw"
            imageHeight="70vh"
            thumbnailHeight={50}
            thumbnailWidth={50}
            setImageIndex={setSIndex}
            imageIndex={sIndex}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

export const getServerSideProps = async ({ params }) => {
  const gallery = await client.fetch(`*[_type=="gallery"]`);
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      gallery,
      services,
      specialities,
    },
  };
};
