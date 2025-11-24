// src/components/sections/Testimonials.jsx
import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { TESTIMONIALS } from "../../lib/constants";

const MAX_PREVIEW_LENGTH = 320;

function getPreview(text) {
  if (text.length <= MAX_PREVIEW_LENGTH) return text;
  return text.slice(0, MAX_PREVIEW_LENGTH) + "…";
}

function Testimonials() {
  const { ref, visible } = useReveal();
  const [selected, setSelected] = useState(null); // metin modalı için
  const [photoModal, setPhotoModal] = useState(null); // fotoğraf modalı için { src, name }

  const handleOpen = (testimonial) => setSelected(testimonial);
  const handleClose = () => setSelected(null);

  const handleOpenPhoto = (src, name) => setPhotoModal({ src, name });
  const handleClosePhoto = () => setPhotoModal(null);

  return (
    <section
      ref={ref}
      className={`pt-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-60"
      }`}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
          Görüşler
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Üyelerimizin Görüşleri
        </h2>

        {/* Stars */}
        <div className="mt-3 flex items-center justify-center text-yellow-400 text-xl">
          ★★★★★
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item, idx) => {
          const isLong = item.text.length > MAX_PREVIEW_LENGTH;
          const preview = getPreview(item.text);

          return (
            <div
              key={idx}
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200"
            >
              {/* avatar area */}
              <div className="flex items-center gap-3 mb-4">
                {item.photos ? (
                  // Bahar Şen: iki avatar yan yana (hafif çakışmalı) + tıklanabilir
                  <div className="flex -space-x-3">
                    {item.photos.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleOpenPhoto(src, item.name)}
                        className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
                      >
                        <img
                          src={src}
                          alt={`${item.name} fotoğraf ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                ) : item.photo ? (
                  <button
                    type="button"
                    onClick={() => handleOpenPhoto(item.photo, item.name)}
                    className="h-12 w-12 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-semibold">
                    {item.name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900 text-sm">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-500">{item.country}</span>
                </div>
              </div>

              {/* text preview */}
              <p className="text-sm text-slate-700 leading-relaxed mb-4 whitespace-pre-line">
                {preview}
              </p>

              {isLong && (
                <button
                  onClick={() => handleOpen(item)}
                  className="mt-auto inline-flex text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline"
                >
                  Tümünü Oku
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Metin Modalı */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex items-center gap-3">
                {selected.photos ? (
                  // Modal header'da da iki avatar
                  <div className="flex -space-x-2">
                    {selected.photos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${selected.name} fotoğraf ${i + 1}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                      />
                    ))}
                  </div>
                ) : selected.photo ? (
                  <img
                    src={selected.photo}
                    alt={selected.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-semibold">
                    {selected.name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    {selected.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {selected.country}
                  </span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Kapat
              </button>
            </div>

            <div className="px-6 py-5 overflow-y-auto max-h-[60vh]">
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {selected.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fotoğraf Modalı */}
      {photoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={handleClosePhoto}
        >
          <div
            className="relative max-w-xl w-full rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
              <span className="text-sm font-semibold text-slate-900">
                {photoModal.name}
              </span>
              <button
                onClick={handleClosePhoto}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Kapat
              </button>
            </div>

            <div className="bg-slate-900 flex items-center justify-center">
              <img
                src={photoModal.src}
                alt={photoModal.name}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
