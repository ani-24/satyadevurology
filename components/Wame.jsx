import Link from "next/link";
import Image from "next/image";

const Wame = () => {
  return (
    <>
      <Link
        href="https://wa.me/+918050295197?text=Hello,%20I%20visited%20your%20website%20and%20I%20wanted%20to%20do%20enquiry"
        target="_blank"
      >
        <div className="wame">
          <Image
            height={64}
            width={64}
            layout="intrinsic"
            src="/whatsapp-logo.svg"
            alt="Whatsapp us"
          />
        </div>
      </Link>
    </>
  );
};

export default Wame;
