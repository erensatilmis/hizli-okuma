// src/components/sections/FounderQuote.jsx
import { useState } from "react";

function FounderQuote() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-16">
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

          <blockquote className="relative text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
            “Anlayarak hızlı okuma; ilkokulda öğrendiğimiz geleneksel okuma
            modelinin ötesine geçen, zihne adeta yeni bir sürüm yükleyen modern
            bir okuma yaklaşımıdır. Nasıl ki teknolojik cihazlarımız belirli
            aralıklarla güncellenerek daha hızlı, daha güçlü ve daha verimli
            hâle geliyorsa hızlı okuma da okuma sistemimizi aynı şekilde
            günceller, geliştirir ve optimize eder.
            {"\n\n"}
            Hızlı okumak yalnızca metni daha çabuk tüketmek değildir. Bu süreç;
            daha çok okumayı, daha fazla düşünmeyi, daha hızlı ve daha derin bir
            şekilde zihinsel işlem yapabilmeyi beraberinde getirir. Okuyan
            bireyin sorgulama becerisi güçlenir, kelime hazinesi gelişir ve
            beyin daha geniş bir nöron ağını aktif olarak kullanmaya başlar.
            Kelime hazinesi zenginleştikçe düşünme kapasitesi genişler; düşünme
            kapasitesi genişleyen bireyin zihnin üretkenliği, dikkat kalitesi ve
            bilişsel çevikliği belirgin şekilde artar.
            {"\n\n"}
            Bu nedenle hızlı okuma yalnızca bir teknik ya da beceri değil;
            bireyin zihinsel kapasitesini üst seviyeye taşıyan, düşünme biçimini
            dönüştüren bir ‘zihinsel çağ atlama’ sürecidir. Amacımız, her yaş
            grubundaki bireyin bu dönüşümü güvenilir, bilimsel ve yenilikçi
            yöntemlerle deneyimlemesini sağlamak; öğrenme yolculuklarını daha
            verimli, daha güçlü ve daha bilinçli bir noktaya taşımaktır.”
          </blockquote>

          {/* Çizgi */}
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-sky-500 to-indigo-400" />

          {/* İmza alanı */}
          <figcaption className="mt-4 flex items-center gap-3">
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

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-md w-full rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
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
