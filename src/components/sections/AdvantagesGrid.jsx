"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { ADVANTAGES, ADVANTAGES_PARAGRAPH_ITEMS } from "../../lib/constants";
import TiltCard from "../TiltCard";

function AdvantagesGrid() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch("/lottie/speed-reading.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setAnimationData(data);
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* ===== SADECE ÜST BAŞLIK ARKA PLANI ===== */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50" />
        <div className="pointer-events-none absolute -top-20 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/40 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-300/40 blur-[100px]" />

        <div className="relative z-10 text-center py-8 sm:py-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            Dijital Altyapı
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
            Neden İstanbul Hızlı Okuma Akademisi
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-600">
              Dijital Altyapısını Kullanmalısınız?
            </span>
          </h2>
        </div>
      </div>

      <div className="relative mb-12 rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/60 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/50 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-16 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-300/50 blur-[100px]" />

        <div className="relative rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10">
            <div className="lg:col-span-5 flex flex-col justify-center space-y-7">
              {ADVANTAGES_PARAGRAPH_ITEMS.map((it) => (
                <div key={it.title} className="flex gap-4 group text-left">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className={`h-3 w-3 rounded-full ${it.dot}`} />
                  </div>

                  <div>
                    <h3
                      className={`text-base sm:text-lg font-semibold text-slate-900 transition-colors ${it.hover}`}
                    >
                      {it.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      {it.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Hızlı Okuma Modu
                    </h4>
                    <p className="text-xs text-slate-500">
                      Akış, odak ve hız algısı
                    </p>
                  </div>

                  <span className="px-2 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                    LIVE
                  </span>
                </div>

                <div className="flex-grow rounded-xl border border-slate-200 bg-white shadow-inner overflow-hidden">
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      loop
                      autoplay
                      className="h-full w-full"
                    />
                  ) : (
                    <div className="h-full w-full animate-pulse bg-slate-100" />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">
                      Hız Odaklı Öğrenme
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Akış & hız artışı
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">
                      Veri + Yapay Zekâ
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Kişiye özel analiz
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">
                      Dijital Ekosistem
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Modüller & raporlar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ ADVANTAGES kartları tilt oldu */}
      <div className="rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-md p-6 sm:p-10 shadow-xl shadow-slate-200/60">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => (
            <TiltCard key={item.title}>
              <div className="flex h-full flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50/40 text-2xl text-indigo-500 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 min-h-[2.75rem]">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesGrid;
