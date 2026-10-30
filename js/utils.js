export function esc(text=""){
    return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function has(list) {
    return Array.isArray(list) && list.length > 0;
}

export function Section({id, eyebrow, heading}, body){
    return `
    <section id="${id}" class="reveal" aria-labelledby="${id}-title">
    <p class="eyebrow" aria-hidden="true">${eyebrow}</p>
    <h2 id="${id}-title">${heading}</h2>
    ${body}
    </section>
    `;
}

export function bold(text = ""){
    return esc(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");   
}

export function safeUrl(url = ""){
    const u = String(url).trim();
    const hasScheme = /^[a-z][a-z0-9+.-]*:/i.test(u);
    if (!hasScheme || /^(https?|mailto|tel):/i.test(u)) return esc(u);
    return "#";
}

export const newTab = `target="_blank" rel="noopener noreferrer"`;

export const newTabHint = `<span class="sr-only"> (opens in a new tab)</span>`;

export function Chips(items = [], label = "Tags") {
    if (!has(items)) return "";
    return `<ul class="chips" aria-label="${esc(label)}">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
}