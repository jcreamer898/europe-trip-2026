import App from "./App.svelte";
import "./app.css";

const app = new App({
  target: document.getElementById("app"),
});

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(import.meta.env.BASE_URL + "service-worker.js")
      .catch(() => {});
  });
}

// Offline banner
window.addEventListener("offline", () => {
  document.querySelector(".offline-banner")?.classList.add("show");
});
window.addEventListener("online", () => {
  document.querySelector(".offline-banner")?.classList.remove("show");
});

export default app;
