"use client";

import { useState } from "react";
import type { Proyecto } from "@/lib/types";
import ImageUploader from "../ImageUploader";

const empty = { projectTitle: "", projectDescription: "", projectImageUrl: "", projectImageAlt: "" };

export default function ProyectosManager({ initial }: { initial: Proyecto[] }) {
  const [items, setItems] = useState<Proyecto[]>(initial);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const resetForm = () => {
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (p: Proyecto) => {
    setEditingId(p.id);
    setForm({
      projectTitle: p.projectTitle,
      projectDescription: p.projectDescription,
      projectImageUrl: p.projectImage?.url ?? "",
      projectImageAlt: p.projectImage?.alt ?? "",
    });
  };

  const refresh = async () => {
    const res = await fetch("/api/proyectos");
    const data = await res.json();
    setItems(data.docs ?? []);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const payload = {
      projectTitle: form.projectTitle,
      projectDescription: form.projectDescription,
      projectImage: form.projectImageUrl
        ? { url: form.projectImageUrl, alt: form.projectImageAlt || form.projectTitle }
        : null,
    };
    try {
      const res = await fetch(editingId ? `/api/proyectos/${editingId}` : "/api/proyectos", {
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
    if (!confirm("¿Eliminar este proyecto?")) return;
    const res = await fetch(`/api/proyectos/${id}`, { method: "DELETE" });
    if (res.ok) {
      setItems((prev) => prev.filter((x) => x.id !== id));
      if (editingId === id) resetForm();
    }
  };

  return (
    <div>
      <h2>Proyectos</h2>
      <p className="admin-subtitle">Crea, edita y elimina los proyectos que se muestran en la web.</p>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16 }}>{editingId ? "Editar proyecto" : "Nuevo proyecto"}</h3>
        <form onSubmit={save}>
          <div className="admin-field">
            <label>Título</label>
            <input
              className="admin-input"
              value={form.projectTitle}
              onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
              required
            />
          </div>
          <div className="admin-field">
            <label>Descripción</label>
            <textarea
              className="admin-textarea"
              value={form.projectDescription}
              onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
            />
          </div>
          <ImageUploader
            label="Imagen del proyecto"
            value={form.projectImageUrl || null}
            onUploaded={(url) => setForm({ ...form, projectImageUrl: url })}
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
      {items.map((p) => (
        <div key={p.id} className="admin-card">
          <div className="admin-item-row">
            {p.projectImage?.url && <img src={p.projectImage.url} alt={p.projectImage.alt} />}
            <div className="admin-item-info">
              <strong>{p.projectTitle || "(sin título)"}</strong>
              <span>{p.projectDescription}</span>
            </div>
            <div className="admin-btn-row">
              <button className="admin-btn admin-btn-secondary" onClick={() => startEdit(p)}>
                Editar
              </button>
              <button className="admin-btn admin-btn-danger" onClick={() => remove(p.id)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
