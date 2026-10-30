import { esc, has, Section } from "../utils.js";
import StatCard from "./StatCard.js";

export default function About({name, about}) {
    if (!about) return "";

    const initials = name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase();

    const photo = about.photo ? `<img src="${esc(about.photo)}" alt="Photo of ${esc(name)}" width="260" height="325">` : `<span aria-hidden="true">${esc(initials)}</span>`;

    const paragraphs = about.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("");

    const stats = has(about.stats) ? `<ul class="facts" aria-label="Highlights">${about.stats.map(StatCard).join("")}</ul>` : "";

    return Section({id: "about", eyebrow: "About", heading: esc(about.heading)},
    `<div class="about">
        <div class="photo">${photo}</div>
        <div>${paragraphs}</div>
    </div>
    ${stats}`);
}