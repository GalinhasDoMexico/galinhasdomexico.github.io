// Service Worker (html quando estiver offline)
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/public/cdn/offline/service-worker.js")
        .then(() => console.log("Service Worker registrado com sucesso!"))
        .catch((error) => console.error("Erro ao registrar Service Worker:", error));
}
