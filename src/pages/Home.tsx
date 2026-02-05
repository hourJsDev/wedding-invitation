import { useState } from "react";
import Step1 from "../components/step/Step1";
import Step2 from "../components/step/Step2";
const Home = () => {
  const [step, setStep] = useState(1);
  return step === 1 ? <Step1 setStep={setStep} /> : <Step2 />;
};

export default Home;
