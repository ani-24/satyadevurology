import Link from "next/link";
import Image from "next/image";

const Wame = () => {
  return (
    <>
      <Link
        href="https://wa.me/+918050295197?text=I%20came%20to%20know%20about%20this%20Hospital%20through%20your%20website,%20I%20need%20some%20more%20information..."
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
