// src/components/sections/FounderQuote.jsx
import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

function FounderQuote() {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`pt-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-60"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        {/* başlık */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            Kurucudan Mesaj
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Hızlı Okuma Bir Beceriden Fazlasıdır
          </h2>
        </div>

        {/* alıntı kartı */}
        <figure className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-sm sm:p-10">
          {/* arka plan */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/60" />

          {/* büyük tırnak */}
          <div className="absolute -top-6 -left-2 text-7xl font-serif text-sky-100 select-none">
            “
          </div>

          <blockquote className="relative text-sm sm:text-base leading-relaxed text-slate-700">
            “Hızlı okuma, bilgiye hızlı erişim ve etkili öğrenme için kritik bir
            beceridir. Odaklanma ve hafıza güçlendirme teknikleriyle
            birleştiğinde, bireylerin potansiyellerini tam anlamıyla ortaya
            çıkarmalarını sağlar.”
          </blockquote>

          {/* Çizgi */}
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-sky-500 to-indigo-400" />

          {/* İmza alanı */}
          <figcaption className="mt-4 flex items-center gap-3">
            {/* Fotoğraf (tıklanabilir) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative h-12 w-12 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              <img
                src="/images/gul-ozdemir.jpeg"
                alt="Gül Özdemir"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/60" />
            </button>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Gül Özdemir
              </span>
              <span className="text-xs text-slate-500">
                İstanbul Hızlı Okuma Akademisi Kurucusu
              </span>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Modal – foto büyük hali */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-md w-full rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
              <span className="text-sm font-semibold text-slate-900">
                Gül Özdemir
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Kapat
              </button>
            </div>

            {/* Image */}
            <div className="bg-slate-900 flex items-center justify-center">
              <img
                src="/images/gul-ozdemir.jpeg"
                alt="Gül Özdemir"
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FounderQuote;
