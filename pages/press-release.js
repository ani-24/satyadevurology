import { useState } from "react";
import Header from "../components/Header";

import { client, urlFor } from "./../lib/client";

import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";
import Head from "next/head";

const PressRelease = ({ pressRelease, services, specialities }) => {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };
  const data = [];
  pressRelease[0].images.forEach((el) => {
    data.push({ image: urlFor(el.asset._ref) });
  });
  return (
    <>
      <Head>
        <title>
          Contact us: Dr. Kumar Rajesh Ranjan : Best Urologist in Patna | Top
          Urology Doctor
        </title>
      </Head>
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
