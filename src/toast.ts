export function toast(message: string, ms = 4000): void {
  const el = document.createElement("div");
  el.textContent = message;
  Object.assign(el.style, {
    position: "fixed",
    right: "16px",
    bottom: "16px",
    zIndex: "2147483647",
    maxWidth: "28rem",
    padding: "10px 14px",
    borderRadius: "8px",
    background: "#111",
    color: "#fff",
    font: "13px/1.4 system-ui, sans-serif",
    whiteSpace: "pre-wrap",
    boxShadow: "0 6px 24px rgba(0,0,0,.25)",
  });
  document.documentElement.appendChild(el);
  setTimeout(() => el.remove(), ms);
}
