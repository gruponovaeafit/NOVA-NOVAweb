"use client";

import { useState } from "react";
import type { Nosotros, MediaRef } from "@/lib/types";
import ImageUploader from "../ImageUploader";

export default function NosotrosManager({ initial }: { initial: Nosotros }) {
  const [aboutText, setAboutText] = useState(initial.aboutText);
  const [historyText, setHistoryText] = useState(initial.historyText);
  const [images, setImages] = useState<MediaRef[]>(initial.historyImages);
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
      const res = await fetch("/api/globals/nosotros", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aboutText, historyText, historyImages: images }),
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
      <h2>Nosotros</h2>
      <p className="admin-subtitle">Edita los textos e imágenes de la sección Nosotros.</p>

      <div className="admin-card">
        <div className="admin-field">
          <label>¿Quiénes somos? (texto)</label>
          <textarea
            className="admin-textarea"
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
        </div>
        <div className="admin-field">
          <label>Nuestra historia (texto)</label>
          <textarea
            className="admin-textarea"
            value={historyText}
            onChange={(e) => setHistoryText(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 12 }}>Imágenes de historia</h3>
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
        <ImageUploader label="Añadir imagen de historia" value={null} onUploaded={addImage} />
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
