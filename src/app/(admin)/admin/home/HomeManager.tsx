"use client";

import { useState } from "react";
import type { Home, MediaRef } from "@/lib/types";
import ImageUploader from "../ImageUploader";

export default function HomeManager({ initial }: { initial: Home }) {
  const [heroTitle, setHeroTitle] = useState(initial.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(initial.heroSubtitle);
  const [images, setImages] = useState<MediaRef[]>(initial.carouselImages);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const addImage = (url: string) => setImages((prev) => [...prev, { url, alt: "" }]);
  const removeImage = (i: number) => setImages((prev) => prev.filter((_, idx) => idx !== i));
  const setAlt = (i: number, alt: string) =>
    setImages((prev) => prev.map((img, idx) => (idx === i ? { ...img, alt } : img)));

  const save = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/globals/home", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heroTitle, heroSubtitle, carouselImages: images }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setMsg({ type: "err", text: d.error || "Error al guardar" });
        return;
      }
      setMsg({ type: "ok", text: "Guardado correctamente" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <p className="admin-subtitle">Edita el hero y las imágenes del carrusel de la página principal.</p>

      <div className="admin-card">
        <div className="admin-field">
          <label>Título del hero</label>
          <input className="admin-input" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Subtítulo del hero</label>
          <textarea
            className="admin-textarea"
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 12 }}>Imágenes del carrusel</h3>
        {images.map((img, i) => (
          <div key={i} className="admin-item-row" style={{ marginBottom: 14 }}>
            <img src={img.url} alt={img.alt} />
            <div className="admin-item-info">
              <input
                className="admin-input"
                placeholder="Texto alternativo (alt)"
                value={img.alt}
                onChange={(e) => setAlt(i, e.target.value)}
              />
            </div>
            <button className="admin-btn admin-btn-danger" onClick={() => removeImage(i)}>
              Quitar
            </button>
          </div>
        ))}
        <ImageUploader label="Añadir imagen al carrusel" value={null} onUploaded={addImage} />
      </div>

      <div className="admin-btn-row">
        <button className="admin-btn" onClick={save} disabled={busy}>
          {busy ? "Guardando…" : "Guardar cambios"}
        </button>
        {msg && <p className={`admin-msg ${msg.type}`}>{msg.text}</p>}
      </div>
    </div>
  );
}
