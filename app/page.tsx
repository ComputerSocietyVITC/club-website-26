import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import Mission from "./components/Mission";
import StatsCard from "./components/StatsCard";
import Marquee from "./components/Marquee";
import Events from "./components/Events";
import Sponsor from "./components/Sponsor";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Image from "next/image";
import image1 from "./assets/image1.png";
import image1_0 from "./assets/image1_0.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-3%] left-1/2 w-full max-w-full -translate-x-1/2">
          <Image
            src={image1_0}
            alt=""
            priority
            className="relative z-0 h-auto w-full object-contain"
          />
          <Image
            src={image1}
            alt=""
            priority
            className="absolute inset-x-0 top-[35%] z-10 h-auto w-full object-contain"
          />
        </div>
        <Image
          src={image2}
          alt=""
          priority
          className="absolute top-[22%] left-1/2 h-auto w-full max-w-[150%] -translate-x-1/2 object-contain"
        />
        <Image
          src={image3}
          alt=""
          priority
          className="absolute top-[60%] right-full h-auto w-full max-w-full translate-x-1/2 object-contain"
        />
      </div>

      <Header />
      <div
        className="flex flex-col gap-20 md:gap-28"
        style={{ paddingTop: `${(image1.height / image1.width) * 120}%` }}
      >
        <NewsLetter />
        <Mission />
        <div className="mt-16 md:mt-24">
          <StatsCard />
        </div>
        <Marquee />
        <Events />
        <Sponsor />
        <Faq />
      </div>
      <Footer/>
    </div>
  );
}
