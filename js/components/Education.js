import { has, Section } from "../utils.js";
import EntryCard from "./EntryCard.js";

export default function Education({ education }) {
    if (!has(education)) return "";

    const cards = education.map((degree) => EntryCard(degree)).join("");

    return Section(
        { id: "education", eyebrow: "Education", heading: "Where I studied." },
        `<div class="edu">${cards}</div>`
    );
}