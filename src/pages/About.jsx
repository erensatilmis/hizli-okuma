// src/pages/About.jsx

import { useReveal } from "../hooks/useReveal";
import { MANIFESTO } from "../lib/constants";

function About() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Üst başlık alanı */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Hakkımızda
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            İstanbul Hızlı Okuma Akademisi
          </h1>

          <p className="mt-3 text-base sm:text-lg font-medium text-slate-700">
            Bilimsel Temelli Hızlı Okuma ve Bilişsel Gelişim
          </p>
        </div>

        {/* Ana içerik alanı */}
        <div ref={ref} className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-stretch">
            {/* Sol: metinler */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                İstanbul Hızlı Okuma Akademisi, öğrenme biliminin en güncel
                bulgularını eğitim teknolojileriyle birleştiren modern bir hızlı
                okuma ve bilişsel gelişim merkezidir.
              </p>

              <p>
                Eğitim anlayışımız, öğrencilerin yalnızca daha hızlı okumalarını
                sağlamakla sınırlı değildir; aynı zamanda onların düşünme
                becerilerini geliştirmeyi, analiz yeteneklerini güçlendirmeyi ve
                öğrenme süreçlerini veriye dayalı tekniklerle desteklemeyi
                hedefler.
              </p>

              <p>
                Her öğrencinin potansiyeline ulaşmasının en etkili yolu, kişiye
                özel bir eğitim yaklaşımıdır. Bu nedenle platformumuz;
                öğrencilerin okuma alışkanlıklarını, dikkat düzeylerini, anlama
                performanslarını ve bilişsel eğilimlerini ayrıntılı analiz eden
                kapsamlı bir dijital altyapıyla tasarlanmıştır.
              </p>

              <p>
                Bu altyapı, öğrencinin gelişimini gerçek zamanlı ölçer; eğitim
                planını otomatik olarak kişiselleştirir ve her öğrencinin kendi
                hızında ilerlemesini sağlar.
              </p>

              <p>
                Akademimiz, alanında uzman eğitmenlerin uzun yıllara dayanan
                deneyimlerini bilimsel yöntemlerle birleştiren, uluslararası
                standartlarda bir eğitim modeline sahiptir.
              </p>

              <p>
                Tüm eğitim içerikleri modern pedagojik prensiplere dayalı olarak
                tasarlanmış, farklı yaş gruplarının ihtiyaçlarına özel olarak
                yapılandırılmıştır.
              </p>

              <p>
                Öğrenciler; hızlı okuma tekniklerinin ötesine geçen bir bilişsel
                gelişim programından yararlanır ve akademik başarılarına
                doğrudan etki edebilecek kapsamlı bir kazanım elde ederler.
              </p>

              <p>
                İstanbul Hızlı Okuma Akademisi olarak önceliğimiz; her
                öğrencinin bireysel öğrenme yolculuğunu güvenle desteklemek,
                potansiyelini görünür kılmak ve gelecekteki öğrenme başarısı
                için güçlü bir temel oluşturmaktır.
              </p>

              <p>
                Eğitim, yaşam boyunca süren bir gelişim serüvenidir ve biz bu
                serüvende öğrencilerimize bilimsel bir rehberlik sunarak okumayı
                bir yaşam biçimi haline getirmelerini en büyük sorumluluğumuz
                olarak görüyoruz.
              </p>
            </div>

            {/* Sağ: manifesto */}
            <aside className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm h-full flex flex-col">
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-sky-700">
                  Neye İnanıyoruz?
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Bu bir slogan değil; benimsediğimiz eğitim yaklaşımının
                  özüdür.
                </p>

                <div
                  className={`mt-4 h-px w-full bg-gradient-to-r from-sky-500 to-indigo-400 transition-all duration-700 origin-left ${
                    visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-3">
                {MANIFESTO.map((item, i) => (
                  <div
                    key={item.title}
                    style={{ transitionDelay: `${i * 140}ms` }}
                    className={`group rounded-xl border border-slate-100 bg-white/70 p-4 transition-all duration-500
                      ${
                        visible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }
                      hover:border-sky-300 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_8px_30px_rgba(56,189,248,0.15)]
                    `}
                  >
                    {/* Başlık + ikon */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700 text-sm transition-colors duration-300 group-hover:bg-sky-100">
                        ✨
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </span>
                    </div>

                    {/* Metin */}
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
