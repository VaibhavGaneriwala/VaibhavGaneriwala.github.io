import { esc, has, Section } from "../utils.js";
import ProjectCard from "./ProjectCard.js";

export default function Projects({ projects, projectFilters }) {
    if (!has(projects)) return "";

    const filters = has(projectFilters) ? `
        <div class="filters" role="group" aria-label="Filter projects">
            <button type="button" aria-pressed="true" data-f="all">All</button>
            ${projectFilters.map((f) =>
                `<button type="button" aria-pressed="false" data-f="${esc(f.id)}">${esc(f.label)}</button>`
            ).join("")}
        </div>
        <p class="sr-only" id="filter-status" aria-live="polite"></p>` : "";

    return Section(
        { id: "projects", eyebrow: "Projects", heading: "Selected work." },
        `${filters}<div class="projects">${projects.map(ProjectCard).join("")}</div>`
    );
}

export function initProjects() {
    const buttons = document.querySelectorAll(".filters button");
    const status = document.querySelector("#filter-status");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

            let shown = 0;
            document.querySelectorAll(".card").forEach((card) => {
                card.hidden = button.dataset.f !== "all" && card.dataset.cat !== button.dataset.f;
                if (!card.hidden) shown++;
            });

            if (status) {
                status.textContent = `Showing ${shown} ${shown === 1 ? "project" : "projects"}: ${button.textContent}`;
            }
        });
    });
}