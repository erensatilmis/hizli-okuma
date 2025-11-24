const ADVANTAGES = [
  {
    title: "Kişiselleştirilmiş Eğitim",
    description:
      "Her öğrencinin okuma hızı, anlama düzeyi ve hedeflerine göre uyarlanan dinamik içerikler.",
    icon: "🎯",
  },
  {
    title: "7/24 Erişim",
    description:
      "İstediğiniz zaman, istediğiniz yerden; bilgisayar, tablet ya da telefonla eğitime devam edin.",
    icon: "🕒",
  },
  {
    title: "Veri Odaklı Takip",
    description:
      "Okuma hızı, anlama oranı ve ilerleme grafikleri ile gelişiminizi ayrıntılı olarak takip edin.",
    icon: "📊",
  },
  {
    title: "Eğlenceli İçerikler",
    description:
      "Oyunlaştırılmış egzersizler ve interaktif etkinliklerle öğrencilerin motivasyonunu yüksek tutun.",
    icon: "🎮",
  },
  {
    title: "Uzman Eğitmenler",
    description:
      "Alanında uzman eğitmenler tarafından hazırlanmış program ve içeriklere güvenle erişin.",
    icon: "👩‍🏫",
  },
  {
    title: "Güvenli ve Kolay",
    description:
      "Kolay kullanılabilir arayüz ve güvenli altyapı ile hem öğrenciler hem veliler için konforlu bir deneyim.",
    icon: "🔒",
  },
  {
    title: "Güncel Materyaller",
    description:
      "Müfredata ve çağın ihtiyaçlarına uygun olarak düzenli güncellenen dijital materyaller.",
    icon: "📚",
  },
  {
    title: "Zaman ve Mekân Tasarrufu",
    description:
      "Fiziksel sınıf sınırlarını aşan çevrim içi altyapı ile zamanı daha verimli kullanın.",
    icon: "⏱️",
  },
];

const CORE_BENEFITS = [
  {
    no: "01",
    title: "Hızlı Okuma Yeteneği",
    description:
      "Okuma hızınızı artırarak daha kısa sürede daha fazla içerik tüketmenizi sağlar.",
  },
  {
    no: "02",
    title: "Yüksek Anlama Becerisi",
    description:
      "Metinlere daha derin odaklanarak anlama oranını yükseltir ve daha kalıcı öğrenme sağlar.",
  },
  {
    no: "03",
    title: "Odaklanma Gücünün Artırılması",
    description:
      "Zihinsel dağınıklığı azaltır, okuma sırasında dikkati uzun süre korumanıza yardımcı olur.",
  },
  {
    no: "04",
    title: "Zaman Yönetimi",
    description:
      "Daha kısa sürede daha fazla bilgiye erişerek çalışma verimliliğinizi artırır.",
  },
  {
    no: "05",
    title: "Hafıza Güçlendirme Teknikleri",
    description:
      "Bilgiyi hafızada daha uzun süre tutmaya yardımcı olan profesyonel teknikler sunar.",
  },
  {
    no: "06",
    title: "Görsel Algı Güçlendirme",
    description:
      "Göz kaslarını ve algıyı geliştirerek daha hızlı ve daha akıcı okuma becerisi kazandırır.",
  },
  {
    no: "07",
    title: "Zihin Haritalama Teknikleri",
    description:
      "Bilgileri görselleştirerek konuları daha iyi kavramayı ve düzenlemeyi sağlar.",
  },
  {
    no: "08",
    title: "Akademik ve Mesleki Başarı",
    description:
      "Okuma ve anlama becerilerinin tümü, akademik performansınız ve iş hayatındaki başarınızı doğrudan destekler.",
  },
];

const TESTIMONIALS = [
  {
    name: "Selen Önder",
    country: "Türkiye",
    photo: "/images/selen-onder.jpeg",
    text: `“Teknolojinin hayatımızın her alanına girmiş olduğu bu dönemde okumanın önemini daha da çok anlıyoruz aslında. Bir de değişen sınav sistemleri hızlı okumanın, okuduğunu anlamanın ne kadar değerli olduğunu bizlere gösteriyor. Sevgili Gül Öğretmenimiz ile hızlı okumanın önemini bir kez daha anladık. İstanbul Hızlı Okuma ve Gül Öğretmenimiz sayesinde kızım okumada hızlandı ve okuduklarını daha iyi anlamaya başladı. Destekleriniz için hepinize teşekkür ederiz.”`,
  },
  {
    name: "Bahar Şen",
    country: "Türkiye",
    photos: ["/images/bahar-sen.jpeg", "/images/bahar-sen-2.jpeg"],
    text: `“Biz Kerem ve Demir olarak İstanbul Hızlı Okuma Akademisi’nden aldığımız eğitimle ilgili düşüncelerimizi paylaşmak istiyoruz. Bu egzersizler okuma alışkanlıklarımızı tamamen değiştirdi! Eğitim boyunca hızlı okuma tekniklerini öğrenirken aynı zamanda anlama oranımızı nasıl artırabileceğimizi de keşfettik. Önceleri bir kitabı bitirmek günlerimizi alırken, şimdi çok daha kısa sürede hem daha fazla okuyor hem de okuduklarımızı daha iyi kavrıyoruz. İstanbul Hızlı Okuma Akademisi’ne bu fırsatı sundukları ve bize destek oldukları için çok teşekkür ederiz. Bu eğitimi düşünen herkese gönül rahatlığıyla tavsiye ediyoruz.”`,
  },
  {
    name: "Hüsra Özdemir",
    country: "Türkiye",
    photo: "/images/husra-ozdemir.jpeg",
    text: `“Oğlum Buğra, İstanbul Hızlı Okuma Akademisi’ne başlamadan önce okumaya karşı çok ilgili olmasına rağmen, okuma hızında ve anlama kapasitesinde bazı zorluklar yaşıyordu. Özellikle sınav hazırlık sürecinde uzun metinleri okurken zaman yönetimi konusunda sıkıntı çekiyor ve bu da stresine yol açıyordu. Eğitimin ilk haftasında Buğra’nın okuma hızında gözle görülür bir artış oldu. Okuduğu metinleri daha hızlı bitiriyor, ancak en önemlisi, anladığı detayları çok daha etkili bir şekilde hatırlıyordu. Akademide kullanılan teknikler ve öğretmenlerin profesyonel yaklaşımı, Buğra’nın sadece okuma hızını değil, aynı zamanda ders çalışma motivasyonunu artırdı. Bir diğer dikkat çekici nokta, eğitim sırasında verilen bireysel geri bildirimler oldu. Akademideki eğitmenler, Buğra’nın güçlü ve zayıf yönlerini fark ederek ona özel bir çalışma planı oluşturdu. Bu kişiselleştirilmiş yaklaşım sayesinde Buğra, kısa sürede hızla ilerledi ve kendini geliştirdi. Şimdi Buğra, kitap okuma alışkanlığını keyifli bir hale getirdi ve sınavlardaki performansı da ciddi anlamda iyileşti. Özellikle zaman yönetimi konusunda sağladığı gelişim, hem Buğra’nın hem de bizim üzerimizden büyük bir stresi aldı. İstanbul Hızlı Okuma Akademisi’ne sonsuz teşekkür ederiz. Buğra’nın hayallerine bir adım daha yaklaşmasına destek olan böyle bir kurumu tanımış olmaktan büyük bir mutluluk duyuyoruz.”`,
  },
];

const CONTENT_ITEMS = [
  {
    title: "Okuma -hazırbulunuşluk- ölçümü",
    description:
      "Programın başında öğrencinin mevcut okuma hızı, anlama düzeyi ve dikkat süresi ölçülür. Böylece eğitim, tamamen öğrencinin ihtiyaçlarına göre şekillendirilir.",
  },
  {
    title: "Hızlı okumaya neden ihtiyaç duyarız?",
    description:
      "Günümüzde artan bilgi yoğunluğu ve sınav baskısı karşısında hızlı okumanın neden kritik olduğu, somut örnekler üzerinden anlatılır.",
  },
  {
    title: "Öğrenmeyi öğrenme",
    description:
      "Beynin öğrenme süreçleri, kalıcı öğrenmenin temel prensipleri ve verimli çalışma yöntemleri aktarılır. Öğrenciye, nasıl daha etkili çalışabileceğini gösterir.",
  },
  {
    title: "Amaca yönelik okuma biçimleri",
    description:
      "Ders çalışmak, sınava hazırlanmak, araştırma yapmak veya keyif için okumak gibi farklı amaçlar için farklı okuma teknikleri öğretilir.",
  },
  {
    title: "Nasıl okuyoruz? Nasıl okumalıyız?",
    description:
      "Öğrencinin mevcut okuma alışkanlıkları analiz edilir; satır atlama, geri dönüşler, iç ses gibi hız düşüren alışkanlıklar tespit edilip düzeltilir.",
  },
  {
    title:
      "Hızlı okumanın önündeki engeller ve bu engellerden kurtulma yolları nelerdir?",
    description:
      "Dikkat dağınıklığı, kaygı, iç ses ve motivasyon eksikliği gibi engellerin sebepleri konuşulur ve bunları azaltmaya yönelik pratik çözümler sunulur.",
  },
  {
    title: "Hızlı okuma egzersiz ve uygulamaları",
    description:
      "Göz tarama alanını genişleten, satır takibini hızlandıran ve hız–anlama dengesini koruyan özel egzersizler uygulanır.",
  },
  {
    title: "Odaklanma egzersiz ve uygulamaları",
    description:
      "Dikkati tek noktada tutma, dağılan dikkati toparlama ve zihinsel gürültüyü azaltmaya yardımcı odak çalışmaları yapılır.",
  },
  {
    title: "Göz kaslarının gelişimi ve esnetilmesine yönelik egzersizler",
    description:
      "Göz kaslarını güçlendiren, yatay-dikey taramayı hızlandıran ve görsel algıyı destekleyen egzersizler uygulanır.",
  },
  {
    title: "Öğrencinin içsel motivasyonunun sağlanması",
    description:
      "Öğrencinin hedefleri ve güçlü yönleri üzerinde durularak, süreç boyunca motive kalmasını sağlayacak içsel motivasyon çalışmaları yapılır.",
  },
  {
    title: "Ödevlendirme ve elbette ödev takibi",
    description:
      "Her ders sonrası verilen egzersizler bir sonraki derste kontrol edilir. Böylece öğrenci yalnız bırakılmaz ve gelişim düzenli olarak takip edilir.",
  },
  {
    title:
      "Öğrenci sınav sürecinde ise yeni nesil sorulara hızlı okuma becerisini nasıl uygulayacağı",
    description:
      "Yeni nesil soru tipleri üzerinden örnekler çözülerek, hızlı okuma becerisinin paragraf, grafik ve tablo sorularında nasıl kullanılacağı öğretilir.",
  },
  {
    title: "Hangi soru tipine nasıl bir yaklaşım sergilenmesi gerektiği",
    description:
      "Türkçe, sosyal, sayısal ve sözel alanlardaki farklı soru tipleri için ayrı çözüm stratejileri ve okuma teknikleri anlatılır.",
  },
  {
    title: "Türkçenin geliştirilmesi, kelime dağarcığının zenginleştirilmesi",
    description:
      "Kelime hazinesini güçlendiren etkinlikler, okuma önerileri ve bağlamdan anlam çıkarma çalışmaları yapılır.",
  },
  {
    title: "Atasözü ve deyimlere yönelik kazanım ve etkinlikler",
    description:
      "Atasözü ve deyimlerin anlamı, kullanım alanları ve günlük hayattaki karşılıkları üzerinde durulur; etkinliklerle pekiştirilir.",
  },
  {
    title: "Sınav kaygısı ile baş etme yöntemleri",
    description:
      "Sınav öncesi ve sırasında kaygıyı azaltmaya yardımcı nefes egzersizleri, düşünce yönetimi ve basit rahatlama teknikleri öğretilir.",
  },
];

const GOALS = [
  {
    title: "Okuma Hızını Artırmak",
    desc: "Bireylerin kelime ve cümleleri daha hızlı algılayarak okuma hızlarını artırmalarını sağlamak.",
  },
  {
    title: "Anlama Düzeyini Arttırmak",
    desc: "Okuma hızını artırırken aynı zamanda metnin genel anlamını ve detaylarını kavrama becerisini geliştirmek.",
  },
  {
    title: "Dikkat ve Konsantrasyonu Geliştirmek",
    desc: "Okuma sırasında dikkat dağınıklığını azaltarak konsantrasyon seviyesini yükseltmek.",
  },
  {
    title: "Kelime Dağarcığını Geliştirmek",
    desc: "Daha fazla kelimeyi tanımak ve bağlama göre hızlı anlam çıkarma becerisini geliştirmek.",
  },
  {
    title: "Zihinsel Haritalama",
    desc: "Metindeki ana fikir ve önemli noktaları zihinde canlandırarak bilgiyi etkili bir şekilde organize etmek.",
  },
  {
    title: "Zaman Yönetimi",
    desc: "Okuma süresini daha verimli kullanarak daha kısa sürede daha fazla bilgi edinmek.",
  },
];

const METHODS = [
  {
    title: "Yerinde ve Online Eğitim Seçenekleri",
    desc: "Kurslarımız, İstanbul Büyükçekmece’de şubemizde yüz yüze ya da online olarak; grup eğitimleri veya bireysel eğitim şeklinde, tercihe göre düzenlenmektedir.",
    tag: "Yüz yüze + Online",
  },
  {
    title: "32 Saatlik Hibrit Program",
    desc: "Toplam 32 saatlik eğitim; 16 canlı ders ile 16 saatlik dijital platform üzerinden yapılan egzersiz ve ödevlerden oluşan hibrit bir yapıdadır.",
    tag: "16 Canlı Ders + 16 Saat Dijital",
  },
  {
    title: "Ödev Takibi ve Veli İletişimi",
    desc: "Eğitim sürecinde ödev takibi düzenli olarak yapılır; eğitmen-veli iletişimi, öğrencinin sürece aktif katılımını ve gelişimini destekleyecek şekilde yapılandırılır.",
    tag: "Sürekli Takip",
  },
  {
    title: "Öğrenciye Özel Okuma Gelişim Karnesi",
    desc: "Eğitimin sonunda her öğrenci için, okuma hızını ve anlama düzeyindeki ilerlemeyi gösteren kişiye özel bir okuma gelişim karnesi hazırlanır.",
    tag: "Kişiselleştirilmiş Değerlendirme",
  },
];

const PROGRAMS = [
  {
    category: "İlkokul Öğrencileri İçin",
    title: "Akıcı Okuma ve Etkin Anlama Programı",
    desc: "İlkokul öğrencilerinin okuma hızını ve okuduğunu anlama becerisini birlikte geliştiren, temel okuma becerilerinin güçlendirilmesine yönelik program.",
    tag: "İlkokul",
  },
  {
    category: "Ortaokul Öğrencileri İçin",
    title: "Anlayarak Etkin Okuma ve Test Teknikleri",
    desc: "Ortaokul öğrencilerinin hem okuma hem sınav becerilerini artırmak üzere test çözme stratejileriyle desteklenen etkin okuma programı.",
    tag: "Ortaokul",
  },
  {
    category: "Sınav Hazırlık Öğrencileri İçin",
    title: "LGS, TYT, AYT, YKS, ALES, KPSS Sınav Odaklı Hızlı Okuma",
    desc: "Sınavlarda zaman yönetimi, okuma hızı ve anlama becerilerini artırmaya yönelik özel tekniklerin uygulandığı sınav odaklı hızlı okuma programı.",
    tag: "Sınav Hazırlık",
  },
  {
    category: "Yetişkinler ve Kurumlar İçin",
    title: "Bireysel veya Kurumsal Hızlı Okuma Programları",
    desc: "Yetişkin bireyler ve kurumlar için ihtiyaçlara göre kişiselleştirilen hızlı okuma, odaklanma ve verimlilik odaklı eğitim programları.",
    tag: "Yetişkin / Kurum",
  },
];

export {
  ADVANTAGES,
  CORE_BENEFITS,
  TESTIMONIALS,
  CONTENT_ITEMS,
  GOALS,
  METHODS,
  PROGRAMS,
};
