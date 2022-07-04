import Link from "next/link";
import Header from "../components/Header";

import { client } from "../lib/client";

const BestUrologistInPatna = ({ services, specialities }) => {
  return (
    <>
      <Header services={services} specialities={specialities} />
      <div className="container">
        <section className="section section--about">
          <h1 className="section__title">
            Dr. Kumar Rajesh Ranjan : Best Urologist in Patna
          </h1>
          <div className="body">
            <p>
              Dr Kumar Rajesh Ranjan is M.B.B.S. , M.S. (General Surgery),M. Ch
              (Urology) ,FMAS, Ex Fellow Advanced Laparoscopic Urology Surgery
              and kidney transplant (Urocare, Kochi and Aesculap Academy,
              Germany) Ex-Registrar: Dept. of Urology NDMC Medical College,
              Hindu Rao Hospital, Delhi. Just because of his knowledge and
              experience, Dr. Kumar Rajesh Ranjan is counted among best
              urologist in Patna.
            </p>
            <p>
              Dr Kumar Rajesh Ranjan is senior consultant urologist having more
              than 15 + year of Experience and he is one of the best Urologist
              in Patna. Bihar. He is also well known in the list of top
              urologist in India.
            </p>
            <p>
              Dr.Ranjan has wide experience in the field of urology and renal
              transplant. He is one of the best kidney doctor in Patna, Bihar.
              He is Pioneer in the field Advanced kidney laparoscopy surgery in
              Bihar.
            </p>
            <p>
              As one of the{" "}
              <Link href="/best-urologist-in-patna">
                best Nephrologist in Patna
              </Link>{" "}
              he provide best diagnosis and treatment for kidney and renal
              related disorders. He has done maximum number of laparoscopic
              kidney surgery like laparoscopic nephrectomy, laparoscopic
              Pyeloplasty, Laparoscopic kidney cancer surgery in Patna, Bihar.
            </p>
            <p>
              He is also one of the{" "}
              <Link href="/service/kidney-stone">
                best kidney stone surgeon
              </Link>{" "}
              having performed more than 1000 PCNL,MINIPCNL,RIRS,URS,.TURP. His
              name is also known for best prostate surgeon, Pioneer of HOLEP in
              Bihar.
            </p>
            <p>
              Dr. Kumar Rajesh Ranjan is also senior Consultant in the
              department of Urology in Ruban Memorial Hospital, Patliputra, one
              of the best Multi specialty Hospital in Patna. He is giving
              consultancy in Ruban Hospital for more than 3.5 years . Now is
              also one of the best Kidney Doctor (Consultant) for the Hospitals
              in Patna for Second Opinion.
            </p>
            <p>
              Being one of reputed and best urologist in Patna, Dr. Kumar Rajesh
              Ranjan is also counted among best surgeon for treating diseases
              such as kidney cancer and prostate cancer, Urinary bladder cancer
              as well as Kidney failure. Just because of his vast experience and
              best treatment, he is also known as one of the best Nephrologist
              in Patna
            </p>
            <strong>Awards:</strong>
            <ul>
              <li>
                Dr Rajesh Ranjan is Awarded ICONS OF HEALTH BY TIMES GROUP 2020
                Devon travelling fellowship award
              </li>
              <li>
                Dr Rajesh Ranjan has presented his papers in national and state
                conferences
              </li>
              <li>
                His research papers isPublished in national and international
                journals.
              </li>
            </ul>
            <strong>Career Glimpse:</strong>
            <ul>
              <li>
                Worked as Fellow lap urology and Renal transplant in lakeshore
                and PVS Hospital Kochi,kerala after MCH
              </li>
              <li>
                Worked as Senior Residentfor 3 years in of Urology,Hindu Rao
                Hospital and NDMC medical college,Delhi
              </li>
              <li>Approx 5 yrs experience post MCH </li>
              <li>
                Have done More than 40 Renal Lap Donor independently and
                involved In more than 120 KIDNEY TRANSPLANT either independently
                or as first assistant
              </li>
              <li>
                Have done more than 500 Laparoscopy Urology cases Both Upper
                tract and lower tract other common urological procedure
              </li>
              <li>
                Working as senior consultant in Ruban memorial hospital &
                Satyadev super speciality hospital
              </li>
            </ul>
            <strong>Achievements:</strong>
            <ul>
              <li>Published 4 papers in Indexed Journal</li>
              <li>Presented 2 papers and one posterin</li>
              <li>Published 3 abstracts in indexed journal</li>
              <li>
                Declared WINNER of DEVON travel fellowship KUACON 2014 Bangaluru
              </li>
            </ul>
            <strong>Surgical Skills:</strong>
            <ul>
              <li>
                More than 500 lap UROLOGY CASES ,BOTH UPPER TRACT AND LOWER
                TRACT
              </li>
              <li>Endourology including RIRS and PCNL</li>
              <li>Urethroplasty</li>
              <li>Pediatric urology</li>
              <li>Urogynecology</li>
            </ul>
            <p>
              If you or your family member is suffering from chronic urology
              disease and looking for best Urologist in Patna, Dr. Kumar Rajesh
              Ranjan is the name you can trust.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BestUrologistInPatna;

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
