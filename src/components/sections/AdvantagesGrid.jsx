// src/components/sections/AdvantagesGrid.jsx

import { useReveal } from "../../hooks/useReveal";
import { ADVANTAGES } from "../../lib/constants";

function AdvantagesGrid() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className={`pt-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-60"
      }`}
    >
      {/* Üst başlık */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
          Dijital Altyapı
        </p>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
          Neden İstanbul Hızlı Okuma Akademisi&apos;nin
          <br className="hidden sm:block" /> Dijital Altyapısını
          Kullanmalısınız?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
          Öğrencilerin okuma yolculuğunu adım adım takip etmenizi,
          geliştirdiğiniz her beceriyi ölçmenizi ve süreci tamamen
          dijitalleştirmenizi sağlayan modern bir öğrenme ortamı.
        </p>
      </div>

      {/* Dış çerçeve + soft gradient */}
      <div className="rounded-2xl border border-slate-100 p-6 sm:p-10 shadow-sm ">
        <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-200 text-2xl text-indigo-500 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesGrid;
