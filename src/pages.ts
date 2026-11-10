/**
 * Matrix pages shown in the mobile-first hub.
 * Each page maps to the original URL `version` / `effect` params — identical rain.
 */

export type MatrixPage = {
	id: string;
	title: string;
	blurb: string;
	/** Query params passed to makeConfig (same as original index.html?…) */
	params: Record<string, string>;
	accent?: string;
};

export const MATRIX_PAGES: MatrixPage[] = [
	{ id: "classic", title: "Classic", blurb: "Green code rain from the film trilogy.", params: { version: "classic" }, accent: "#39ff14" },
	{ id: "resurrections", title: "Resurrections", blurb: "Updated glyphs from The Matrix Resurrections.", params: { version: "resurrections" }, accent: "#5cff8a" },
	{ id: "trinity", title: "Trinity", blurb: "Volumetric rain with metal glint.", params: { version: "trinity" }, accent: "#7cff9a" },
	{ id: "operator", title: "Operator", blurb: "Ripple effects from the operator screens.", params: { version: "operator" }, accent: "#33ff99" },
	{ id: "megacity", title: "Megacity", blurb: "As seen in Revolutions.", params: { version: "megacity" }, accent: "#2ee66a" },
	{ id: "3d", title: "3D", blurb: "Perspective volumetric mode.", params: { version: "3d" }, accent: "#00e676" },
	{ id: "nightmare", title: "Nightmare", blurb: "Gothic glyphs, thunder, crimson palette.", params: { version: "nightmare" }, accent: "#ff3355" },
	{ id: "paradise", title: "Paradise", blurb: "Coptic polar ripples.", params: { version: "paradise" }, accent: "#ffcc66" },
	{ id: "morpheus", title: "Morpheus", blurb: "Purple volumetric rain.", params: { version: "morpheus" }, accent: "#c44dff" },
	{ id: "bugs", title: "Bugs", blurb: "Sand glint, amber volumetric.", params: { version: "bugs" }, accent: "#e6a800" },
	{ id: "palimpsest", title: "Palimpsest", blurb: "Custom Huberfish A variant.", params: { version: "palimpsest" }, accent: "#88aacc" },
	{ id: "twilight", title: "Twilight", blurb: "Custom Huberfish D variant.", params: { version: "twilight" }, accent: "#9966ff" },
	{ id: "neomatrixology", title: "NeoMatrixology", blurb: "Compact amber glyph set.", params: { version: "neomatrixology" }, accent: "#ffd700" },
	{ id: "pride", title: "Pride", blurb: "Pride flag stripe coloration.", params: { effect: "pride" }, accent: "#ff69b4" },
	{ id: "trans", title: "Trans", blurb: "Trans flag stripe coloration.", params: { effect: "trans" }, accent: "#5bcefa" },
	{ id: "mirror", title: "Mirror", blurb: "Ripple mirror mode (tap for ripples).", params: { version: "updated", effect: "mirror" }, accent: "#66e0ff" },
	{ id: "construct", title: "Construct", blurb: "Blue training-construct rain.", params: { version: "construct" }, accent: "#4db8ff" },
	{ id: "smith", title: "Agent Smith", blurb: "Crimson slanted Agent rain.", params: { version: "smith" }, accent: "#ff2244" },
	{ id: "zion", title: "Zion", blurb: "Golden underground constellation.", params: { version: "zion" }, accent: "#ffc107" },
	{ id: "mono", title: "Mono", blurb: "Black & white phosphor rain.", params: { version: "mono" }, accent: "#e0e0e0" },
	{ id: "slowmo", title: "Slow-mo", blurb: "Ultra-slow cascading glyphs.", params: { version: "slowmo" }, accent: "#66ff99" },
	{ id: "dense", title: "Dense", blurb: "High-column packed code storm.", params: { version: "dense" }, accent: "#1aff66" },
];

export function findPage(id: string | null | undefined): MatrixPage | undefined {
	if (!id) return undefined;
	return MATRIX_PAGES.find((p) => p.id === id);
}

export function pagePath(id: string): string {
	return `/rain/${encodeURIComponent(id)}`;
}
