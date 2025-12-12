// src/pages/Methods.jsx

import { METHODS } from "../lib/constants";
import { useScrollProgress } from "../hooks/useScrollProgress";

function Methods() {
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
            Eğitim Yöntemlerimiz
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            İstanbul Hızlı Okuma Akademisi&apos;nde Eğitim Nasıl İlerler?
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Eğitim sürecimiz; yerinde ve online uygulamalarla, yıllık müfredata
            uyumlu modüllerle, dijital egzersizlerle ve güçlü bir takip
            sistemiyle bütünleşik bir öğrenme deneyimi sunar. Tüm yapı,
            kurumların eğitim öğretim yılına entegre olacak şekilde
            planlanmıştır.
          </p>
        </div>

        <div className="relative">
          {/* Soft background decor */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="space-y-6">
            {METHODS.map((method) => (
              <article
                key={method.title}
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
                      <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700">
                        {method.tag}
                      </span>

                      <h2 className="mt-3 text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                        {method.title}
                      </h2>

                      <div className="mt-4 h-px w-24 bg-gradient-to-r from-sky-500 to-indigo-400" />
                    </div>
                  </div>

                  {/* Sağ */}
                  <div className="lg:pl-6 lg:border-l lg:border-slate-100">
                    {Array.isArray(method.bullets) &&
                    method.bullets.length > 0 ? (
                      <ul className="space-y-3">
                        {method.bullets.map((b, i) => (
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
                        {method.desc}
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
                Eğitim sistemimiz, bir kurs programı değil; eğitim öğretim
                yılına yayılmış, kurumlara özel dijital okuma geliştirme
                altyapısıdır.
                <br />
                <br />
                Tüm süreç; yıllık modüller, düzenli değerlendirmeler, sınıf
                bazlı gelişim analizi ve yapay zekâ destekli içerik yönetimi ile
                desteklenir. Öğrencilerin gelişimi yıl boyunca kesintisiz takip
                edilir; program sonunda hem öğrenciye hem kuruma detaylı gelişim
                raporları sunulur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methods;
