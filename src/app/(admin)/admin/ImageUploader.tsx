"use client";

import { useState } from "react";

/**
 * Sube una imagen a /api/upload y devuelve la URL pública mediante onUploaded.
 * Muestra una previsualización de la imagen actual.
 */
export default function ImageUploader({
  value,
  onUploaded,
  label = "Imagen",
}: {
  value: string | null;
  onUploaded: (url: string) => void;
  label?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Error al subir");
        return;
      }
      onUploaded(data.url);
    } catch {
      setError("Error de red al subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="admin-field">
      <label>{label}</label>
      <input className="admin-input" type="file" accept="image/*" onChange={handleFile} disabled={uploading} />
      {uploading && <p className="admin-msg">Subiendo…</p>}
      {error && <p className="admin-msg err">{error}</p>}
      {value && <img className="admin-thumb" src={value} alt="preview" />}
    </div>
  );
}
