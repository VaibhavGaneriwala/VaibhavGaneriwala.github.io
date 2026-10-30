import { esc, safeUrl, newTab, newTabHint } from "../utils.js";

export default function Footer({name, links = {}}) {
    const social = [
        ["LinkedIn", links.linkedin],
        ["GitHub", links.github],
    ]
    .filter(([, url]) => url)
    .map(([label, url]) => `<a href="${safeUrl(url)}" ${newTab}>${label}${newTabHint}</a>`)
    .join("");
    
    return `
    <footer>
        <span>© ${new Date().getFullYear()} ${esc(name)}</span>
        <nav aria-label="Social">${social}</nav>
    </footer>`;
}