/** Ambient globals injected by /lib/regl.min.js and /lib/gl-matrix.js */
declare function createREGL(options?: Record<string, unknown>): any;

declare const mat4: any;
declare const mat3: any;
declare const vec2: any;
declare const vec3: any;
declare const vec4: any;
declare const quat: any;
declare const glMatrix: any;

interface Window {
	GPUQueue?: unknown;
}

interface Document {
	webkitFullscreenEnabled?: boolean;
	webkitFullscreenElement?: Element | null;
	webkitExitFullscreen?: () => Promise<void>;
}

interface HTMLCanvasElement {
	webkitRequestFullscreen?: () => Promise<void>;
}

declare const GPUTextureUsage: any;
declare const GPUBufferUsage: any;
declare const GPUShaderStage: any;
declare const GPUMapMode: any;

declare module "*holoplaycore.module.js" {
	const mod: any;
	export = mod;
}

declare module "*gpu-buffer.js" {
	export const structs: any;
}
