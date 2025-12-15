import AdvantagesGrid from "../components/sections/AdvantagesGrid";
import CoreBenefits from "../components/sections/CoreBenefits";
import FounderQuote from "../components/sections/FounderQuote";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <div className="flex flex-col items-center max-w-[90rem] mx-auto">
      {/* Dijital altyapı / Neden biz? */}
      <AdvantagesGrid />

      {/* 8 temel eğitim avantajı vb. */}
      <CoreBenefits />

      {/* Kurucudan mesaj / açıklama */}
      <FounderQuote />

      {/* Üyelerimizin görüşleri */}
      <Testimonials />
    </div>
  );
}

export default Home;
