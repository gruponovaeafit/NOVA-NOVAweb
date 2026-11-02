"use client";

import { useState } from "react";
import type { Evento } from "@/lib/types";
import ImageUploader from "../ImageUploader";

const empty = { eventTitle: "", eventDescription: "", eventImageUrl: "", eventImageAlt: "" };

export default function EventosManager({ initial }: { initial: Evento[] }) {
  const [items, setItems] = useState<Evento[]>(initial);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const resetForm = () => {
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (ev: Evento) => {
    setEditingId(ev.id);
    setForm({
      eventTitle: ev.eventTitle,
      eventDescription: ev.eventDescription,
      eventImageUrl: ev.eventImage?.url ?? "",
      eventImageAlt: ev.eventImage?.alt ?? "",
    });
  };

  const refresh = async () => {
    const res = await fetch("/api/eventos");
    const data = await res.json();
    setItems(data.docs ?? []);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const payload = {
      eventTitle: form.eventTitle,
      eventDescription: form.eventDescription,
      eventImage: form.eventImageUrl
        ? { url: form.eventImageUrl, alt: form.eventImageAlt || form.eventTitle }
        : null,
    };
    try {
      const res = await fetch(editingId ? `/api/eventos/${editingId}` : "/api/eventos", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setMsg({ type: "err", text: d.error || "Error al guardar" });
        return;
      }
      await refresh();
      resetForm();
      setMsg({ type: "ok", text: "Guardado correctamente" });
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: number) => {
    if (!confirm("¿Eliminar este evento?")) return;
    const res = await fetch(`/api/eventos/${id}`, { method: "DELETE" });
    if (res.ok) {
      setItems((prev) => prev.filter((x) => x.id !== id));
      if (editingId === id) resetForm();
    }
  };

  return (
    <div>
      <h2>Eventos</h2>
      <p className="admin-subtitle">Crea, edita y elimina los eventos que se muestran en la web.</p>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16 }}>{editingId ? "Editar evento" : "Nuevo evento"}</h3>
        <form onSubmit={save}>
          <div className="admin-field">
            <label>Título</label>
            <input
              className="admin-input"
              value={form.eventTitle}
              onChange={(e) => setForm({ ...form, eventTitle: e.target.value })}
              required
            />
          </div>
          <div className="admin-field">
            <label>Descripción</label>
            <textarea
              className="admin-textarea"
              value={form.eventDescription}
              onChange={(e) => setForm({ ...form, eventDescription: e.target.value })}
            />
          </div>
          <ImageUploader
            label="Imagen del evento"
            value={form.eventImageUrl || null}
            onUploaded={(url) => setForm({ ...form, eventImageUrl: url })}
          />
          <div className="admin-btn-row">
            <button className="admin-btn" type="submit" disabled={busy}>
              {busy ? "Guardando…" : editingId ? "Actualizar" : "Crear"}
            </button>
            {editingId && (
              <button type="button" className="admin-btn admin-btn-secondary" onClick={resetForm}>
                Cancelar
              </button>
            )}
          </div>
          {msg && <p className={`admin-msg ${msg.type}`}>{msg.text}</p>}
        </form>
      </div>

      <h3 style={{ margin: "24px 0 12px" }}>Lista ({items.length})</h3>
      {items.map((ev) => (
        <div key={ev.id} className="admin-card">
          <div className="admin-item-row">
            {ev.eventImage?.url && <img src={ev.eventImage.url} alt={ev.eventImage.alt} />}
            <div className="admin-item-info">
              <strong>{ev.eventTitle || "(sin título)"}</strong>
              <span>{ev.eventDescription}</span>
            </div>
            <div className="admin-btn-row">
              <button className="admin-btn admin-btn-secondary" onClick={() => startEdit(ev)}>
                Editar
              </button>
              <button className="admin-btn admin-btn-danger" onClick={() => remove(ev.id)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
