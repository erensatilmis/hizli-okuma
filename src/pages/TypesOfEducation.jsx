// src/pages/EducationTypes.jsx

import { PROGRAMS } from "../lib/constants";
import { useScrollProgress } from "../hooks/useScrollProgress";

function TypesOfEducation() {
  const progress = useScrollProgress();

  return (
    <section className="py-12">
      {/* Scroll progress indicator */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-indigo-400 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Eğitim Türlerimiz
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Kime Hangi Eğitim Uygun?
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            İstanbul Hızlı Okuma Akademisi, farklı yaş gruplarının ve kurumların
            ihtiyaçlarına özel olarak tasarlanmış, modern ve uygulanabilir hızlı
            okuma programları sunar. Tüm eğitim süreçleri dijital altyapı, veri
            odaklı takip ve kişiselleştirilmiş modüllerle desteklenir.
          </p>
        </div>

        <div className="relative">
          {/* Soft background decor */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="space-y-6">
            {PROGRAMS.map((program) => (
              <article
                key={`${program.tag}-${program.title}`}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-slate-100 bg-white/90
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:border-sky-200
                  hover:shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_18px_60px_rgba(56,189,248,0.14)]
                "
              >
                {/* soft hover bg */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                  {/* Sol */}
                  <div className="lg:pr-6">
                    <div className="lg:sticky lg:top-24">
                      <span className="inline-flex items-center w-fit rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700">
                        {program.tag}
                      </span>

                      <h2 className="mt-3 text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                        {program.title}
                      </h2>

                      <div className="mt-4 h-px w-24 bg-gradient-to-r from-sky-500 to-indigo-400" />
                    </div>
                  </div>

                  {/* Sağ */}
                  <div className="lg:pl-6 lg:border-l lg:border-slate-100">
                    {Array.isArray(program.desc) && program.desc.length > 0 ? (
                      <ul className="space-y-3">
                        {program.desc.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="
                                mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center
                                rounded-full border border-sky-100 bg-sky-50 text-sky-700 text-xs font-bold
                                transition-colors duration-300
                                group-hover:bg-sky-100
                              "
                              aria-hidden="true"
                            >
                              ✓
                            </span>

                            <span className="text-sm text-slate-700 leading-relaxed">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {program.desc}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Alt açıklama */}
          <div className="mt-10 mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm">
              <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                Eğitim türlerimiz; öğrencilerin yaş gruplarına, hedeflerine ve
                ihtiyaçlarına göre yapılandırılır.
                <br />
                <br />
                Her eğitim, bireyin potansiyelini en doğru şekilde ortaya
                çıkaracak şekilde tasarlanmış olup dijital takip sistemiyle
                sürekli izlenir ve raporlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesOfEducation;
