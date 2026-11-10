# lib/

Les 5 modules historiques sont désormais en **TypeScript** (ici et sous `src/lib/` utilisé par Vite) :

| Module | Fichier |
| --- | --- |
| gl-matrix | `gl-matrix.ts` (npm `gl-matrix`) |
| gpu-buffer | `gpu-buffer.ts` |
| holoplaycore | `holoplaycore.ts` |
| regl | `regl.ts` (npm `regl`) |
| regl.min | `regl.min.ts` (alias de `regl`) |

L’app importe depuis `src/lib/` (bundle Vite). Les copies à la racine `lib/` documentent / synchronisent la surface historique.
