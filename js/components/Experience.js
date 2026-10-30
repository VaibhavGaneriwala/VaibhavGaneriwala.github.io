import { has, Section } from "../utils.js";
import EntryCard from "./EntryCard.js";

export default function Experience({ experience }) {
    if (!has(experience)) return "";

    const cards = experience.map((job) => EntryCard(job)).join("");

    return Section(
        { id: "experience", eyebrow: "Experience", heading: "Where I've worked." },
        `<div class="timeline">${cards}</div>`
    );
}