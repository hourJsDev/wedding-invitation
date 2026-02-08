import Image from "../image/Image";
import NameCard from "../../assets/name-frame.png";
import { MailOpen } from "lucide-react";
import Bubble from "../Bubble";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { base64Decode } from "../../utils/helper";
const Step1 = ({ setStep }: { setStep: (value: number) => void }) => {
  const [searchParams] = useSearchParams();
  const uuid = searchParams.get("uuid");
  const [guest, setGuest] = useState("");
  useEffect(() => {
    let id = uuid;
    if (uuid) {
      localStorage.setItem("uuid", uuid);
    } else {
      id = localStorage.getItem("uuid");
    }
    const selectedGuest = base64Decode(id || "");
    setGuest(selectedGuest);
  }, [uuid]);
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
      <div className="flex mt-[30px] flex-col items-center">
        <div className="flex z-20 mb-[10px] w-full relative gap-[90px] items-center">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm flex-1 z-10 sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            កូនកំលោះ
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm flex-1 text-right  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            ​កូន​ក្រមុំ
          </p>
        </div>
        <div className="flex w-full relative gap-[90px] items-center">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-md z-10  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            ព្រុំ​ សុផេង
          </p>
          <div className="absolute left-1/2 -translate-1/2 top-[0px]">
            <div data-aos="fade-up" data-aos-delay="200" id="heart"></div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-md whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            សាន មុន្នីវណ្ណ
          </p>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 text-md mt-[30px]"
      >
        សូមគោរពអញ្ជើញ
      </p>
      <div className="relative z-10 mt-[70px] mb-[50px]">
        <div data-aos="fade-up" data-aos-delay="800">
          <Image src={NameCard} className="w-[450px]" />
        </div>
        <p className="text-white whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-[14px] absolute left-1/2 top-[40%] -translate-x-[50%]">
          {guest}
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
