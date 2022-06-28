import Link from "next/link";
import { client } from "../lib/client";

import Header from "../components/Header";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="text">
          <h1 className="title">SatyaDev Super Speciality Hospital</h1>
          <p className="subtitle">Kidney & Stone Clinic</p>
          <Link href="/">
            <a className="btn">Contact us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home({ services, specialities }) {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <HeroSection />
    </>
  );
}

export async function getServerSideProps() {
  const services = await client.fetch(`*[_type == "services"]`);
  const specialities = await client.fetch(`*[_type == "specialities"]`);
  return {
    props: {
      services,
      specialities,
    },
  };
}
