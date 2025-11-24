import { NavLink } from "react-router-dom";
import { IoCallOutline, IoMailOutline, IoLogoInstagram } from "react-icons/io5";

const MENU_ITEMS = [
  { label: "Anasayfa", to: "/" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Eğitim İçeriği", to: "/egitim-icerigi" },
  { label: "Hedeflerimiz", to: "/hedeflerimiz" },
  { label: "Yöntemlerimiz", to: "/yontemlerimiz" },
  { label: "Eğitim Türlerimiz", to: "/egitim-turlerimiz" },
  { label: "Giriş Yap", to: "/giris" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white/80 backdrop-blur py-10 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-3">
          <img
            src="/images/logo/hizli-okuma-logo.jpg"
            alt="İstanbul Hızlı Okuma Akademisi"
            className="w-16 h-16 object-cover rounded-full shadow"
          />

          <p className="text-sm text-slate-500 leading-tight">
            © {year} İstanbul Hızlı Okuma Akademisi
            <br />
            <span className="text-slate-400 text-[12px]">
              Tüm hakları saklıdır.
            </span>
          </p>
        </div>

        {/* Menü */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Menü</h3>
          <ul className="flex flex-col gap-1">
            {MENU_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="text-slate-600 hover:text-slate-900 transition text-sm"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            İletişim
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-600">
            {/* Telefon */}
            <a
              href="tel:05388550260"
              className="flex items-center gap-2 hover:text-slate-900 transition"
            >
              <IoCallOutline className="text-xl text-sky-600" />0 (538) 855 02
              60
            </a>

            {/* E-posta */}
            <a
              href="mailto:info@hizliokumaistanbul.com.tr"
              className="flex items-center gap-2 hover:text-slate-900 transition"
            >
              <IoMailOutline className="text-xl text-sky-600" />
              info@hizliokumaistanbul.com.tr
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/istanbulhizliokuma/"
              target="_blank"
              className="flex items-center gap-2 hover:text-slate-900 transition"
            >
              <IoLogoInstagram className="text-xl text-sky-600" />
              instagram.com/istanbulhizliokuma
            </a>
          </div>
        </div>

        {/* Kurumsal */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Kurumsal
          </h3>
          <p className="text-slate-400 text-sm">Henüz içerik eklenmedi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
