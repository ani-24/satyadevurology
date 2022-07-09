import Head from "next/head";
import Header from "../components/Header";
import { client } from "../lib/client";

const DoctorsList = ({ list, services, specialities }) => {
  list.sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0));

  return (
    <>
      <Head>
        <title>List of our Doctors : Satyadev Super speciality Hospital</title>
      </Head>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <section className="section section--about">
          <h1 className="section__title" style={{ textAlign: "start" }}>
            List of Our Doctors
          </h1>
          <ol className="doctors-list">
            {list.map((el, index) => {
              return <li key={index}>{el.name}</li>;
            })}
          </ol>
        </section>
      </div>
    </>
  );
};

export default DoctorsList;

export const getServerSideProps = async () => {
  const list = await client.fetch(`*[_type == "doctors"]`);
  const services = await client.fetch(`*[_type=="services"]`);
  const specialities = await client.fetch(`*[_type=="specialities"]`);
  return {
    props: {
      list,
      services,
      specialities,
    },
  };
};
