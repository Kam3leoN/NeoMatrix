import { HubPage } from "./components/HubPage";
import { RainPage } from "./components/RainPage";
import { MatrixRain } from "./components/MatrixRain";

/**
 * Path-based router. Uses full document loads between routes so the WebGL/WebGPU
 * rain engine always boots cleanly (identical to the original single-page boot).
 */
function parseRoute(pathname: string): { kind: "hub" } | { kind: "rain"; id: string } | { kind: "legacy" } {
	const path = pathname.replace(/\/+$/, "") || "/";
	if (path === "/" || path === "/index.html") {
		const qs = new URLSearchParams(window.location.search);
		if ([...qs.keys()].length > 0) return { kind: "legacy" };
		return { kind: "hub" };
	}
	const rainMatch = path.match(/^\/rain\/([^/]+)$/);
	if (rainMatch) return { kind: "rain", id: decodeURIComponent(rainMatch[1]) };
	if (path === "/rain") return { kind: "rain", id: "classic" };
	return { kind: "hub" };
}

export function startRouter(): void {
	document.body.replaceChildren();
	const route = parseRoute(window.location.pathname);
	document.body.className = "";

	if (route.kind === "legacy") {
		document.body.classList.add("legacy-rain");
		document.title = "Matrix digital rain";
		const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
		new MatrixRain({ params });
		return;
	}

	if (route.kind === "rain") {
		document.body.classList.add("is-rain");
		const page = new RainPage(route.id);
		page.mount();
		return;
	}

	document.body.classList.add("is-hub");
	document.title = "NeoMatrix";
	const hub = new HubPage();
	hub.mount();

	const bg = document.createElement("div");
	bg.className = "hub-bg";
	bg.setAttribute("aria-hidden", "true");
	document.body.prepend(bg);
	new MatrixRain({
		parent: bg,
		params: { version: "classic", resolution: "0.45", numColumns: "40", bloomStrength: "0.5" },
		className: "hub-bg__canvas",
	});
}
