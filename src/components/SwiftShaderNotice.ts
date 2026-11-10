/**
 * Blue / red pill notice when hardware acceleration is disabled (SwiftShader).
 * Markup and styles match the original index.html.
 */
export class SwiftShaderNotice {
	private root: HTMLElement;

	constructor(onProceed: () => void) {
		this.root = document.createElement("notice");
		this.root.innerHTML = `<div class="notice">
		<p>Wake up, Neo... you've got hardware acceleration disabled.</p>
		<p>This project will still run, incredibly, but at a noticeably low framerate.</p>
		<button type="button" class="blue pill">Plug me in</button>
		<a class="red pill" target="_blank" rel="noopener" href="https://www.google.com/search?q=chrome+enable+hardware+acceleration">Free me</a>
		</div>`;
		document.body.appendChild(this.root);
		this.root.querySelector(".blue.pill")?.addEventListener("click", () => {
			this.destroy();
			onProceed();
		});
	}

	destroy(): void {
		this.root.remove();
	}
}
