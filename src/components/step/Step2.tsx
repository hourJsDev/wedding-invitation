const Step2 = () => {
  return (
    <div
      className="h-[100dvh] px-[20px] pt-[20px] relative flex flex-col items-center mx-auto max-w-[1200px]"
      //   style={{ background: `url("https://i.pinimg.com/736x/b1/a7/8e/b1a78e93b7116d049ff53dd986db57a2.jpg")`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div data-aos="fade-up"
               className=" rounded-[20px] overflow-hidden bg-transparent backdrop:blur-lg flex-col w-full ">
        <div className="overflow-y-auto flex">
          <div
            className="h-[86dvh] relative py-[20px] justify-between items-center flex flex-col w-full"
            style={{
              background: `url("https://img.freepik.com/free-photo/happy-couple-getting-married_23-2151133319.jpg?semt=ais_hybrid&w=740&q=80")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%] pointer-events-none"></div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-2xl sm:text-3xl mt-[30px] md:text-4xl whitespace-nowrap font-moulpali text-gold-light  leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </p>
            <div className="flex flex-col items-center">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-xl sm:text-2xl md:text-3xl text-gold-light font-rossetti drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] italic mb-2 "
              >
                The Wedding Day
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-2xl sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                Kairi
              </p>
              <div id="heart"></div>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-2xl sm:text-4xl md:text-5xl whitespace-nowrap font-freehand text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                Sze
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-gold-light font-medium tracking-[0.2em] mb-1">SAVE THE DATE</p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-nokora drop-shadow-lg">ថ្ងៃចន្ទ ទី១៩ ខែមករា ឆ្នាំ២០២៦</h3>
              <p className="text-base sm:text-lg md:text-xl text-white font-nokora drop-shadow-md">ម៉ោង ០២ : ០០ ល្ងាច</p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-serif">19 . 01 . 2026 | 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
