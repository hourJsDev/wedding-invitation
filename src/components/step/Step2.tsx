import { MapPin } from "lucide-react";
import decorLine from "../../assets/decor-line.png";
import waiting from "../../assets/waiting.png";
import Image from "../image/Image";
const Step2 = () => {
  return (
    <div
      className="h-[100dvh] pb-[20px] px-[20px]  relative flex flex-col items-center mx-auto max-w-[1200px]"
      //   style={{ background: `url("https://i.pinimg.com/736x/b1/a7/8e/b1a78e93b7116d049ff53dd986db57a2.jpg")`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div
        data-aos="fade-up"
        className=" rounded-[20px] overflow-y-auto bg-transparent backdrop:blur-lg flex-col w-full "
      >
        <div className="overflow-y-auto  items-center flex flex-col">
          <div
            className="h-[80dvh] main2 rounded-[20px] rounded-b-none overflow-hidden mt-[20px] relative py-[20px] justify-between items-center flex flex-col w-full"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%] pointer-events-none"></div>
            <div className="w-[95%] rounded-[20px]  absolute h-[95%] pointer-event-none border border-[#fad6a5] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-2xl sm:text-3xl mt-[30px] md:text-4xl whitespace-nowrap font-moulpali text-gold-light  leading-relaxed"
            >
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </p>
            <div className="flex flex-col items-center">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-[20px] text-gold-light font-rossetti italic mb-2 "
              >
                The Wedding Day
              </p>
              <div className="flex items-center">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-2xl z-10 sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  Kairi
                </p>
                <div data-aos="fade-up" data-aos-delay="200" id="heart"></div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-2xl sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  Sze
                </p>
              </div>
            </div>
            <div className="flex flex-col z-10 gap-[5px] items-center space-y-2">
              <p className="text-[12px] text-gold-light font-medium tracking-[0.2em] mb-1">
                SAVE THE DATE
              </p>
              <h3 className="text-[14px] text-white font-nokora drop-shadow-lg">
                ថ្ងៃចន្ទ ទី១៩ ខែមករា ឆ្នាំ២០២៦
              </h3>
              <p className="text-[14px] text-white font-nokora drop-shadow-md">
                ម៉ោង ០២ : ០០ ល្ងាច
              </p>
              <p className="text-[14px] text-white/80 font-serif">
                19 . 01 . 2026 | 2:00 PM
              </p>
              <div
                className="flex flex-col text-center
               items-center gap-[5px]"
              >
                <MapPin size={25} className="text-[#fad6a5] " />
                <p className="w-[80%] text-[14px] text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odio, rerum?
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px] h-[100dvh] flex flex-col  text-center">
            <div>យើងមានកិត្តិយសសូមគោរពអញ្ជើញ</div>
            <div className="w-[150px] mt-[10px] mx-auto">
              <Image src={decorLine} className="" />
            </div>
            <p className="text-center mt-[20px] text-[14px]">
              ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
              អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
              ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍
              របស់យើងខ្ញុំទាំងពីរ។
            </p>
            <div className="relative flex justify-center z-10 mt-[50px]">
              <div data-aos="fade-up">
                <Image src={waiting} className="w-[350px]" />
              </div>
              <p
                data-aos="fade-up"
                className="text-[#ce8c30] whitespace-nowrap text-[18px] absolute left-1/2 top-[40%] -translate-x-[50%]"
              >
                យើងខ្ញុំកំពុងរងចាំថ្ងៃពិសេស
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
