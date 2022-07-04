import Header from "../components/Header";

import { client } from "../lib/client";

import emailjs from "emailjs-com";

const Contact = ({ services, specialities }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y0aaqth",
        "template_xnzsxjn",
        e.target,
        "_mwu7W44_eSioJwfN"
      )
      .then(
        (result) => {
          setUserData(
            (e.target.name = ""),
            (e.target.email = ""),
            (e.target.mobile = ""),
            (e.target.message = "")
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header services={services} specialities={specialities} />
      <section className="section section--contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.5193457626665!2d85.0795!3d25.612901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c88f4116de1c975!2sDr%20Rajesh%20Ranjan%2CUrologist%2CSatyadev%20Superspeciality%20Hospital%2Ckidney%2Cstone%2Cadvance%20laparoscopy%20and%20urology%20hospital!5e0!3m2!1sen!2sin!4v1656523206275!5m2!1sen!2sin"
          className="map"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container">
          <div className="contact-form">
            <form action="#" onSubmit={handleSubmit}>
              <div className="input-field">
                <input type="text" className="input" required name="name" />
                <label className="label">Name</label>
              </div>
              <div className="input-field">
                <input type="email" className="input" required name="email" />
                <label className="label">Email</label>
              </div>
              <div className="input-field">
                <input type="mobile" className="input" required name="mobile" />
                <label className="label">Mobile</label>
              </div>
              <div className="input-field textarea">
                <textarea className="input" required name="message"></textarea>
                <label className="label">Message</label>
              </div>
              <button type="submit" className="btn-submit box-shadow">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

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
