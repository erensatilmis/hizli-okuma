// src/pages/About.jsx

function About() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Üst başlık alanı */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            Hakkımızda
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            İstanbul Hızlı Okuma Akademisi
          </h1>

          <p className="mt-3 text-base sm:text-lg font-medium text-slate-700">
            Eğitime Adanmış Bir Hızlı Okuma Serüveni
          </p>
        </div>

        {/* Ana içerik alanı */}
        <div className="relative">
          {/* Arka plan dekoru */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-stretch">
            {/* Sol: metinler */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                Bireyin hayatında en önemli süreçlerden biri olan eğitim; sadece
                bilgiyi aktarmak değil, aynı zamanda bireyin potansiyelini
                keşfetmesine yardımcı olmak, ona rehberlik etmek ve daha geniş
                bir perspektif kazandırmaktır.
              </p>

              <p>
                Biz de bu anlayışla yola çıkan, eğitime gönül vermiş öğretmenler
                olarak İstanbul Hızlı Okuma Akademisini hayata geçirdik.
              </p>

              <p>
                En büyük amacımız, öğrencilerin okuma hızlarını artırarak
                bilgiye daha hızlı ulaşmalarını ve bu bilgiyi daha etkili bir
                şekilde işlemelerini sağlamaktır.
              </p>

              <p>
                Hızlı okuma, bir metni daha kısa sürede okuyup anlamayı sağlayan
                bir dizi teknikten oluşur. Bu tekniklerin her yaşta öğrenci
                tarafından öğrenilebileceğini biliyoruz.
              </p>

              <p>
                İstanbul Hızlı Okuma Akademisi, öğrencilere farklı teknikler
                sunarak onların bireysel ihtiyaçlarına uygun bir eğitim planı
                sunar.
              </p>

              <p>
                Eğitim, bireyin hayatındaki en önemli süreçlerden biridir ve bu
                süreçte onlara rehberlik etmek bizim en büyük tutkumuzdur.
              </p>
            </div>

            {/* Sağ: vurgulu kutu */}
            <aside className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm h-full flex flex-col">
              <h2 className="text-sm font-semibold text-sky-700 mb-3">
                Neye İnanıyoruz?
              </h2>

              <div className="flex flex-col justify-between flex-1 text-sm text-slate-700">
                {/* 1. paragraf */}
                <p className="border-l-2 border-sky-500/70 pl-3">
                  En büyük amacımız, öğrencilerin okuma hızlarını artırarak
                  bilgiye daha hızlı ulaşmalarını ve bu bilgiyi daha etkili bir
                  şekilde işlemelerini sağlamaktır.
                </p>

                {/* Yıldız */}
                <span className="self-center text-yellow-500 text-lg leading-none">
                  ★
                </span>

                {/* 2. paragraf */}
                <p className="border-l-2 border-sky-500/40 pl-3">
                  Hızlı okuma, bir metni daha kısa sürede okuyup anlamayı
                  sağlayan bir dizi teknikten oluşur. Bu tekniklerin her yaşda
                  öğrenci tarafından öğrenilebileceğini biliyoruz.
                </p>

                {/* Yıldız */}
                <span className="self-center text-yellow-500 text-lg leading-none">
                  ★
                </span>

                {/* 3. paragraf */}
                <p className="border-l-2 border-sky-500/20 pl-3">
                  Eğitim, bireyin hayatındaki en önemli süreçlerden biridir ve
                  bu süreçte onlara rehberlik etmek bizim en büyük tutkumuzdur.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
