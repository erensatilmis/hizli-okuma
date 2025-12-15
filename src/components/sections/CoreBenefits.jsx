"use client";

import { CORE_BENEFITS } from "../../lib/constants";
import TiltCard from "../TiltCard";

function CoreBenefits() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Başlık alanı */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
          Eğitim Avantajları
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          İstanbul Hızlı Okuma Akademisi'nin
          <br className="hidden sm:block" /> 8 Temel Eğitim Avantajı
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
          Program, yalnızca hızlı okuma değil; odak, hafıza, anlama ve zihinsel
          gelişimi kapsayan bütüncül bir eğitim yaklaşımı sunar.
        </p>
      </div>

      {/* Kart grid */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full -z-10 bg-gradient-to-b from-sky-50/60 via-white to-white" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_BENEFITS.map((item) => (
            <TiltCard key={item.no}>
              {/* Numara */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 font-semibold text-sm tracking-wide ring-1 ring-sky-200">
                  {item.no}
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreBenefits;
