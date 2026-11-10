import "./styles/app.css";
import { registerSW } from "virtual:pwa-register";
import { startRouter } from "./router";

registerSW({ immediate: true });

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => startRouter(), { once: true });
} else {
	startRouter();
}
