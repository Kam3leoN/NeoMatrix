import startMatrixRain from "../engine/main";
import { SwiftShaderNotice } from "./SwiftShaderNotice";

export type MatrixRainOptions = {
	params?: Record<string, string>;
	/** Parent element; defaults to document.body */
	parent?: HTMLElement;
	className?: string;
};

/**
 * Component: mounts a fullscreen canvas and runs the Matrix rain engine.
 * Renders identically to the original project for the given URL params.
 */
export class MatrixRain {
	readonly canvas: HTMLCanvasElement;
	private parent: HTMLElement;
	private touchHandler: (e: TouchEvent) => void;
	private started = false;

	constructor(options: MatrixRainOptions = {}) {
		this.parent = options.parent ?? document.body;
		this.canvas = document.createElement("canvas");
		if (options.className) this.canvas.className = options.className;
		this.parent.appendChild(this.canvas);

		this.touchHandler = (e) => e.preventDefault();
		document.addEventListener("touchmove", this.touchHandler, { passive: false });

		void this.boot(options.params ?? {});
	}

	private async boot(params: Record<string, string>): Promise<void> {
		if (this.started) return;
		this.started = true;
		await startMatrixRain({
			canvas: this.canvas,
			params,
			onSwiftShader: (proceed) => {
				this.canvas.style.display = "none";
				new SwiftShaderNotice(() => {
					this.canvas.style.display = "unset";
					proceed();
				});
			},
		});
	}

	destroy(): void {
		document.removeEventListener("touchmove", this.touchHandler);
		this.canvas.remove();
	}
}
