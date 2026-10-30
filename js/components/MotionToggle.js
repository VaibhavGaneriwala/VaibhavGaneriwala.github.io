const pauseIcon = `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`;
const playIcon = `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>`;

export default function MotionToggle() {
    return `<button class="motion-toggle" id="motion-toggle" type="button" aria-pressed="false">${pauseIcon}<span>Pause motion</span></button>`;
}

export function initMotionToggle() {
    const btn = document.querySelector("#motion-toggle");
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        btn.remove();
        return;
    }

    function apply(still) {
        root.classList.toggle("still", still);
        btn.setAttribute("aria-pressed", String(still));
        btn.innerHTML = still
            ? `${playIcon}<span>Play motion</span>`
            : `${pauseIcon}<span>Pause motion</span>`;
        document.querySelectorAll("video").forEach((v) => (still ? v.pause() : v.play().catch(() => {})));
        try {
            localStorage.setItem("motion", still ? "off" : "on");
        } catch {}
    }

    let saved = null;
    try {
        saved = localStorage.getItem("motion");
    } catch {}

    apply(saved === "off");
    btn.addEventListener("click", () => apply(!root.classList.contains("still")));
}