import content from "./content.js";
import { initNavbar } from "./components/Navbar.js";
import { initHero } from "./components/Hero.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects, {initProjects} from "./components/Projects.js";
import Education from "./components/Education.js";
import Achievements from "./components/Achievements.js";
import Stack from "./components/Stack.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import MotionToggle, {initMotionToggle} from "./components/MotionToggle.js";
import initReveal from "./reveal.js";

const components = {About, Experience, Projects, Education, Achievements, Stack, Contact, Footer, MotionToggle};

document.querySelectorAll("[data-component]").forEach((slot) => {
    const render = components[slot.dataset.component];
    if (!render) {
        console.warn(`Unknown component: ${slot.dataset.component}`);
        return;
    }
    slot.outerHTML = render(content);
});

initNavbar();
initHero(content);
initProjects();
initMotionToggle();
initReveal();

// Jump to the section named in the address bar, e.g. index.html#projects.
// Sections are built by JavaScript, so the browser's own jump happens too early.
if (location.hash) {
    document.fonts.ready.then(() => {
        const target = document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "instant" });
    });
}
