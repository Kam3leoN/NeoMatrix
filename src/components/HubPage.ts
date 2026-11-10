import { MATRIX_PAGES, pagePath } from "../pages";

/**
 * Mobile-first hub: navigate between Matrix variants.
 * Each tile opens a full rain page (identical effect for that version).
 */
export class HubPage {
	readonly root: HTMLElement;

	constructor() {
		this.root = document.createElement("main");
		this.root.className = "hub";
		this.root.innerHTML = `
			<header class="hub__header">
				<p class="hub__eyebrow">Wake up, Neo…</p>
				<h1 class="hub__title">NeoMatrix</h1>
				<p class="hub__lead">Choisis une page. Chaque variante lance la pluie de code — rendu identique à l’original.</p>
			</header>
			<nav class="hub__nav" aria-label="Matrix variants">
				<ul class="hub__list">
					${MATRIX_PAGES.map(
						(p) => `
					<li>
						<a class="hub__card" href="${pagePath(p.id)}" style="--accent:${p.accent ?? "#39ff14"}">
							<span class="hub__card-title">${escapeHtml(p.title)}</span>
							<span class="hub__card-blurb">${escapeHtml(p.blurb)}</span>
						</a>
					</li>`
					).join("")}
				</ul>
			</nav>
			<footer class="hub__footer">
				<p>Codé, Designé &amp; développé par Kam3leoN</p>
			</footer>
		`;
	}

	mount(parent: HTMLElement = document.body): void {
		parent.appendChild(this.root);
	}

	destroy(): void {
		this.root.remove();
	}
}

function escapeHtml(s: string): string {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
