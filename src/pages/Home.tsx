import { useRef, useState } from "react";
import Step1 from "../components/step/Step1";
import Step2 from "../components/step/Step2";
import mySong from "../assets/song.mp3";
const Home = () => {
  const [step, setStep] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const togglePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <>
      <audio ref={audioRef} src={mySong} />
      {step === 1 ? <Step1 onClick={togglePlay} setStep={setStep} /> : <Step2 />}
    </>
  );
};

export default Home;
