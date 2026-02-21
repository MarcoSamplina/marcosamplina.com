# marcosamplina.com — Landing

Landing personal para [marcosamplina.com](https://marcosamplina.com). Nav y footer alineados con [tools.marcosamplina.com](https://tools.marcosamplina.com). Fondo con LightRays (shadcn/react-bits), hero con badge, lettering y enlaces a LinkedIn, Calendly, Web (Framer) y Tools.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Motion** (animaciones)
- **LightRays** (OGL) — fondo de rayos de luz
- **shadcn/ui** (base)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Sube el repo a GitHub.
2. En [Vercel](https://vercel.com): **Add New Project** → importa el repo.
3. Deploy automático en cada `push`. Luego añade el dominio **marcosamplina.com** en Project → Settings → Domains.

## Scripts

| Comando   | Descripción        |
|----------|--------------------|
| `pnpm dev`   | Servidor de desarrollo |
| `pnpm build` | Build de producción    |
| `pnpm start` | Servidor de producción |
