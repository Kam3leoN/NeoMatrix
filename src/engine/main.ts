// @ts-nocheck
import makeConfig from "./config";
import type { MatrixConfig } from "./types";

export type { MatrixConfig };

const supportsWebGPU = async (): Promise<boolean> => {
	return (window as any).GPUQueue != null && navigator.gpu != null && (navigator.gpu as any).getPreferredCanvasFormat != null;
};

const isRunningSwiftShader = (): boolean => {
	const gl = document.createElement("canvas").getContext("webgl");
	if (!gl) return false;
	const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
	if (!debugInfo) return false;
	const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;
	return renderer.toLowerCase().includes("swiftshader");
};

export type StartMatrixOptions = {
	canvas: HTMLCanvasElement;
	params?: Record<string, string>;
	onSwiftShader?: (proceed: () => void) => void;
};

/**
 * Boots the Matrix rain engine onto an existing canvas.
 * Visual pipeline identical to the original JS entrypoint.
 */
export default async function startMatrixRain({ canvas, params = {}, onSwiftShader }: StartMatrixOptions): Promise<MatrixConfig> {
	const config = makeConfig(params) as MatrixConfig;
	const useWebGPU = (await supportsWebGPU()) && ["webgpu"].includes(String(config.renderer ?? "").toLowerCase());
	// Explicit branches so Vite can statically include both backends.
	const solution = useWebGPU ? import("./webgpu/main") : import("./regl/main");

	const run = async () => {
		(await solution).default(canvas, config);
	};

	if (isRunningSwiftShader() && !config.suppressWarnings) {
		if (onSwiftShader) {
			await new Promise<void>((resolve) => {
				onSwiftShader(() => {
					config.suppressWarnings = true;
					void run().then(resolve);
				});
			});
		} else {
			config.suppressWarnings = true;
			await run();
		}
	} else {
		await run();
	}

	return config;
}

export { makeConfig, supportsWebGPU, isRunningSwiftShader };
