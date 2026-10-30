import { esc } from "../utils.js";

export default function AchievementCard({ title, description, when }) {
    return `
    <li class="award">
        <div>
            <h3>${esc(title)}</h3>
            <p>${esc(description)}</p>
        </div>
        <span class="when">${esc(when)}</span>
    </li>`;
}