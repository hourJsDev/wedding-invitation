import Image from "./Image";
import decorLine from "../../assets/decor-line.png";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { useState } from "react";

import outfit11 from "../../assets/outfits/1/1.jpg";
import outfit12 from "../../assets/outfits/1/2.jpg";
import outfit13 from "../../assets/outfits/1/3.jpg";
import outfit14 from "../../assets/outfits/1/4.jpg";
import outfit15 from "../../assets/outfits/1/5.jpg";
import outfit21 from "../../assets/outfits/2/1.jpg";
import outfit22 from "../../assets/outfits/2/2.jpg";
import outfit23 from "../../assets/outfits/2/3.jpg";
import outfit24 from "../../assets/outfits/2/4.jpg";
import outfit25 from "../../assets/outfits/2/5.jpg";
import outfit31 from "../../assets/outfits/3/1.jpg";
import outfit32 from "../../assets/outfits/3/2.jpg";
import outfit33 from "../../assets/outfits/3/3.jpg";
import outfit34 from "../../assets/outfits/3/4.jpg";
import outfit35 from "../../assets/outfits/3/5.jpg";
import outfit41 from "../../assets/outfits/4/1.jpg";
import outfit42 from "../../assets/outfits/4/2.jpg";
import outfit43 from "../../assets/outfits/4/3.jpg";
import outfit44 from "../../assets/outfits/4/4.jpg";
import outfit45 from "../../assets/outfits/4/5.jpg";
import outfit51 from "../../assets/outfits/5/1.jpg";
import outfit52 from "../../assets/outfits/5/2.jpg";
import outfit53 from "../../assets/outfits/5/3.jpg";
import outfit54 from "../../assets/outfits/5/4.jpg";
import outfit55 from "../../assets/outfits/5/5.jpg";
import ImageSkeleton from "../skeleton/ImageSkeleton";

const Gallery = () => {
  const [open, setOpen] = useState(0);
  const outfits = [
    [outfit11, outfit12, outfit13, outfit14, outfit15],
    [outfit24, outfit21, outfit22, outfit23, outfit25],
    [outfit31, outfit32, outfit33, outfit34, outfit35],
    [outfit41, outfit42, outfit43, outfit44, outfit45 , outfit51, outfit52, outfit53, outfit54, outfit55],
  ];
  const handleSelectOutfit = (index: number) => {
    setOpen(index + 1);
  };
  return (
    <div className="mt-[20px] ">
      <div className="text-[#7f5b02] text-[18px]">
        កម្រងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង
      </div>
      <div className="w-[150px] mt-[10px] mx-auto">
        <Image src={decorLine} className="" />
      </div>
      <div className="grid grid-cols-2 mt-[20px] gap-[10px]">
        {outfits.map((outfit, index) => (
          <div
            onClick={() => handleSelectOutfit(index)}
            className="rounded-[10px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%] pointer-events-none"></div>
            <Image src={outfit[0]} />

            <div className="absolute text-center w-full pb-[10px] left-0 bottom-0 ">
              <p className="text-white text-[13px]">ឈុតទី​ {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
      <Sheet open={open > 0} onOpenChange={() => setOpen(0)}>
        <SheetContent className="w-full overflow-auto">
          <SheetHeader>
            <p className="text-lg">ឈុតទី​ {open}</p>
            <div className="w-[150px] mt-[10px] mx-auto">
              <Image src={decorLine} className="" />
            </div>
          </SheetHeader>
          <div className="grid grid-cols-1 mt-[20px] gap-[10px]">
            {!!outfits[open - 1] &&
              outfits[open - 1].map((outfit,index) => (
                <div key={index} className="rounded-[10px] relative overflow-hidden">
                  <ImageSkeleton src={outfit} />
                </div>
              ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Gallery;
