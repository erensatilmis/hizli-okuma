const ADVANTAGES = [
  {
    title: "Kişiselleştirilmiş Eğitim",
    description:
      "Platformumuz; her öğrencinin bilişsel profiline, okuma hızına, anlama düzeyine ve gelişim eğrisine göre otomatik olarak uyarlanan dinamik bir öğrenme akışı sunar. Yapay zekâ destekli analiz sistemi; güçlendirilmesi gereken alanları tespit eder, hedef odaklı içerikler üretir ve öğrencinin hızına uygun bireysel bir eğitim yolu oluşturur. Bireyi, nöro-bilişsel okuma hızı, anlama düzeyi ve odaklanma kapasitesine göre dinamik olarak uyarlanan algoritmik temelli içeriklerle destekler. Bu süreçte zihinsel haritalama, görsel algı gelişimini maksimize eden, tekil öğrenme profiline odaklı, özel müfredat optimizasyonu sayesinde her öğrenci kendi öğrenme ritmine göre en etkili gelişimi yaşar.",
    icon: "🎯",
  },
  {
    title: "7/24 Erişilebilirlik ve Senkronizasyon",
    description:
      "Dijital platforma günün her saatinde; bilgisayar, tablet veya akıllı telefon üzerinden erişim sağlanabilir. Öğrencinin ilerlemesi tüm cihazlar arasında anlık olarak senkronize edilir, böylece öğrenme deneyimi hiç kesilmeden devam eder. Evde, okulda veya yolda tüm eğitim içerikleri her zaman ulaşılabilir durumdadır. Bu sayede öğrenme sürekliliği korunur.",
    icon: "🕒",
  },
  {
    title: "Veri Odaklı Takip ve Analiz",
    description:
      "Öğrencinin okuma hızı, anlama oranı, dikkat performansı ve egzersiz başarı yüzdeleri sistem tarafından sürekli izlenir. Bu kritik performans metriklerinin ilerleme grafikleri, analitik raporlarla takip edilerek ebeveyn ve eğitmenlere diagnostik raporlar şeklinde sunulur. Gelişimin her adımı ölçülebilir, şeffaf ve takip edilebilir hâle gelir. Bu yapı, öğrencinin akademik başarısındaki ilerlemeyi somut ve bilimsel verilerle izlenebilir kılar.",
    icon: "📊",
  },
  {
    title: "Oyunlaştırılmış İçerikler",
    description:
      "Oyunlaştırılmış egzersizler, hız yarışmaları, dikkat odaklı mini oyunlar ve interaktif metin çalışmaları sayesinde öğrenciler yüksek motivasyonla öğrenme sürecine katılır. Öğrencinin motivasyon katsayısını ve öğrenmeye bağlılığını sürekli yüksek tutan didaktik tasarım; eğitimi zorunluluk olmaktan çıkararak keyifli, akıcı ve merak uyandıran bir öğrenme deneyimine dönüştürür.",
    icon: "🎮",
  },
  {
    title: "Uzman Eğitmenler",
    description:
      "Platformun tüm içerikleri; hızlı okuma, bilişsel gelişim, dil bilimi ve öğrenme psikolojisi alanlarında uzman eğitmenler tarafından tasarlanmıştır. Eğitim süreci bilimsel araştırmalar, modern pedagojik yaklaşımlar ve uluslararası hızlı okuma standartları referans alınarak yapılandırılmıştır.",
    icon: "👩‍🏫",
  },
  {
    title: "Güvenli ve Kolay Kullanılabilir Arayüz",
    description:
      "Öğrenci, veli ve eğitmen paneli; kullanıcı dostu tasarımı ve sade navigasyon yapısıyla herkes için rahat bir kullanım sunar. Tüm veriler güvenli sunucularda saklanır ve gelişmiş güvenlik protokolleriyle korunur. Platform, kesintisiz ve güvenilir bir dijital eğitim deneyimi oluşturmak üzere optimize edilmiştir.",
    icon: "🔒",
  },
  {
    title: "Güncel Materyaller",
    description:
      "Milli Eğitim ve ÖSYM (YKS, LGS, ALES vb.) güncellemelerine, dünya çapındaki bilişsel bilim ve eğitim teknolojileri trendlerine uygun olarak güncellenen bir öğrenmeyi öğrenme platformudur. Zenginleştirilmiş dijital kütüphaneyi de kapsayan sistem; öğrencinin okuma seviyesine, yaş grubuna ve gelişim ihtiyacına göre düzenli olarak yenilenen metinler, alıştırmalar ve görsel içerikler sunar.",
    icon: "📚",
  },
  {
    title: "Zaman ve Mekân Optimizasyonu",
    description:
      "Bireysel tempoya uygun çalışma imkânı sunan dijital altyapı, öğrencinin öğrenme sürecini fiziksel sınıf sınırlarının dışına taşır. Evde, okulda veya yolculuk sırasında kesintisiz erişim sağlayarak seyahat ve zaman kaybını ortadan kaldırır. Bu esneklik, öğrencinin bilişsel yükünü azaltıp verimliliğini maksimum seviyeye çıkarırken hem öğrenci hem de veli için büyük bir konfor sağlar.",
    icon: "⏱️",
  },
];

const CORE_BENEFITS = [
  {
    no: "01",
    title: "Hızlı Okuma Yeteneği",
    description:
      "Metinleri daha geniş kelime grupları hâlinde algılama ve göz hareketlerini optimize etmeye yönelik gelişmiş hızlı okuma teknikleri uygulanır. Bu yaklaşım, öğrencilerin okuma hızını doğal ve sürdürülebilir bir şekilde artırırken metne hâkimiyetlerini güçlendirir. Böylelikle derslerde, sınavlarda ve günlük akademik süreçlerde bilgiye çok daha hızlı erişim sağlanır.",
  },
  {
    no: "02",
    title: "Yüksek Anlama Becerisi",
    description:
      "Program; semantik analiz, bağlamsal çıkarım, mantık akışı oluşturma ve kavramlar arası ilişki kurma becerisini geliştiren derin okuma stratejilerine dayanır. Öğrencilerin paragraf metinlerini anlamlandırma, ana–yardımcı fikir ayrımı yapma ve metni bütüncül şekilde kavrama becerileri belirgin biçimde güçlenir. Bu gelişim, tüm derslerde okuduğunu anlama performansını yükseltir.",
  },
  {
    no: "03",
    title: "Odaklanma Gücünün Artırılması",
    description:
      "Nörobilişsel temelli dikkat egzersizleri ile zihinsel dağınıklık azaltılır, öğrencinin odaklanma süresi uzatılır ve bilişsel dayanıklılığı desteklenir. Bu beceri özellikle uzun metinlerde, yoğun içeriklerde ve sınav performansında önemli bir avantaj sağlar. Düzenli uygulamalar, öğrencinin tek bir göreve istikrarlı biçimde odaklanabilmesini kolaylaştırır.",
  },
  {
    no: "04",
    title: "Zaman Yönetimi",
    description:
      "Öğrencilerin sınavlarda ve ders çalışmalarında zaman kullanımını optimize eden stratejiler öğretilir. Kritik bilgiyi ayıklama, metni hızlı tarama, gereksiz detayları filtreleme ve etkili bir okuma temposu oluşturma becerileri kazandırılır. Bu yetkinlikler, sınav sürelerinin daha verimli kullanılmasına ve çalışma rutinlerinin planlı yürütülmesine katkı sağlar.",
  },
  {
    no: "05",
    title: "Hafıza Güçlendirme Teknikleri",
    description:
      "Görsel kodlama, ilişkilendirme, mekânsal yerleştirme ve sıralama gibi hafızayı destekleyen modern öğrenme teknikleri uygulanır. Öğrenciler öğrendikleri bilgileri daha uzun süre hatırlayabilir, gerektiğinde hızlıca geri çağırabilir ve ders performanslarını yapısal olarak güçlendirebilir. Bu yaklaşım, çoklu ders yükü olan öğrenciler için önemli bir avantaj sağlar.",
  },
  {
    no: "06",
    title: "Görsel Algı Güçlendirme",
    description:
      "Göz–beyin koordinasyonunu geliştiren egzersizlerle satır takibi, kelime bloklarını algılama ve görsel işlemleme hızında belirgin bir artış sağlanır. Bu gelişim, öğrencilerin akıcı okuma becerisini yükseltirken metinlerdeki detayları daha hızlı seçmelerine yardımcı olur. Özellikle okuma sırasında satır kaydırma veya hız düşüklüğü yaşayan öğrenciler için yüksek etkili bir destek sunar.",
  },
  {
    no: "07",
    title: "Zihin Haritalama Teknikleri",
    description:
      "Bilgilerin hiyerarşik biçimde düzenlenmesi, ana–yardımcı fikir ayrımı yapılması ve kavram ilişkilerinin görselleştirilmesine dayanan bu teknik, öğrenme süreçlerini sistematik hâle getirir. Çalışma notlarının, ders içeriklerinin ve sınav konularının daha organize bir yapıya kavuşmasını sağlar. Uzun konuları sadeleştirme ve verimli çalışma alışkanlığı kazandırma açısından etkilidir.",
  },
  {
    no: "08",
    title: "Profesyonel ve Akademik Başarı",
    description:
      "Yoğun bilgi akışıyla çalışan profesyoneller için program; bilgiyi daha hızlı işleme, önemli veriyi kısa sürede ayıklama ve doküman trafiğini verimli yönetme becerileri kazandırır.\n\n" +
      "Bu gelişim profesyoneller için:\n" +
      "• Toplantı ve sunum hazırlık süresinin kısalmasını,\n" +
      "• E-posta ve doküman okuma hızının artmasını,\n" +
      "• Karar alma süreçlerinin daha hızlı ve net ilerlemesini,\n" +
      "• Bilgi yükünün azalmasını ve zihinsel enerjinin korunmasını,\n" +
      "• Günlük iş verimliliğinde belirgin bir yükselişi beraberinde getirir.\n\n" +
      "Öğrenciler için ise bu beceriler; derslerde, sınavlarda ve akademik süreçlerde daha yüksek performans ve sürdürülebilir başarıya dönüşür.",
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
    title: "Okuma – Hazır Bulunuşluk Ölçümü",
    description:
      "Programın başlangıcında öğrencinin mevcut okuma hızı, anlama düzeyi, kelime işlemleme kapasitesi, göz tarama alışkanlıkları ve dikkat süresi bilimsel ölçüm araçlarıyla analiz edilir. Bu ölçüm, öğrencinin bireysel profilini netleştirir ve eğitim süreci tamamen öğrenciye özel olarak şekillendirilir.",
  },
  {
    title: "Hızlı Okumaya Neden İhtiyaç Duyarız?",
    description:
      "Bilgi çağında her gün binlerce kelime ile yüzleşiyoruz. Akademik başarı, sınav performansı, mesleki verimlilik ve günlük yaşamda doğru karar verme; bilgiyi hızlı işleme becerisiyle doğrudan ilişkilidir. Bu bölümde hızlı okumanın neden modern bir zorunluluk hâline geldiği bilimsel temelli örneklerle açıklanır.",
  },
  {
    title: "Öğrenmeyi Öğrenme",
    description:
      "Eğitim sürecinin temel yapı taşlarından biri olan öğrenmeyi öğrenme; öğrencinin bilgiyi doğru alma, anlamlandırma, depolama ve gerektiğinde etkili biçimde geri çağırma becerilerini geliştirir. Bu bölümde öğrenci, kendi bilişsel mekanizmasını tanır ve öğrenme verimliliğini artıracak teknikleri uygulamayı öğrenir.",
  },
  {
    title: "Amaca Yönelik Okuma Biçimleri",
    description:
      "Her metnin aynı hızda ve aynı teknikle okunamayacağı öğretilir. Öğrenci; hızlı tarama, seçici okuma, akademik okuma, sınav odaklı okuma ve analitik okuma gibi farklı okuma stillerini öğrenir ve hangi metinde hangi yaklaşımı kullanması gerektiğini deneyimleyerek kavrar.",
  },
  {
    title: "Nasıl Okuyoruz? Nasıl Okumalıyız?",
    description:
      "Okuma sırasında beynin, gözlerin ve çalışma belleğinin nasıl işlediği açıklanır. İç seslendirme, geri dönüşler ve kelime kelime okuma gibi yanlış alışkanlıkların farkına varılır. Daha hızlı ve etkili okuyabilmek için blok okuma, takistoskop ve ritmik odaklama gibi doğru teknikler öğretilir.",
  },
  {
    title:
      "Hızlı Okumanın Önündeki Engeller ve Bu Engellerden Kurtulma Yolları Nelerdir?",
    description:
      "Okuma hızını ve anlama verimliliğini düşüren bilişsel ve fiziksel engeller analiz edilir: iç seslendirme, dar görüş alanı, düşük konsantrasyon, kaygı, motivasyon eksikliği ve yanlış okuma alışkanlıkları. Her engel için öğrenciye özel çözümler ve egzersizler uygulanır.",
  },
  {
    title: "Hızlı Okuma Egzersizleri ve Uygulamaları",
    description:
      "Programın pratik uygulama alanı olan bu bölümde; göz kaslarını güçlendiren, görüş alanını genişleten, satır takibini hızlandıran ve kelime tanıma sürelerini kısaltan dijital egzersizler uygulanır. Egzersizler, kişiye özel hız artışı sağlayacak biçimde sistem tarafından uyarlanır.",
  },
  {
    title: "Odaklanma Egzersizleri ve Uygulamaları",
    description:
      "Okuma sırasında dikkat dağınıklığını azaltmak ve uzun süreli zihinsel odaklanmayı artırmak için hazırlanmış özel egzersizler uygulanır. Bu bölüm özellikle sınav sürecindeki öğrencilerin performansını belirgin biçimde yükseltir.",
  },
  {
    title: "Göz Kaslarının Gelişimi ve Esnetilmesine Yönelik Egzersizler",
    description:
      "Hızlı okuma becerisinin temelini oluşturan göz kasları, bilimsel prensiplere dayanan profesyonel egzersizlerle güçlendirilir. Bu uygulamalar gözün satırlar üzerinde daha hızlı ve akıcı hareket etmesini sağlarken göz yorgunluğunu da azaltır.",
  },
  {
    title: "Öğrencinin İçsel Motivasyonunun Sağlanması",
    description:
      "Öğrencinin öğrenme sürecine aktif katılım göstermesi için motivasyon kaynakları belirlenir. Hedef koyma, gelişimi takip etme, başarı grafiğini görme ve öz düzenleme becerileri geliştirilir. Bu bölüm, eğitimin sürdürülebilirliğini sağlar.",
  },
  {
    title: "Ödevlendirme ve Elbette Ödev Takibi",
    description:
      "Platform, öğrenciye özel dijital ödevler sunar ve tüm ödevler sistem tarafından otomatik olarak takip edilir. Ödev süreleri, yapılan hatalar, hız ilerlemeleri ve performans grafikleri hem eğitmen hem veli tarafından şeffaf biçimde izlenebilir.",
  },
  {
    title:
      "Öğrenci Sınav Sürecinde İse Yeni Nesil Sorulara Hızlı Okuma Becerisini Nasıl Uygulayacağı",
    description:
      "Hızlı okuma becerisinin sınavlardaki yeni nesil soru tiplerine entegre edilmesi sağlanır. Paragraf soruları, grafik ve tablo yorumlama, görsel okuma ve akıl yürütme sorularında hız ve algı yönetimi öğretilir.",
  },
  {
    title: "Hangi Soru Tipine Nasıl Bir Yaklaşım Sergilememiz Gerektiği",
    description:
      "Her soru tipi kendine özgü bir okuma, analiz ve çözüm stratejisi gerektirir. Çoktan seçmeli, yorumlama, karşılaştırma, çıkarım, grafik okuma ve akıl yürütme sorularına yönelik etkili yaklaşım teknikleri öğretilir.",
  },
  {
    title: "Türkçenin Geliştirilmesi, Kelime Dağarcığının Zenginleştirilmesi",
    description:
      "Kelime bilgisi; hızlı okuma, odaklanma ve anlama becerilerinin merkezindedir. Bu bölümde öğrencinin aktif kelime hazinesi genişletilir, bağlamdan anlam çıkarma becerisi güçlendirilir ve Türkçe düşünme–ifade etme kapasitesi geliştirilir.",
  },
];

const GOALS = [
  {
    title: "Okuma Hızını Artırmak",
    bullets: [
      "Öğrencinin başlangıç okuma hızı dijital ölçüm araçları ile analiz edilir.",
      "Göz kaslarını güçlendiren ve satır takibini hızlandıran özel egzersizler uygulanır.",
      "Sistem, hız verilerini gerçek zamanlı işleyerek öğrenciye uygun metin seviyelerini otomatik olarak belirler.",
      "Hız artışı kalıcı hâle getirilir ve gelişim grafiklerle düzenli olarak raporlanır.",
    ],
  },
  {
    title: "Anlama Düzeyini Artırmak",
    bullets: [
      "Ana fikir bulma, çıkarım yapma ve metin ilişkilerini çözme gibi üst düzey bilişsel beceriler geliştirilir.",
      "Her metin sonrasında anlama performansı dijital olarak ölçülür ve analiz edilir.",
      "Sistem, öğrencinin anlama ihtiyaçlarına göre kişiselleştirilmiş içerik akışı sunar.",
      "Metinlerin daha derinlikli yorumlanabilmesi için yapılandırılmış okuma stratejileri uygulanır.",
    ],
  },
  {
    title: "Dikkat ve Konsantrasyonu Geliştirmek",
    bullets: [
      "Dikkat süresini artıran nörobilim temelli odaklanma egzersizleri kullanılır.",
      "Zamanlı görevler ve dikkat odaklı aktiviteler ile zihinsel dayanıklılık artırılır.",
      "Öğrencinin dikkat dağılımı sistem tarafından izlenir, eksik alanlara özel çalışmalar atanır.",
      "Konsantrasyon seviyesinin yükseltilmesiyle uzun metinlerde verimlilik artırılır.",
    ],
  },
  {
    title: "Kelime Dağarcığını Geliştirmek",
    bullets: [
      "Sistem, öğrencinin kelime seviyesini analiz ederek eksik alanları tespit eder.",
      "Bağlama dayalı kelime öğrenme, eş ve zıt anlam çalışmaları ile kavramsal ilişkiler geliştirilir.",
      "Öğrenciye özel kelime kartları ve tekrar algoritmalarıyla kalıcı öğrenme desteklenir.",
      "Kelime hazinesi gelişimi grafiksel olarak takip edilir ve düzenli raporlanır.",
    ],
  },
  {
    title: "Zihinsel Haritalama",
    bullets: [
      "Metnin ana ve yardımcı fikirleri arasında bağlantı kurmayı sağlayan görsel haritalar oluşturulur.",
      "Bilgiyi organize etme becerisi, öğrencinin kendi dijital haritalarını üretmesiyle güçlenir.",
      "Zihinsel yapılandırmayı destekleyen interaktif araçlar aktif olarak kullanılır.",
      "Bu süreç, kalıcı öğrenmeyi ve akademik başarıyı belirgin biçimde artırır.",
    ],
  },
  {
    title: "Zaman Yönetimi",
    bullets: [
      "Okuma süresini verimli kullanmaya yönelik zamanlı okuma uygulamaları yapılır.",
      "Sınav formatına uygun hızlı okuma ve anlama egzersizleri uygulanır.",
      "Öğrencinin çalışma alışkanlıkları analiz edilerek kişisel zaman planları oluşturulur.",
      "Hız–anlama dengesi optimize edilerek öğrencinin ideal tempo aralığı belirlenir.",
    ],
  },
];

const METHODS = [
  {
    title: "Yerinde ve Online Eğitim Seçenekleri",
    tag: "Yüz Yüze + Online",
    bullets: [
      "Eğitim modeli, kurumun ihtiyacına göre yüz yüze veya online olarak uygulanabilir.",
      "Okullar, öğretmenler veya bireysel eğitmenler; dijital içeriklere 7/24 erişim sağlayarak karma (hibrit) bir yapı kurabilir.",
      "Türkiye’nin her yerinden öğrenciler; sınıf, grup veya bireysel olarak sisteme dahil edilerek eş zamanlı ilerleme takibi yapılabilir.",
      "Yerinde eğitimle dijital platform entegrasyonu birlikte çalışır; tüm öğrenciler tek merkezden takip edilebilir.",
    ],
  },
  {
    title: "Eğitim Öğretim Yılına Entegre Dijital Öğrenme Programı",
    tag: "Maarif Modeli Uyumlu — Yıllık Sistem",
    bullets: [
      "Program, Millî Eğitim Bakanlığının Maarif Modeli, ders kazanımları ve eğitim öğretim haftalarına göre hazırlanmış yıllık öğrenme modüllerine dayanır.",
      "Okuma, anlama, dikkat ve kelime becerileri yıl boyunca düzenli olarak geliştirilir.",
      "Dijital platform, öğrenci performans verilerini analiz ederek modülleri kişiye ve sınıfa özel otomatik olarak uyarlayan dinamik bir yapı sunar.",
      "Kurumların akademik takvimine göre dönemlik, aylık ve haftalık içerikler planlanır; öğretmen ve yöneticiler için gelişim raporları oluşturulur.",
      "Yıl boyunca sürdürülebilir, ölçülebilir ve şeffaf bir okuma gelişim sistemi sağlanır.",
    ],
  },
  {
    title: "Ödev Takibi ve Veli / Yönetici İletişimi",
    tag: "Sürekli Takip",
    bullets: [
      "Öğrencilerin yaptığı tüm egzersizler, okuma metinleri ve anlama testleri sistem tarafından otomatik olarak izlenir.",
      "Öğrenci performansı sisteme anlık veriler olarak kaydedilir.",
      "Kurum yöneticileri; sınıf, şube ve okul bazlı gelişimi tek panelden takip edebilir.",
      "Süreç boyunca düzenli geri bildirim sağlanarak öğrencinin motivasyonu ve öğretmenin yönlendirme gücü desteklenir.",
    ],
  },
  {
    title: "Öğrenciye Özel Okuma Gelişim Karnesi",
    tag: "Kişiselleştirilmiş Değerlendirme",
    bullets: [
      "Yıl sonunda her öğrenci için okuma hızı, anlama düzeyi, kelime kapasitesi, dikkat performansı ve zaman yönetimi becerilerini gösteren kişiye özel bir gelişim karnesi hazırlanır.",
      "Karne; grafikler, analizler ve seviye karşılaştırmaları ile gelişimin somut olarak izlenmesini sağlar.",
      "Öğrenci, yıl boyunca hangi modüllerde güçlendiğini ve hangi alanlarda destek alması gerektiğini net biçimde görür.",
      "Kurumlar için sınıf ve okul bazlı toplu raporlar sunularak akademik kalite yönetimi desteklenir.",
    ],
  },
];

const PROGRAMS = [
  {
    title: "Akıcı Okuma ve Etkin Anlama Programı",
    tag: "İlkokul Öğrencileri için",
    desc: [
      "İlkokul öğrencilerinin okuma hızını, akıcılığını ve metni anlama becerisini eş zamanlı olarak geliştiren temel eğitim programıdır.",
      "Harf–hece–kelime düzeyindeki okuma güçlüklerini belirleyip bireysel ve Türkiye Yüzyılı Maarif Modeli paralelinde bütüncül/bağlamsal çözümler sunan içerikler ve dijital egzersizlerle desteklenir.",
      "Öğrencinin yaş ve gelişim özelliklerine uygun metinlerle okuma alışkanlığını güçlendirir.",
      "Akademik temeli güçlendirirken özgüvenli, düzgün ve hızlı okuma becerisi kazandırmayı hedefler.",
    ],
  },
  {
    title: "Anlayarak Etkin Okuma ve Test Teknikleri",
    tag: "Ortaokul Öğrencileri için",
    desc: [
      "Ortaokul düzeyindeki öğrencilerin hem okuma–anlama becerilerini hem de sınav performansını artırmaya odaklanır.",
      "Okuma güçlüklerini belirleyip bireysel ve Türkiye Yüzyılı Maarif Modeli paralelinde bütüncül/bağlamsal çözümler sunan içerikler ve dijital egzersizlerle desteklenir.",
      "Bilgiye hızlı ulaşma, paragraf çözme, ana fikir bulma ve dikkat yönetimi gibi temel sınav becerilerini geliştirir.",
      "Test çözme stratejileri, süre yönetimi ve soru tiplerine yönelik hedefli pratiklerle desteklenir.",
      "Dijital platform üzerinden öğrenci gelişimi düzenli olarak takip edilerek eksik noktalar ivedilikle telafi edilir.",
    ],
  },
  {
    title: "LGS, TYT, AYT, YKS, ALES, KPSS Sınav Odaklı Hızlı Okuma",
    tag: "Sınav Hazırlık Öğrencileri için",
    desc: [
      "Sınavlarda zaman kazandırmayı, okuma hızını artırmayı ve anlamayı güçlendirmeyi hedefleyen özel bir programdır.",
      "Paragraf, grafik–soru okuma ve mantık ilişkilendirme becerilerini geliştiren hedef odaklı teknikler sunar.",
      "Dijital egzersizler sayesinde öğrencinin hız–doğruluk dengesi düzenli olarak ölçülür ve gelişimi detaylı raporlanır.",
      "Sınav sürecindeki performansı artırmak için kişiselleştirilmiş geri bildirimlerle desteklenir.",
    ],
  },
  {
    title: "Bireysel veya Kurumsal Hızlı Okuma Programları",
    tag: "Yetişkinler ve Kurumlar için",
    desc: [
      "Yetişkin bireyler veya kurum çalışanları için ihtiyaçlara göre özelleştirilen hızlı okuma ve odaklanma programlarıdır.",
      "İş hayatında verimlilik, bilgiye hızlı ulaşma, rapor ve doküman okuma hızını artırmaya yönelik modüller içerir.",
      "Kurumlar için toplu kullanıcı yönetimi, performans raporları ve yıllık gelişim analizleri sunan gelişmiş bir platformla desteklenir.",
      "Bireyler için odaklanma, dikkat yönetimi ve ileri seviye anlama tekniklerini geliştiren güçlü bir uygulama alanı sağlar.",
    ],
  },
];

const MANIFESTO = [
  {
    title: "Ölçülebilir Potansiyel",
    text: "Her öğrencinin potansiyeli ölçümlenebilir, geliştirilebilir ve görünürdür. Bu nedenle eğitim sürecimizi veriye dayalı analizlerle yapılandırıyor, öğrencinin bireysel ihtiyaçlarını merkeze alıyoruz.",
  },
  {
    title: "Stratejik Okuma",
    text: "Hızlı okuma, yalnızca daha hızlı okumak değil; bilgiyi etkili işleme, doğru anlama ve stratejik düşünme becerisidir. Bu becerilerin her yaşta bilimsel yöntemlerle geliştirilebileceğini biliyoruz.",
  },
  {
    title: "Kişiselleştirilmiş Gelişim",
    text: "Kişiselleştirilmiş eğitim en etkili öğrenme modelidir. Her öğrenciyi kendi profiline uygun tekniklerle destekleyerek sürdürülebilir bir gelişim elde edilmesini sağlıyoruz.",
  },
];

const ADVANTAGES_PARAGRAPH_ITEMS = [
  {
    title: "Bütünleşik Eğitim Platformu",
    dot: "bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.18)]",
    hover: "group-hover:text-sky-600",
    text: `İstanbul Hızlı Okuma Akademisi’nin dijital platformu, öğrenme bilimini
      yapay zekâ destekli analizlerle birleştirerek okuma hızını, anlama
      becerisini ve bilişsel performansı gerçek zamanlı olarak geliştiren
      yenilikçi bir eğitim ekosistemi sunar.`,
  },
  {
    title: "Kişiselleştirilmiş Akışlar",
    dot: "bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.18)]",
    hover: "group-hover:text-emerald-500",
    text: `Bu sistem; her öğrencinin öğrenme stiline uyum sağlayan
      kişiselleştirilmiş akışlar, dinamik egzersiz algoritmaları ve sürekli
      gelişimi görünür kılan detaylı performans raporları ile modern
      eğitimin gerektirdiği tüm teknolojik yeterlilikleri bir araya getirir.`,
  },
  {
    title: "360 Derece Analiz",
    dot: "bg-fuchsia-400 shadow-[0_0_0_6px_rgba(192,132,252,0.18)]",
    hover: "group-hover:text-fuchsia-500",
    text: `Platform, yalnızca hızlı okuma becerisini artırmayı değil;
      öğrencilerin dikkat yönetimi, odaklanma süresi, analiz hızları ve
      sınav performanslarını bilimsel veri temelli yöntemlerle güçlendirmeyi
      hedefler.`,
  },
  {
    title: "İnteraktif Süreçler",
    dot: "bg-amber-400 shadow-[0_0_0_6px_rgba(251,191,36,0.18)]",
    hover: "group-hover:text-amber-500",
    text: `Eğitim süreci; interaktif uygulamalar, oyunlaştırılmış egzersiz
      modülleri, yapay zekâ tabanlı ölçme-değerlendirme araçları ve uzman
      eğitmen rehberliği ile tamamen dijital bir öğrenme yolculuğuna
      dönüştürülmüştür.`,
  },
  {
    title: "Sade ve Stratejik Deneyim",
    dot: "bg-slate-400 shadow-[0_0_0_6px_rgba(148,163,184,0.18)]",
    hover: "group-hover:text-slate-700",
    text: `İstanbul Hızlı Okuma Akademisi’nin dijital altyapısı, hem öğrenci hem
      veli hem de eğitmen tarafında yüksek kullanıcı deneyimi sunan sade,
      akıllı ve stratejik bir tasarıma sahiptir.`,
  },
  {
    title: "Veriyle Kişiye Özel Gelişim",
    dot: "bg-indigo-400 shadow-[0_0_0_6px_rgba(129,140,248,0.18)]",
    hover: "group-hover:text-indigo-600",
    text: `Her müdahale veriye dayanır; her adım kişiye özeldir; her ölçüm
      gelişimin şeffaf bir göstergesidir.`,
  },
  {
    title: "Kapsamlı Dijital Mimari",
    dot: "bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.18)]",
    hover: "group-hover:text-cyan-600",
    text: `Bu platform, yalnızca bir hızlı okuma sistemi değil; öğrencilerin
      bilişsel potansiyelini en üst seviyeye çıkaran kapsamlı bir dijital
      öğrenme mimarisidir.`,
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
  MANIFESTO,
  ADVANTAGES_PARAGRAPH_ITEMS,
};
