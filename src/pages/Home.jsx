// src/pages/Home.jsx

import Hero from "../components/sections/Hero";
import AdvantagesGrid from "../components/sections/AdvantagesGrid";
import CoreBenefits from "../components/sections/CoreBenefits";
import FounderQuote from "../components/sections/FounderQuote";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <div className="flex flex-col items-center max-w-[90rem] mx-auto">
      {/* Hero section – büyük başlık / giriş */}
      {/* <Hero /> */}

      {/* Dijital altyapı / Neden biz? */}
      <AdvantagesGrid />

      {/* 5 temel eğitim avantajı vb. */}
      <CoreBenefits />

      {/* Kurucudan mesaj / açıklama */}
      <FounderQuote />

      {/* Üyelerimizin görüşleri */}
      <Testimonials />
    </div>
  );
}

export default Home;
