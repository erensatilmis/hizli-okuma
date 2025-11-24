// src/pages/Curriculum.jsx

"use client";

import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { CONTENT_ITEMS } from "../lib/constants";

function Curriculum() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Başlık alanı */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Eğitim İçeriği
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Programda Sizi Neler Bekliyor?
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            İstanbul Hızlı Okuma Akademisi&apos;nde eğitim süreci; okuma hızını
            artırmanın ötesine geçerek odaklanma, anlama, motivasyon ve sınav
            becerilerini bir bütün olarak ele alır.
          </p>
        </div>

        {/* İçerik kartı */}
        <div className="relative">
          {/* Arka plan */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 sm:p-8 shadow-sm">
            {/* Üst açıklama satırı */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                Temelden Uygulamaya Kapsamlı İçerik
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Teorik bilgi + yoğun uygulama
              </span>
            </div>

            {/* Liste */}
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTENT_ITEMS.map((item, index) => {
                const isOpen = openItems[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 hover:border-sky-200 hover:bg-sky-50/70 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full px-3 py-3 text-left"
                    >
                      {/* Üst satır: badge + başlık solda, buton (ikon) sağda */}
                      <div className="flex items-center justify-between w-full gap-3">
                        {/* Sol blok: badge + başlık */}
                        <div className="flex items-center gap-3 flex-1">
                          {/* 1) Sabit boyutlu badge */}
                          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* 2) Başlık – badge ile aynı merkez çizgide */}
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {item.title}
                          </p>
                        </div>

                        {/* 3) En sağdaki buton (ikon) */}
                        <div className="flex items-center justify-center text-slate-500">
                          {isOpen ? (
                            <AiOutlineUp className="h-4 w-4" />
                          ) : (
                            <AiOutlineDown className="h-4 w-4" />
                          )}
                        </div>
                      </div>

                      {/* Accordion açıklama alanı */}
                      <div
                        className={`mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? "max-h-40 sm:max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.description}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Alt not */}
            <p className="mt-6 text-xs sm:text-sm text-slate-500">
              Her öğrenci; hazırbulunuşluk düzeyi, hedefleri ve ihtiyaçları
              doğrultusunda bu içerik başlıkları içinden kendisine en uygun
              program akışına yönlendirilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
