# NOVA

Sitio web del grupo estudiantil NOVA, construido con **Next.js (App Router)** y
**Supabase** (base de datos PostgreSQL + Storage). Incluye un panel de
administración propio para gestionar el contenido.

## Stack

- [Next.js 16](https://nextjs.org/) — framework React (App Router)
- [Supabase](https://supabase.com/) — PostgreSQL + Storage para imágenes
- [Tailwind CSS](https://tailwindcss.com/) — estilos
- [TypeScript](https://www.typescriptlang.org/)
- Autenticación del admin con JWT (`jose`) + `bcryptjs`

## Puesta en marcha

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar la base de datos en Supabase

En el panel de Supabase, abre **SQL Editor** y ejecuta el contenido de
[`supabase/schema.sql`](./supabase/schema.sql). Esto crea las tablas
`eventos`, `proyectos`, `home` y `nosotros`, y las políticas de lectura pública.

### 3. Crear el bucket de Storage

En **Storage**, crea un bucket llamado `media` (o el nombre que uses en
`SUPABASE_BUCKET`) y márcalo como **público** para que las imágenes sean
accesibles por URL.

### 4. Variables de entorno

Copia `.env.example` a `.env.local` y rellena los valores:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SUPABASE_URL` — Project Settings → API → Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Project Settings → API → anon public
- `SUPABASE_SERVICE_ROLE_KEY` — Project Settings → API → service_role (¡secreto!)
- `SUPABASE_BUCKET` — nombre del bucket de Storage (`media`)
- `ADMIN_JWT_SECRET` — cadena larga y aleatoria para firmar la sesión
- `ADMIN_EMAIL` — correo del administrador
- `ADMIN_PASSWORD_HASH` — hash bcrypt de la contraseña (ver abajo)

### 5. Generar la contraseña del admin

```bash
node scripts/hash-password.mjs "tu-contraseña-segura"
```

Copia la línea `ADMIN_PASSWORD_HASH=...` que imprime en tu `.env.local`.

### 6. Arrancar

```bash
npm run dev
```

- Sitio público: [http://localhost:3000](http://localhost:3000)
- Panel de admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Panel de administración

Accede en `/admin` con el correo y contraseña configurados. Desde ahí puedes:

- **Eventos** — crear, editar y eliminar eventos (con imagen)
- **Proyectos** — crear, editar y eliminar proyectos (con imagen)
- **Home** — editar el hero y las imágenes del carrusel
- **Nosotros** — editar textos e imágenes de historia

Las imágenes se suben a Supabase Storage desde el propio panel.

## API

Las páginas públicas consumen estos endpoints (lectura abierta; escritura solo
con sesión de admin):

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/eventos` | Lista de eventos (`{ docs: [...] }`) |
| POST/PUT/DELETE | `/api/eventos`, `/api/eventos/[id]` | CRUD (admin) |
| GET | `/api/proyectos` | Lista de proyectos |
| POST/PUT/DELETE | `/api/proyectos`, `/api/proyectos/[id]` | CRUD (admin) |
| GET/PUT | `/api/globals/home` | Contenido de Home |
| GET/PUT | `/api/globals/nosotros` | Contenido de Nosotros |
| POST | `/api/upload` | Subida de imágenes (admin) |
| POST | `/api/auth/login` / `/api/auth/logout` | Sesión del admin |

## Estructura del proyecto

```
src/
├─ app/
│  ├─ (app)/          # Sitio público (home, eventos, proyectos, nosotros, grupo)
│  ├─ (admin)/admin/  # Panel de administración
│  └─ api/            # Route handlers (CRUD + auth + upload)
└─ lib/
   ├─ supabase/server.ts  # Cliente de Supabase (service role)
   ├─ data.ts             # Acceso a datos (queries)
   ├─ storage.ts          # Subida/borrado de imágenes
   ├─ auth.ts             # Sesión del admin (JWT + cookie)
   └─ types.ts            # Tipos de dominio
supabase/schema.sql       # Esquema SQL para ejecutar en Supabase
scripts/hash-password.mjs # Generador del hash de contraseña del admin
```
