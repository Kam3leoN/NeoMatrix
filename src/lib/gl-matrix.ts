/**
 * Typed gl-matrix entry — replaces vendored lib/gl-matrix.js (UMD global).
 * Runtime comes from the `gl-matrix` npm package (bundled by Vite).
 */
// @ts-nocheck
import * as glMatrixNS from "gl-matrix";

export * from "gl-matrix";
export const glMatrix = glMatrixNS;
export default glMatrixNS;
