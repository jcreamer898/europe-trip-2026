import { mount } from "svelte";
import App from "./App.svelte";
import "./app.css";

const app = mount(App, {
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

export default app;
