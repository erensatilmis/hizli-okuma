// src/components/layout/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Anasayfa", to: "/" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Eğitim İçeriği", to: "/egitim-icerigi" },
  { label: "Hedeflerimiz", to: "/hedeflerimiz" },
  { label: "Yöntemlerimiz", to: "/yontemlerimiz" },
  { label: "Eğitim Türlerimiz", to: "/egitim-turlerimiz" },
  { label: "SSS", to: "/sss" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none cursor-pointer">
          <img
            src="/images/logo/hizli-okuma-logo.jpg"
            alt="İstanbul Hızlı Okuma Akademisi"
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              İstanbul Hızlı Okuma
            </span>
            <span className="text-[11px] text-slate-500">
              İstanbul Hızlı Okuma Akademisi
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-full rounded-full bg-sky-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Tek aksiyon butonu: Giriş Yap */}
        <div className="hidden md:flex">
          <a
            href="https://hizliokumaistanbul.com/login"
            className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Giriş Yap
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-slate-800 rounded-full transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-slate-800 rounded-full transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-slate-800 rounded-full transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `w-full rounded-lg px-2 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sky-100 text-sky-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile giriş butonu */}
            <a
              href="https://hizliokumaistanbul.com/login"
              className="mt-3 w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              Giriş Yap
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
