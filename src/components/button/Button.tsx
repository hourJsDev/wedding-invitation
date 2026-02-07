import { MailOpen } from "lucide-react";
const Button = ({ text, onClick }: { text?: string; onClick?: () => void }) => {
  return (
    <button
      className="relative flex items-center gap-[5px] px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 shadow-xl cursor-pointer group rounded-xl gold-gradient-bg"
      onClick={() => onClick && onClick()}
    >
      <MailOpen className="-mt-[7px]" />
      <span>{text}</span>
    </button>
  );
};

export default Button;
