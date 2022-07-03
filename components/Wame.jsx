import Link from "next/link";
import Image from "next/image";

const Wame = () => {
  return (
    <>
      <Link
        href="https://wa.me/+919334314161?text=Hello,%20I%20want%20to%20enquire%20for%20admission"
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
