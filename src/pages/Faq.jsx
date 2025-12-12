// src/pages/Faq.jsx

import { useState } from "react";

const FAQS = [
  {
    q: "İstanbul Hızlı Okuma Akademisi hangi yaş gruplarına yöneliktir?",
    a: `Platform; ilkokuldan yetişkinlere kadar tüm yaş grupları için bilişsel gelişim ve okuma performansı odaklı modüler programlar sunar.

Her yaş kademesi için ayrı tasarlanan içerikler;
• nöro-gelişim düzeyi,
• kelime işlemleme kapasitesi,
• dikkat süresi,
• çalışma belleği
gibi parametreler dikkate alınarak yapılandırılır.

Bu sayede her öğrenci kendi bilişsel ritmine uygun bir gelişim yolunda ilerler.`,
  },
  {
    q: "Programın süresi ne kadardır?",
    a: `Program, geleneksel “kurs dönemi” yaklaşımından tamamen farklı olarak eğitim öğretim yılına entegre edilmiş bir dijital öğrenme modeli sunar.

Süre;
• kurumun akademik takvimine,
• sınıf seviyelerine,
• gelişim hedeflerine
göre özel olarak planlanır.

Platform, öğrenciyi yıl boyunca kesintisiz takip eden bir yapı sunduğundan gelişim döngüsü dönemlik veya yıllık olarak sürdürülebilir hâle gelir.`,
  },
  {
    q: "Eğitim yüz yüze mi, online mı, hibrit mi uygulanır?",
    a: `Program tüm modellerle uyumludur.

Dijital altyapı;
• yüz yüze uygulama,
• dijital öğrenme,
• hibrit model (yüz yüze + dijital eş zamanlı)
destekler.

Öğrenciler bireysel egzersizlere platform üzerinden erişirken öğretmenler sınıf içi uygulamalarla pedagojik pekiştirme sağlar. Bu yapı öğrenme verimliliğini belirgin biçimde artırır.`,
  },
  {
    q: "Program sadece hızlı okumayı mı geliştirir?",
    a: `Hayır. Platform okuma becerisini bütünsel bir bilişsel performans sistemi olarak ele alır.

Eş zamanlı geliştirilen alanlar:
• okuma hızı
• anlama derinliği
• odaklanma süresi
• dikkat yönetimi
• üstbiliş (metacognition)
• hafıza süreçleri
• kelime işlemleme kapasitesi
• zaman yönetimi

Hızlı okuma, sistem içinde tek başına bir hedef değil; öğrenme mimarisini optimize eden bir araçtır.`,
  },
  {
    q: "Platform Milli Eğitim müfredatıyla uyumlu mu?",
    a: `Evet.

Tüm içerikler;
• Türkiye Yüzyılı Maarif Modeli
• yıllık kazanımlar
• ders temaları
• değerler eğitimi
• okuma türleri
• eğitim öğretim haftaları
ile tam uyumlu şekilde tasarlanmıştır.

Öğrenci hem müfredat metinleriyle çalışır hem de bilişsel becerilerini gerçek akademik içerikler üzerinden geliştirir.`,
  },
  {
    q: "Dijital platform öğrenciyi nasıl kişiselleştirilmiş biçimde takip ediyor?",
    a: `Platform, öğrencinin performansını yapay zekâ destekli analitik sistemlerle izler:

• okuma hızı
• anlama yüzdesi
• dikkat süresi
• egzersiz doğruluk oranı
• kelime kapasitesi
• gelişim eğrileri

Her egzersizden sonra sistem anlık dönüt üretir ve algoritma içerik zorluğunu, metin seviyesini ve egzersiz ritmini otomatik olarak optimize eder.

Sonuç: tamamen kişiye özel bir öğrenme modeli.`,
  },
  {
    q: "Veliler çocuklarının gelişimini nasıl takip ediyor?",
    a: `Veli paneli; grafikler, analizler ve haftalık raporlarla öğrencinin gelişimini şeffaf biçimde sunar.

Veliler;
• hız değişimini
• anlama gelişimini
• dikkat performansını
• ödev tamamlama oranlarını
• genel eğilim analizlerini
anlık olarak izleyebilir.`,
  },
  {
    q: "Öğretmen ve kurumlara hangi raporlar sunuluyor?",
    a: `Kurum paneli, tüm öğrencileri makro ölçekte takip edebilen profesyonel bir yönetim sistemidir.

Sunulan raporlar:
• sınıf bazlı gelişim analizi
• şube karşılaştırmaları
• okul genelinde okuma performansı haritası
• öğrenci bireysel profilleri
• yıllık gelişim grafikleri
• modül tamamlama istatistikleri`,
  },
  {
    q: "Platforma hangi cihazlardan erişilebilir?",
    a: `Sistem;
• bilgisayar
• tablet
• akıllı telefon
üzerinden 7/24 senkronize erişime uygundur.

Tüm ilerleme verileri cihazlar arasında otomatik olarak eşitlenir.`,
  },
  {
    q: "Program sınavlara nasıl katkı sağlar?",
    a: `Platform, hızlı okuma becerisini yeni nesil soru türlerine entegre eder.

Öğrenciler;
• paragraf analiz hızını artırır
• grafik–tablo yorumlamayı geliştirir
• işlemleme sorularında dikkat yönetimini güçlendirir
• zaman baskısı altında bilgi ayıklama becerisi kazanır

Sonuç: doğrudan sınav performans artışı.`,
  },
  {
    q: "Yetişkinler ve iş profesyonelleri programa katılabilir mi?",
    a: `Evet. Platform yetişkinlere özel modüller sunar.

Bu modüller;
• rapor–doküman–e-posta okuma hızını artırır
• zihinsel esnekliği ve karar alma hızını geliştirir
• bilişsel yükü azaltır
• iş verimliliğini yükseltir

Kurumlar, çalışanlarını toplu şekilde sisteme dahil edebilir.`,
  },
  {
    q: "Kurum olarak nasıl entegre olabiliriz?",
    a: `Kurumlar sisteme toplu kullanıcı olarak dahil edilir.

Entegrasyon kapsamı:
• öğretmen paneli
• öğrenci paneli
• yönetim paneli
• yıllık akademik planlama
• gelişim raporlaması
• modül dağılımı

Süreç kurum hedeflerine göre tasarlanır ve Akademi ekibi tarafından yıl boyunca desteklenir.`,
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
            S.S.S
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Sıkça Sorulan Sorular
          </h1>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 font-semibold text-slate-800"
              >
                {item.q}
              </button>

              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-slate-700 whitespace-pre-line">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
