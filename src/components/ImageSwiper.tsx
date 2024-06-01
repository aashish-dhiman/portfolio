import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/about/1.png";
import img2 from "@/assets/about/2.png";
import img3 from "@/assets/about/3.png";
import img4 from "@/assets/about/4.png";
import img5 from "@/assets/about/5.png";
import img6 from "@/assets/about/6.png";
import img7 from "@/assets/about/7.png";
import img8 from "@/assets/about/8.png";
import img9 from "@/assets/about/9.png";
import img10 from "@/assets/about/10.png";
import img11 from "@/assets/about/11.png";
import img12 from "@/assets/about/12.png";
import img13 from "@/assets/about/13.png";
import img14 from "@/assets/about/14.png";
import img15 from "@/assets/about/15.png";
import img16 from "@/assets/about/16.png";
import img17 from "@/assets/about/17.png";
import img18 from "@/assets/about/18.png";
import img19 from "@/assets/about/19.png";
import img20 from "@/assets/about/20.png";
import img21 from "@/assets/about/21.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const ImageSwiper = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Image
        src={images[currentImageIndex]}
        alt="About"
        width={300}
        height={400}
        className="cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02]"
        priority
      />
    </div>
  );
};

export default ImageSwiper;
