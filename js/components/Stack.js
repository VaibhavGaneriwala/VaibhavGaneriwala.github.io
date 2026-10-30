import { has, Section } from "../utils.js";
import StackCard from "./StackCard.js";

export default function Stack({ stack }) {
    if (!has(stack)) return "";

    const cards = stack.map((group) => StackCard(group)).join("");

    return Section(
        { id: "stack", eyebrow: "Stack", heading: "Tools I use." },
        `<div class="stack">${cards}</div>`
    );
}