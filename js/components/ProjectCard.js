import { esc, has, safeUrl, newTab, newTabHint, Chips } from "../utils.js";

function Media(media, title) {
    if (!media) return "";

    const badge = media.type === "video" ? `<span class="badge" aria-hidden="true">VIDEO</span>` : "";

    if (!media.src) {
        const placeholder = media.type === "video" ? "Demo video" : "Screenshot";
        return `<div class="media" aria-hidden="true">${badge}${placeholder}</div>`;
    }

    const element = media.type === "video"
        ? `<video src="${safeUrl(media.src)}" autoplay muted loop playsinline aria-label="${esc(title)} demo"></video>`
        : `<img src="${safeUrl(media.src)}" alt="${esc(title)} screenshot" loading="lazy">`;

    return `<div class="media">${element}${badge}</div>`;
}

export default function ProjectCard({ category, year, role, title, description, result, tags, media, links }) {
    const id = "project-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const meta = [year, role].filter(Boolean).join(" · ");

    const linkList = has(links)
        ? `<div class="plinks">${links.map((l) =>
              `<a href="${safeUrl(l.url)}" ${newTab}>${esc(l.label)}<span class="sr-only"> for ${esc(title)}</span>${newTabHint}</a>`
          ).join("")}</div>`
        : "";

    return `
        <article class="card" data-cat="${esc(category)}" aria-labelledby="${id}">
            ${Media(media, title)}
            <span class="meta">${esc(meta)}</span>
            <h3 id="${id}">${esc(title)}</h3>
            <p>${esc(description)}</p>
            ${result ? `<p class="impact"><b>Result:</b> ${esc(result)}</p>` : ""}
            ${Chips(tags, "Technologies")}
            ${linkList}
        </article>`;
}