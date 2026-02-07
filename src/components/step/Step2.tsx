import { Calendar, MapPin } from "lucide-react";
import decorLine from "../../assets/decor-line.png";
import waiting from "../../assets/waiting.png";
import Image from "../image/Image";
import Countdown from "../time/Countdown";
import Gallery from "../image/Gallery";
const Step2 = () => {
  const event = {
    day1: [
      {
        date: "6:30",
        name: "ក្រុងពាលី",
      },
      {
        date: "7:30",
        name: "ហែរជំនូន",
      },
      {
        date: "8:30",
        name: "ពិសាអាហារពេលព្រឹក",
      },
      {
        date: "9:30",
        name: "ពិធីជូនផ្លែឈើ",
      },
      {
        date: "10:30",
        name: "កាត់សក់បង្កក់សេរី",
      },
      {
        date: "13:00",
        name: "ប្រាព្ធពិធីសូត្រមន្ត",
      },
      {
        date: "15:00",
        name: "កាត់ខាន់ស្លា",
      },
      {
        date: "16:30",
        name: "អញ្ជើញភ្ញៀវពិសារភោជនីយអាហារ",
      },
    ],
    day2: [
      {
        date: "17:30",
        name: "យកពិលាជូនកូនកំលោះ",
      },
      {
        date: "19:00",
        name: "ពិធីសំពះផ្ទឹម និងសែនចងដៃ",
      },
    ],
  };
  return (
    <div
      className="h-[100dvh] pb-[20px] px-[20px]  relative flex flex-col items-center mx-auto max-w-[1200px]"
      //   style={{ background: `url("https://i.pinimg.com/736x/b1/a7/8e/b1a78e93b7116d049ff53dd986db57a2.jpg")`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div
        data-aos="fade-up"
        className="rounded-[20px] overflow-y-auto bg-transparent backdrop:blur-lg flex-col w-full "
      >
        <div className="overflow-y-auto  items-center flex flex-col">
          <div
            className="h-[80dvh] main2 rounded-[20px] rounded-b-none overflow-hidden mt-[20px] relative py-[20px] justify-between items-center flex flex-col w-full"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%] pointer-events-none"></div>
            <div className="w-[95%] rounded-[20px]  absolute h-[95%] pointer-event-none border border-[#fad6a5] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[22px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-shadow text-white mt-[30px] whitespace-nowrap  "
            >
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </p>
            <div className="flex flex-col items-center">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-[18px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2 "
              >
                The Wedding Day
              </p>
              <div className="flex items-center">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-2xl z-10 sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  ព្រុំ​ សុផេង
                </p>
                <div data-aos="fade-up" data-aos-delay="200" id="heart"></div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-2xl sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  សាន មុន្នីវណ្ណ
                </p>
              </div>
            </div>
            <div className="flex flex-col z-10 gap-[5px] items-center space-y-2">
              <p className="text-[12px ] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-gold-light font-medium tracking-[0.2em] mb-1">
                SAVE THE DATE
              </p>
              <h3 className="text-[14px]  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-nokora drop-shadow-lg">
                ថ្ងៃចន្ទ ទី១៩ ខែមករា ឆ្នាំ២០២៦
              </h3>
              <p className="text-[14px]  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-nokora drop-shadow-md">
                ម៉ោង ០២ : ០០ ល្ងាច
              </p>
              <p className="text-[14px]   drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white/80 font-serif">
                19 . 01 . 2026 | 2:00 PM
              </p>
              <div
                className="flex flex-col text-center
               items-center gap-[5px] mb-[10px]"
              >
                <MapPin size={25} className="text-[#fad6a5]  " />
                <p className="w-[80%] text-[12px] text-white">
                  នៅ​​{" "}
                  <span className="text-amber-200 text-[14px]">
                    ភោជនីយដ្ខាន​ រស្មីក្លាន់សៀប
                  </span>{" "}
                  ភូមិត្រពាំងថ្មត្បូង ឃុំប៉ោយចារ ស្រុកភ្នំស្រុក
                  ខេត្តបន្ទាយមានជ័យ​
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]  flex flex-col  text-center">
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
              <div>
                <Image src={waiting} className="w-[250px]" />
              </div>
              <p className="text-[#ce8c30] whitespace-nowrap text-[12px] absolute left-1/2 top-[40%] -translate-x-[50%]">
                យើងខ្ញុំកំពុងរងចាំថ្ងៃពិសេស
              </p>
            </div>
            <Countdown />
            <Gallery />
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-center">កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍</p>
            <div className="w-[150px] mt-[10px] mx-auto">
              <Image src={decorLine} className="" />
            </div>
            <div
              className=" main1 rounded-[20px] rounded-b-none overflow-hidden mt-[20px] relative py-[20px] justify-between items-center flex flex-col w-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.4)_0%,rgba(23,23,23,0.3)_70%,rgba(23,23,23,0.7)_100%)] pointer-events-none"></div>
              <div className="relative z-10 p-6 sm:p-10 space-y-4 w-full">
                {/* Date Section */}
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="p-3 rounded-2xl bg-[linear-gradient(215deg,#D7BB83_0%,#A38C5E_100%)] border border-white/20 shadow-sm backdrop-blur-sm">
                    <Calendar
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-md"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-kg mt-[13px] text-amber-200 font-bold tracking-widest uppercase mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      កាលបរិច្ឆេទ
                    </p>
                    <div className="mt-[10px]">
                      <p className="text-sm mt-[10px] font-nokora text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        កម្មវិធីថ្ងៃទី
                        <span className="text-amber-200 text-[20px]">
                          {" "}
                          28
                        </span>{" "}
                        ខែ
                        <span className="text-amber-200 text-[20px]">
                          {" "}
                          កុម្ភៈ
                        </span>{" "}
                        ឆ្នាំ
                        <span className="text-amber-200 text-[20px]">
                          {" "}
                          2026
                        </span>{" "}
                      </p>
                      <div className="mt-[10px] flex flex-col gap-[5px]">
                        {event.day1.map((ev, index) => (
                          <div key={index} className="flex gap-[10px]">
                            <p className="text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap text-amber-200 font-medium opacity-100">
                              ម៉ោង {ev.date} :
                            </p>
                            <p className="text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-medium opacity-100">
                              {ev.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <p className="text-sm mt-[10px] font-nokora text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        <p className="text-sm mt-[10px] font-nokora text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          កម្មវិធីថ្ងៃទី
                          <span className="text-amber-200 text-[20px]">
                            {" "}
                            01
                          </span>{" "}
                          ខែ
                          <span className="text-amber-200 text-[20px]">
                            {" "}
                            មិនា
                          </span>{" "}
                          ឆ្នាំ
                          <span className="text-amber-200 text-[20px]">
                            {" "}
                            2026
                          </span>{" "}
                        </p>
                      </p>
                      <div className="mt-[10px] flex flex-col gap-[5px]">
                        {event.day2.map((ev, index) => (
                          <div key={index} className="flex gap-[10px]">
                            <p className="text-sm whitespace-nowrap text-amber-200 font-medium opacity-100">
                              ម៉ោង {ev.date} :
                            </p>
                            <p className="text-sm text-white font-medium opacity-100">
                              {ev.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="p-3 rounded-2xl bg-[linear-gradient(215deg,#D7BB83_0%,#A38C5E_100%)] border border-white/20 shadow-sm backdrop-blur-sm">
                    <MapPin
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-md"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="font-nokora">
                    <p className="text-kg mt-[13px] text-amber-200 font-bold tracking-widest uppercase mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      ទីតាំងកម្មវិធី
                    </p>
                    <p className="texsm mt-[10px] leading-[2] text-white  drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      <span className="text-amber-200 text-md">
                        ភោជនីយដ្ខាន​ រស្មីក្លាន់សៀប
                      </span>{" "}
                      <br />
                      ភូមិត្រពាំងថ្មត្បូង ឃុំប៉ោយចារ ស្រុកភ្នំស្រុក
                      ខេត្តបន្ទាយមានជ័យ​
                    </p>
                  </div>
                </div>

                {/* QR & Navigation Button */}
                <div
                  className="pt-4 flex flex-col items-center"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <a
                    href="https://maps.app.goo.gl/j7pzekmaqi4bzCs1A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="group relative px-6 py-3 sm:px-12 sm:py-4 font-bold text-white transition-all duration-300 rounded-full overflow-hidden gold-gradient-bg shadow-2xl cursor-pointer flex items-center gap-2 sm:gap-3 border border-amber-300/40"
                      tabIndex={0}
                    >
                      <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <MapPin
                        className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-xl font-nokora drop-shadow-md whitespace-nowrap">
                        ចុចទៅកាន់ទីតាំងកម្មវិធី
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
