// src/pages/EducationTypes.jsx

import { PROGRAMS } from "../lib/constants";

function TypesOfEducation() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Eğitim Türlerimiz
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Kime Hangi Eğitim Uygun?
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            İstanbul Hızlı Okuma Akademisi, farklı yaş gruplarının ve kurumların
            ihtiyaçlarına özel olarak tasarlanmış, modern ve uygulanabilir hızlı
            okuma programları sunar. Tüm eğitim süreçleri dijital altyapı, veri
            odaklı takip ve kişiselleştirilmiş modüllerle desteklenir.
          </p>
        </div>

        {/* Eğitim türü kartları */}
        <div className="relative">
          {/* Soft background decor */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="grid gap-6 sm:grid-cols-2">
            {PROGRAMS.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex items-center w-fit rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 mb-3">
                  {program.tag}
                </span>

                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                  {program.category}
                </h2>

                <h3 className="text-sm sm:text-base font-medium text-slate-800 mb-2">
                  {program.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {program.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Alt açıklama */}
          <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
            Eğitim türlerimiz; öğrencilerin yaş gruplarına, hedeflerine ve
            ihtiyaçlarına göre yapılandırılır.
            <br />
            <br />
            Her eğitim, bireyin potansiyelini en doğru şekilde ortaya çıkaracak
            şekilde tasarlanmış olup dijital takip sistemiyle sürekli izlenir ve
            raporlanır.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TypesOfEducation;
