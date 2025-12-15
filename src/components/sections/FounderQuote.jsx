// src/components/sections/FounderQuote.jsx
"use client";

import { useState } from "react";

function FounderQuote() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-16 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="pointer-events-none absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-sky-500 via-purple-500 to-amber-500 blur opacity-25 transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />

          <div className="relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-900/5 p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-slate-50 blur-3xl opacity-50" />
            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl opacity-50" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-600">
                Kurucudan Mesaj
              </span>

              <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Hızlı Okuma Bir Beceriden Fazlasıdır
              </h2>

              <div className="mt-7 max-w-3xl space-y-4 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                <p className="text-sm font-medium leading-relaxed text-slate-800 sm:text-base">
                  “Anlayarak hızlı okuma; ilkokulda öğrendiğimiz geleneksel
                  okuma modelinin ötesine geçen, zihne adeta yeni bir sürüm
                  yükleyen modern bir okuma yaklaşımıdır.”
                </p>

                <p>
                  Nasıl ki teknolojik cihazlarımız belirli aralıklarla
                  güncellenerek daha hızlı, daha güçlü ve daha verimli hâle
                  geliyorsa hızlı okuma da okuma sistemimizi aynı şekilde
                  günceller, geliştirir ve optimize eder.
                </p>

                <p>
                  Hızlı okumak yalnızca metni daha çabuk tüketmek değildir. Bu
                  süreç; daha çok okumayı, daha fazla düşünmeyi, daha hızlı ve
                  daha derin bir şekilde zihinsel işlem yapabilmeyi beraberinde
                  getirir. Okuyan bireyin sorgulama becerisi güçlenir, kelime
                  hazinesi gelişir ve beyin daha geniş bir nöron ağını aktif
                  olarak kullanmaya başlar.
                </p>

                <p>
                  Bu nedenle hızlı okuma yalnızca bir teknik ya da beceri değil;
                  bireyin zihinsel kapasitesini üst seviyeye taşıyan, düşünme
                  biçimini dönüştüren bir ‘zihinsel çağ atlama’ sürecidir.
                  Amacımız, her yaş grubundaki bireyin bu dönüşümü güvenilir,
                  bilimsel ve yenilikçi yöntemlerle deneyimlemesini sağlamaktır.
                </p>
              </div>

              <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative mb-3 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-blue-400 blur opacity-35" />
                  <img
                    src="/images/gul-ozdemir.jpeg"
                    alt="Gül Özdemir"
                    className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </button>

                <div className="text-center">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Gül Özdemir
                  </h4>
                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    İstanbul Hızlı Okuma Akademisi Kurucusu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
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

            <div className="flex items-center justify-center bg-slate-900">
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
