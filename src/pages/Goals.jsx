// src/pages/Goals.jsx

import { GOALS } from "../lib/constants";

function Goals() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Hedeflerimiz
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Eğitimde Temel Hedeflerimiz
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            İstanbul Hızlı Okuma Akademisi'nin amacı, bireylerin metinleri daha
            hızlı okurken aynı zamanda anlama düzeylerini artırmalarını
            sağlamaktır. Eğitim sürecimiz bu hedefler üzerine inşa edilmiştir.
          </p>
        </div>

        {/* Hedef Kartları */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GOALS.map((goal, index) => (
            <div
              key={goal.title}
              className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                <span className="text-sky-700 font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                {goal.title}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Alt açıklama */}
        <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center max-w-3xl mx-auto">
          Sonuç olarak, anlayarak hızlı okuma eğitimi bireylerin okuma
          becerilerini geliştirerek hem kişisel hem de akademik yaşamlarında
          daha başarılı olmalarına yardımcı olmayı amaçlar.
        </p>
      </div>
    </section>
  );
}

export default Goals;
