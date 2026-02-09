import { Calendar, MapPin } from "lucide-react";
import decorLine from "../../assets/decor-line.png";
import aba from "../../assets/aba.jpg";
import location from "../../assets/location.jpg";
import waiting from "../../assets/waiting.png";
import Image from "../image/Image";
import Countdown from "../time/Countdown";
import Gallery from "../image/Gallery";
import { useState } from "react";
import { loveStory } from "../../db/loveStory";
import cambodia from "../../assets/cambodia.png";
import en from "../../assets/en.png";
const Step2 = () => {
  const [language, setLanguage] = useState(1);
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
            className="h-[85dvh] main2 rounded-[20px] rounded-b-none overflow-hidden mt-[20px] relative py-[20px] justify-between items-center flex flex-col w-full"
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
            <div className="">
              <div className="flex mb-[30px] items-center justify-between w-full">
                <div className="flex gap-[10px] w-full relative flex-col items-center">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-sm w-full text-left  z-10  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    <span>លោក</span> ឃាល​ ណុច
                  </p>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-sm w-full  text-left flex-1  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    <span>អ្នកស្រី</span> ស៊ីវ ចាន់មូលី
                  </p>
                </div>
                <div className="flex w-full gap-[10px] flex-col relative  items-center">
                  <p className="text-sm z-10 opacity-0 pointer-events-none  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    none
                  </p>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-sm w-full  text-right  whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    <span>អ្នកស្រី</span> ហ៊ា រ៉ាវី
                  </p>
                </div>
              </div>
              <div className="flex translate-y-[70px] flex-col items-center">
                <div className="flex mb-[10px] w-full relative gap-[90px] items-center">
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
                    className="text-md z-10 sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    ព្រំ​ សុផេង
                  </p>
                  <div className="absolute left-1/2 -translate-1/2 top-[0px]">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      id="heart"
                    ></div>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-md sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    សាន មុន្នីវណ្ណ
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col z-10 gap-[5px] items-center space-y-2">
              <h3 className="text-[14px]  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-nokora drop-shadow-lg">
                ថ្ងៃសៅរ៍ ទី២៨ ខែកុម្ភះ ឆ្នាំ២០២៦
              </h3>
              <p className="text-[14px]  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-nokora drop-shadow-md">
                ម៉ោង ០៤ : ៣០ ល្ងាច
              </p>
              <p className="text-[14px]   drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white/80 font-serif">
                28 . 02 . 2026 | 4:30 PM
              </p>
              <div
                className="flex flex-col text-center
               items-center gap-[5px] mb-[10px]"
              >
                <MapPin size={25} className="text-amber-200 mb-[3px]  " />
                <p className="w-[80%] leading-[2] text-[12px] text-white">
                  នៅ​​{" "}
                  <span className="text-amber-200 text-[14px]">
                    ភោជនីយដ្ឋាន​ រស្មីក្លាន់សៀប
                  </span>{" "}
                  ភូមិត្រពាំងថ្មត្បូង ឃុំប៉ោយចារ ស្រុកភ្នំស្រុក
                  ខេត្តបន្ទាយមានជ័យ​
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]  flex flex-col  text-center">
            <div className="text-[#7f5b02] ">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</div>
            <div className="w-[150px] mt-[10px] mx-auto">
              <Image src={decorLine} className="" />
            </div>
            <p className="text-center text-[#7f5b02] mt-[20px] text-[14px]">
              ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
              អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
              ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍
              របស់យើងខ្ញុំទាំងពីរ។
            </p>
            <div className="relative flex justify-center z-10 mt-[50px]">
              <div>
                <Image src={waiting} className="w-[250px]" />
              </div>
              <p className="text-[#ce8c30] whitespace-nowrap mt-[1px] text-[13px] absolute left-1/2 top-[40%] -translate-x-[50%]">
                យើងខ្ញុំកំពុងរងចាំថ្ងៃពិសេស
              </p>
            </div>

            <Countdown />

            <Gallery />
            <h2 className="text-lg mt-[20px] sm:text-xl text-center whitespace-nowrap text-[#7f5b02] font-moulpali py-2 leading-relaxed">
              {
                loveStory.title?.[
                  language.toString() as keyof typeof loveStory.description
                ]
              }
            </h2>
            <div className="w-[150px]  mx-auto">
              <Image src={decorLine} className="" />
            </div>
            <div className="mt-[20px] relative border border-[#7f5b02] pt-[30px] bg-[#ffffff75] rounded-[10px]">
              {/* Header Title */}

              <div
                onClick={() => setLanguage(language === 1 ? 2 : 1)}
                className="absolute right-[10px] top-[10px]"
              >
                <Image
                  className="w-[40px]"
                  src={language === 1 ? cambodia : en}
                />{" "}
              </div>

              {/* Main Message */}
              <p className="text-center font-fam-normal mt-[10px] text-sm  leading-loose font-moulpali text-[#7f5b02] text-base  px-4 mb-12">
                {
                  loveStory.description?.[
                    language.toString() as keyof typeof loveStory.description
                  ]
                }
              </p>
            </div>
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-center text-[18px] text-[#7f5b02]">
              កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
            </p>
            <div className="w-[150px] mt-[10px] mx-auto">
              <Image src={decorLine} className="" />
            </div>
            <div
              className=" main1 rounded-[20px] overflow-hidden mt-[20px] relative py-[20px] justify-between items-center flex flex-col w-full"
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
                        ថ្ងៃទី
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
                            <p className="text-sm leading-[2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white font-medium opacity-100">
                              {ev.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <p className="text-sm mt-[10px] font-nokora text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        <p className="text-sm mt-[10px] font-nokora text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          ថ្ងៃទី
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
                            <p className="text-sm leading-[2] text-white font-medium opacity-100">
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
                  className="flex mt-[70px] items-start gap-4 sm:gap-6"
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
                    <Image
                      src={location}
                      className="overflow-hidden rounded-[10px] mt-[10px]"
                    />
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
          <div className="p-4 md:p-8">
            {/* Header Title */}
            <h2 className="text-lg sm:text-xl text-center whitespace-nowrap text-[#7f5b02] font-moulpali py-2 leading-relaxed">
              ចំណងដៃអាពាហ៍ពិពាហ៍
            </h2>
            <div className="w-[150px]  mx-auto">
              <Image src={decorLine} className="" />
            </div>
            {/* Main Message */}
            <Image
              className="rounded-[20px] overflow-hidden w-[70%] mx-auto mt-[10px]"
              src={aba}
            />
          </div>
          <div className="p-4 md:p-8">
            {/* Header Title */}
            <h2 className="text-lg sm:text-xl text-center whitespace-nowrap text-[#7f5b02] font-moulpali py-2 leading-relaxed">
              សូមថ្លែងអំណរអរគុណ
            </h2>
            <div className="w-[150px]  mx-auto">
              <Image src={decorLine} className="" />
            </div>
            {/* Main Message */}
            <p className="text-center text-sm py-[20px] leading-loose font-moulpali text-[#7f5b02] text-base  px-4 mb-12">
              វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
              ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
