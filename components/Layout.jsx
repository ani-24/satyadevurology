import Head from "next/head";

import Router from "next/router";
import nProgress from "nprogress";
import Footer from "./Footer";
import Wame from "./Wame";
import JumpToTop from "./JumpToTop";

const Layout = ({ children, services }) => {
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <meta
          name="keywords"
          content="Best Urologist in Patna, Urologist in Patna, best urology doctor in Patna, Best Nephrologist in Patna, urinary tract infection, urinary incontinence, Best Kidney Cancer Surgeon in Patna, Kidney Cancer Surgeon in Patna, Best URS Surgeon in Patna Bihar, best ureteric stone surgeon in patna bihar, Best Laproscopic Pyeloplasty Surgeon in Patna, Best Laproscopic Kidney Surgeon in Patna, Kidney Stone Surgery in Patna, Kidney Stone Clinic in Patna, Kidney Stone Surgeon in Patna,Best kidney stone treatment in patna,Best Kidney Hospital in Patna, laparoscopic cholecystectomy in patna, Kidney Stone Specialist in Patna, Uro Oncology in Patna, Best urinary bladder Stone surgeon in Patna Bihar, Best PCNL Surgeon in Patna,Bihar, Laparoscopic Stone Surgery in Patna, TOP UROLOGY HOSPITAL IN PATNA, Best Laparoscopic urinary bladder Surgeon in Patna Bihar , Best Prostate Surgeon in Patna, Kidney Treatment in Patna, Best Kidney Doctor in Patna, Best Urologist in Bihar, Best Bladder Cancer Surgeon in Patna, Dialysis in Patna, Urology Clinic in Patna, Nephrology in Patna, Kidney Transplant in Patna, Top kidney specialist doctor in Patna, Best Urologist in Ashiana Nagar, Best Urologist in Patliputra, UROLOGIST IN PATNA, best cystoscopy Surgeon in Patna Bihar, Best urethroplasty Surgeon in Patna Bihar, TOP 10 DOCTORS IN PATNA, TOP 3 UROLOGIST IN PATNA, TOP UROLOGIST IN PATNA, Kidney Failure Treatment in Patna, Urinary Tract Infection Treatment Doctors, Urologist Doctors near me, Hydrocele Doctors near me, Urethral Stricture Surgeons near me, Prostate Gland Surgery Doctors near me, Hypospadias Surgeon Doctors near me, Reconstructive Urology Surgeons near me, Arteriovenous Fistula Doctors near me, Laparoscopic Urology Surgeons near me, Genito Urinary Surgeon Doctors near me"
        />
        <meta
          name="description"
          content="Best urologist in Patna, Dr. Kumar Rajesh Ranjan is an experienced urology doctor in Patna at Satyadev Super Speciality Hospital who has treated chronic urology and kidney-related diseases."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {children}
      <Footer />
      <Wame />
      <JumpToTop />
    </>
  );
};

export default Layout;
