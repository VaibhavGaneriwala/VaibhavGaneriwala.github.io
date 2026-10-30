import { has, Section } from "../utils.js";
import AchievementCard from "./AchievementCard.js";

export default function Achievements({ achievements }) {
    if (!has(achievements)) return "";

    const cards = achievements.map((award) => AchievementCard(award)).join("");

    return Section(
        { id: "achievements", eyebrow: "Achievements", heading: "Recognition." },
        `<ul class="awards">${cards}</ul>`
    );
}