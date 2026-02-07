import Image from "../image/Image";
import NameCard from "../../assets/name-frame.png";
import { MailOpen } from "lucide-react";
import Bubble from "../Bubble";
const Step1 = ({ setStep }: { setStep: (value: number) => void }) => {
  return (
    <div
      className="h-[100dvh] main1 relative flex flex-col items-center  mx-auto sm:w-full  max-w-[1200px]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.4)_0%,rgba(23,23,23,0.3)_70%,rgba(23,23,23,0.7)_100%)] pointer-events-none"></div>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 text-[22px] mt-[200px]"
      >
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 text-[22px] mt-[30px]"
      >
        ព្រុំ​ សុផេង​ & សាន មុន្នីវណ្ណ
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 text-[14px] mt-[30px]"
      >
        សូមគោរពអញ្ជើញ
      </p>
      <div className="relative z-10 mt-[70px] mb-[50px]">
        <div data-aos="fade-up" data-aos-delay="800">
          <Image src={NameCard} className="w-[450px]" />
        </div>
        <p
          data-aos-offset="300"
          data-aos="fade-right"
          data-aos-delay="1400"
          className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-[18px] absolute left-1/2 top-[40%] -translate-x-[50%]"
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
        <MailOpen className="-mt-[7px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">បើកធៀប</span>
      </button>
      <Bubble />
    </div>
  );
};

export default Step1;
