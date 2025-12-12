// src/pages/Methods.jsx

import { METHODS } from "../lib/constants";

function Methods() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Eğitim Yöntemlerimiz
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            İstanbul Hızlı Okuma Akademisi&apos;nde Eğitim Nasıl İlerler?
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Eğitim sürecimiz; yerinde ve online uygulamalarla, yıllık müfredata
            uyumlu modüllerle, dijital egzersizlerle ve güçlü bir takip
            sistemiyle alanında öncü bir öğrenme deneyimi sunar. Tüm yapı,
            okullar ve eğitim kurumlarıyla iş birliği içinde eğitim öğretim
            yılına entegre olacak şekilde planlanmıştır.
          </p>
        </div>

        {/* Yöntem kartları */}
        <div className="relative">
          {/* Arka plan dekoru */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="grid gap-6 sm:grid-cols-2">
            {METHODS.map((method) => (
              <article
                key={method.title}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                    {method.tag}
                  </span>
                </div>

                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                  {method.title}
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {method.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Alt açıklama */}
          <p className="mt-8 text-xs sm:text-sm text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
            Eğitim sistemimiz, bir kurs programı değil; eğitim öğretim yılına
            yayılmış, kurumlara özel dijital okuma geliştirme altyapısıdır.
            <br />
            <br />
            Tüm süreç; yıllık modüller, düzenli değerlendirmeler, sınıf bazlı
            gelişim analizi ve yapay zekâ destekli içerik yönetimi ile
            desteklenir. Öğrencilerin gelişimi yıl boyunca kesintisiz takip
            edilir; program sonunda hem öğrenciye hem kuruma detaylı gelişim
            raporları sunulur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Methods;
