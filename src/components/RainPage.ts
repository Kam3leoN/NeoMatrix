import { findPage, type MatrixPage } from "../pages";
import { MatrixRain } from "./MatrixRain";

/**
 * Fullscreen rain page for one Matrix variant, with a back control to the hub.
 */
export class RainPage {
	readonly root: HTMLElement;
	private rain: MatrixRain | null = null;
	readonly page: MatrixPage;

	constructor(pageId: string, extraParams: Record<string, string> = {}) {
		const page = findPage(pageId) ?? {
			id: pageId,
			title: pageId,
			blurb: "",
			params: { version: pageId },
		};
		this.page = page;

		this.root = document.createElement("section");
		this.root.className = "rain-page";
		this.root.setAttribute("data-page", page.id);

		const bar = document.createElement("div");
		bar.className = "rain-page__bar";
		bar.innerHTML = `
			<a class="rain-page__back" href="/" aria-label="Retour au hub">← Hub</a>
			<span class="rain-page__label">${page.title}</span>
		`;
		this.root.appendChild(bar);

		const stage = document.createElement("div");
		stage.className = "rain-page__stage";
		this.root.appendChild(stage);

		const params = { ...page.params, ...extraParams };
		this.rain = new MatrixRain({ parent: stage, params, className: "rain-page__canvas" });
	}

	mount(parent: HTMLElement = document.body): void {
		parent.appendChild(this.root);
		document.title = `${this.page.title} — NeoMatrix`;
	}

	destroy(): void {
		this.rain?.destroy();
		this.rain = null;
		this.root.remove();
	}
}
