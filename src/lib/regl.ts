/**
 * Typed REGL entry — replaces vendored lib/regl.js + lib/regl.min.js.
 * Runtime comes from the `regl` npm package (bundled by Vite).
 */
// @ts-nocheck
import createREGL from "regl";

export default createREGL;
export { createREGL };
