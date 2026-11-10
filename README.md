# NeoMatrix

Pluie de code Matrix — port **TypeScript / Vite / PWA**, mobile-first, avec hub de navigation entre les variantes.

Rendu moteur **identique** à l’implémentation originale ([Rezmason/matrix](https://github.com/Rezmason/matrix)) : REGL (WebGL) + option WebGPU, MSDF, bloom, palettes.

**Live :** [kam3leon-matrix.vercel.app](https://kam3leon-matrix.vercel.app)

## Quick start

```bash
npm install
npm run dev      # http://localhost:5176
npm run build
npm run preview
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Hub mobile-first (liste des variantes + rain en fond) |
| `/rain/:id` | Variante plein écran (`classic`, `trinity`, `operator`, …) |
| `/?version=…&effect=…` | Compat URL originale (query params) |

## Stack

- **Vite 5** + **TypeScript**
- **vite-plugin-pwa** (installable, offline cache)
- Composants : `HubPage`, `RainPage`, `MatrixRain`, `SwiftShaderNotice`
- Moteur : `src/engine/` (regl + webgpu), assets / shaders dans `public/`

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | `tsc --noEmit` + build production |
| `npm run preview` | Preview du `dist/` |
| `npm run typecheck` | Typecheck seul |

## Crédits

Basé sur le travail de [Rezmason](https://github.com/Rezmason/matrix) (MIT). Glyphs et pipeline graphique inchangés.
