-- =====================================================================
-- Esquema de base de datos para NOVA (reemplaza a Payload CMS)
-- Ejecuta este script en el SQL Editor de Supabase una sola vez.
-- =====================================================================

-- Eventos -------------------------------------------------------------
create table if not exists public.eventos (
  id               bigint generated always as identity primary key,
  event_title       text not null default '',
  event_description text not null default '',
  event_image       jsonb,            -- { "url": "...", "alt": "..." }
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- Proyectos -----------------------------------------------------------
create table if not exists public.proyectos (
  id                 bigint generated always as identity primary key,
  project_title       text not null default '',
  project_description text not null default '',
  project_image       jsonb,          -- { "url": "...", "alt": "..." }
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- Home (contenido único, "global") ------------------------------------
create table if not exists public.home (
  id              int primary key default 1,
  hero_title       text not null default '',
  hero_subtitle    text not null default '',
  carousel_images  jsonb not null default '[]'::jsonb,  -- [{ "url", "alt" }]
  updated_at       timestamptz not null default now(),
  constraint home_single_row check (id = 1)
);

-- Nosotros (contenido único, "global") --------------------------------
create table if not exists public.nosotros (
  id             int primary key default 1,
  about_text      text not null default '',
  history_text    text not null default '',
  history_images  jsonb not null default '[]'::jsonb,   -- [{ "url", "alt" }]
  updated_at      timestamptz not null default now(),
  constraint nosotros_single_row check (id = 1)
);

-- Fila inicial para los contenidos únicos
insert into public.home (id) values (1) on conflict (id) do nothing;
insert into public.nosotros (id) values (1) on conflict (id) do nothing;

-- RLS: el acceso de escritura se hace desde el servidor con la
-- service_role key (que ignora RLS). Habilitamos solo lectura pública.
alter table public.eventos  enable row level security;
alter table public.proyectos enable row level security;
alter table public.home     enable row level security;
alter table public.nosotros enable row level security;

create policy "lectura publica eventos"  on public.eventos  for select using (true);
create policy "lectura publica proyectos" on public.proyectos for select using (true);
create policy "lectura publica home"     on public.home     for select using (true);
create policy "lectura publica nosotros" on public.nosotros for select using (true);
