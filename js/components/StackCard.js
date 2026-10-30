import { esc, Chips } from "../utils.js";

export default function StackCard({ group, items }) {
    return `
    <div class="stack-card">
        <h3>${esc(group)}</h3>
        ${Chips(items, group)}
    </div>`;
}