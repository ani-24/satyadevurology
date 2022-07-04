import Header from "../components/Header";

import { client } from "../lib/client";

const Faceilities = ({ services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <section className="section section--facility">
          <h1 className="section__title">Facilities we provide</h1>
          <div className="section--facility__grid">
            <div className="section--facility__grid__item box-shadow">
              <ul>
                <li>
                  <strong>Laser Surgery –</strong> A procedure owned by medical
                  practitioners to treat specific diseases through special light
                  beams instead of instruments.
                </li>
                <li>
                  <strong>Laparoscopic Surgery –</strong> A surgical process in
                  which surgeons insert narrow tubes into your abdomen through a
                  small incisions.
                </li>
                <li>
                  <strong>24/7 Medical Emergency Services –</strong> You will
                  get emergency services at all times as our team is available
                  to assist you.
                </li>
                <li>
                  <strong>24/7 ICU Services –</strong> ICU services are also
                  available to for patient at any time.
                </li>
                <li>
                  <strong>
                    Air-conditioned, Semi-private, and General Ward –
                  </strong>{" "}
                  Semi-private Hospital fully air-conditioned containing General
                  Ward.
                </li>
                <li>
                  <strong>Pathology and Computerised Pharmacy –</strong> Well
                  facilitated Pathology Centre and computerized Pharmacy.
                </li>
                <li>
                  <strong>Major and Minor Operation Theatre –</strong> Operation
                  theatres are available for major and minor operations.
                </li>
                <li>
                  <strong>Elevator facilities –</strong> Facilities for
                  elevators are available to help patients as well as their
                  companions.
                </li>
                <li>
                  <strong>Clinic departments –</strong> Different clinical
                  departments are available at our hospital.
                </li>
                <li>
                  <strong>Emergency and Trauma Care Unit –</strong> Specialists
                  are available to intensive care for high-risk injury patients.
                </li>
                <li>
                  <strong>Advanced Laparoscopic Surgery –</strong> Minimally
                  invasive surgery is owned by Surgeons.
                </li>
              </ul>
            </div>
            <div className="section--facility__grid__item box-shadow">
              <ul>
                <li>
                  <strong>X-Ray Facilities –</strong> Diagnosis of diseases with
                  the help of X-Ray.
                </li>
                <li>
                  <strong>Chest Medicine –</strong> Medicines related to any
                  chest problems.
                </li>
                <li>
                  <strong>Neurology –</strong> It also cares about neurological
                  disorders.
                </li>
                <li>
                  <strong>General Surgery –</strong> Every type of surgery is
                  performed by the available surgeon.
                </li>
                <li>
                  <strong>Plastic Surgery –</strong> The facilities of plastic
                  surgery are also available.
                </li>
                <li>
                  <strong>Nephrology and Urology –</strong> Departments of
                  nephrology and urology managed by the best Nephrologist and
                  Urologist.
                </li>
                <li>
                  <strong>Pediatrics –</strong> Proper medical care for infants,
                  children, and adolescents.
                </li>
                <li>
                  <strong>Gynecologist –</strong> Department of Gynaecology
                  available.
                </li>
                <li>
                  <strong>Physiotherapy –</strong> Medical treatment to maximize
                  and restore of physical strength of Patients.
                </li>
                <li>
                  <strong>Dietician –</strong> Treat diseases like malnutrition
                  and other severe diseases through nutrition therapy.
                </li>
                <li>
                  <strong>Dialysis –</strong> Treatment that helps kidneys in
                  purifying blood with the help of machines.
                </li>
                <li>
                  <strong>Urology –</strong> Treatment of surgical and medical
                  diseases of the urinary tract system and male reproductive
                  system.
                </li>
                <li>
                  <strong>ENT Diseases –</strong> Specialists of diseases
                  related to the ear, nose, and throat.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faceilities;

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
