import React from "react";
import Header from "./../components/Header";

import { client } from "../lib/client";

import Link from "next/link";

const AboutUs = ({ services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <section className="section about-us">
          <h1 className="section__title">Who are we?</h1>
          <div className="body">
            <p>
              Welcome to Satyadev Urology , a Kidney Stone and Laparoscopy
              Hospital in Patna Satyadev Urology , a Kidney Stone and
              Laparoscopy Hospital in Patna was established in 2017 by Dr Kumar
              Rajesh Ranjan is M.B.B.S. , M.S. (General Surgery) ,M. Ch
              (Urology) ,FMAS, Ex Fellow Advanced Laparoscopic Urology Surgery
              and kidney transplant (Urocare, Kochi and Aesculap Academy,
              Germany)Ex-Registrar: Dept. of Urology NDMC Medical College, Hindu
              Rao Hospital, Delhi.Dr Rajesh Ranjan is one of the best Urologist,
              Laparoscopic and kidney Transplant Surgeon in Patna.
            </p>
            <p>
              Advance Urology surgery ,Advanced Laparoscopic Surgical Procedure
              , Laparoscopic Nephrectomy, Laparoscopic Pyeloplasty, Laparoscopic
              kidney cancer surgery and Chronic kidney diseases .We have
              Performed 1000 + PCNL, MINIPCNL, RIRS, URS,.TURP. We are Pioneer
              of Advanced Laparoscopic Renal surgery and HOLEP in Patna, Bihar.
            </p>
            <p>
              Satyadev Urology Hospital is equipped with advanced camera for
              laparoscopy,C-arm,Laser machine for advanced urological
              procedures.Hospital is equipped with post -operative ICU. The
              Service of the Satyadev Urology clinic are offered to the
              patients, irrespective of their age. The staff of the hospital
              includes a team of highly trained and experienced staff who takes
              care of every aspect of the patient's treatment including overall
              hygiene, individualized care, treatment planning, specialized and
              better patient care. All the technical aspects of the hospital are
              up to date and successful in performing all the advanced
              treatments and tests to the patients of the hospital. Not only
              this, the hospital is also known as one of the{" "}
              <Link href="/best-dailysis-center-in-patna">
                best dialysis center in Patna
              </Link>
              .
            </p>
            <strong>Common surgical facility:</strong>
            <ul style={{ marginLeft: "1em" }}>
              <li>PCNL For Kidney Stone</li>
              <li>URS For Ureteric Stone</li>
              <li>RIRS(Flexi)For Upper Ureteric And Renal Stone</li>
              <li>TURPFor Prostate</li>
              <li>HOLEP For Prostate</li>
              <li>Laparoscopic Nephrectomy</li>
              <li>Laparoscopic Radical Nephrectomy For Kidney Cancer</li>
              <li>Laparoscopic Pyeloplasty For PUJ Obstruction</li>
              <li>Laparoscopic VVF Repair</li>
              <li>Laparoscopic Orchiopexy</li>
              <li>Laparoscopic Partial Nephrectomy</li>
              <li>Laparoscopic Varicocele</li>
              <li>Laparoscopic Cholecystectomy</li>
              <li>Laparoscopic Hernia</li>
              <li>Hydrocele Surgery</li>
              <li>Circumcision</li>
            </ul>
          </div>
          <div className="about-us__gallery">
            <div className="about-us__card box-shadow">
              <div className="card__img">
                <img src="./dr-rajesh-ranjan.webp" />
              </div>
              <div className="card__body">
                <h3 className="card__body__title">Dr. Kumar Rajesh Ranjan</h3>
                <h5>(Managing Director)</h5>
              </div>
            </div>
            <div className="about-us__card box-shadow">
              <div className="card__img">
                <img src="./abhay-ranjan.webp" />
              </div>
              <div className="card__body">
                <h3 className="card__body__title">Abhay Ranjan</h3>
                <h5>(Director Administration)</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;

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
