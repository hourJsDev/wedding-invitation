const Image = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div className={`${className} `}>
      <img src={src} alt="" className="w-full h-full" />
    </div>
  );
};

export default Image;
