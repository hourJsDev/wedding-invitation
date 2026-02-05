import { useState } from "react";
import NameCard from "../assets/name-frame.png";
import Image from "../components/image/Image";
import Button from "../components/button/Button";
import Bubble from "../components/Bubble";
const Home = () => {
  const [step, setStep] = useState(1);
  return (
    <div
      className="h-[100dvh] relative flex flex-col items-center mx-auto max-w-[900px]"
      style={{ background: 'url("https://img.freepik.com/free-photo/happy-couple-getting-married_23-2151133319.jpg?semt=ais_hybrid&w=740&q=80")' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.4)_0%,rgba(23,23,23,0.3)_70%,rgba(23,23,23,0.7)_100%)] pointer-events-none"></div>
      <p className="text-white text-[25px] mt-[200px]">សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
      <p className="text-white text-[18px] mt-[30px]">Karia & Sze</p>
      <p className="text-white text-[18px] mt-[10px]">សូមគោរពអញ្ជើញ</p>
      <div className="relative">
        <Image src={NameCard} className="w-[450px]" />
      </div>
      <Button text="បើកធៀប" />
      <Bubble />
    </div>
  );
};

export default Home;
