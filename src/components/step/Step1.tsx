import Image from "../image/Image";
import NameCard from "../../assets/name-frame.png";
import { MailOpen } from "lucide-react";
import Bubble from "../Bubble";
const Step1 = ({ setStep }: { setStep: (value: number) => void }) => {
  return (
    <div
      className="h-[100dvh] main1 relative flex flex-col items-center mx-auto max-w-[1200px]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.4)_0%,rgba(23,23,23,0.3)_70%,rgba(23,23,23,0.7)_100%)] pointer-events-none"></div>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-white  z-10 text-[30px] mt-[200px]"
      >
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-white  z-10 text-[25px] mt-[30px]"
      >
        Karia & Sze
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-white  z-10 text-[20px] mt-[30px]"
      >
        សូមគោរពអញ្ជើញ
      </p>
      <div className="relative z-10 mt-[50px] mb-[50px]">
        <div data-aos="fade-up" data-aos-delay="800">
          <Image src={NameCard} className="w-[450px]" />
        </div>
        <p
          data-aos-offset="300"
          data-aos="fade-right"
          data-aos-delay="1400"
          className="text-white text-[18px] absolute left-1/2 top-[40%] -translate-x-[50%]"
        >
          ពេជ្រ លីហួរ
        </p>
      </div>
      <button
        onClick={() => setStep(2)}
        data-aos="fade-up"
        data-aos-delay="1000"
        className="relative flex items-center gap-[5px] px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 shadow-xl cursor-pointer group rounded-xl gold-gradient-bg"
      >
        <MailOpen className="-mt-[7px]" />
        <span>បើកធៀប</span>
      </button>
      <Bubble />
    </div>
  );
};

export default Step1;
