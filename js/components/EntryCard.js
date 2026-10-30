import { esc, has, bold } from "../utils.js";

const chevron = `
    <span class="toggle" aria-hidden="true">
        <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="m6 9 6 6 6-6"/>
        </svg>
    </span>`;

export default function EntryCard({when, role, company, location, bullets}, open = false){
    const details = `
    <span class="when">${esc(when)}</span>
    <span class="role">${esc(role)}</span>
    <span class="org">${esc(company)}</span>
    <span class="loc">${esc(location)}</span>`;

    if (!has(bullets)) {
        return `<div class="job"><div class="summary">${details}</div></div>`;
    }

    return `
    <details class="job"${open ? " open" : ""}>
    <summary>${details}${chevron}</summary>
    <ul>${bullets.map((b) => `<li>${bold(b)}</li>`).join("")}</ul>
    </details>`;
}
