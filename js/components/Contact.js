import {esc, safeUrl, newTab, newTabHint, Section} from "../utils.js";
import ContactCard from "./ContactCard.js";

const bare = (url = "") => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Contact({contact = {}, phone, email, location, resume, links = {}}) {
    const cards = [
        ContactCard({icon: "phone", label: "Phone", value: phone, url: phone && `tel:+1${phone.replace(/\D/g, "")}`}),
        ContactCard({icon: "location", label: "Location", value: location}),
        ContactCard({icon: "linkedin", label:"LinkedIn", value: bare(links.linkedin), url: links.linkedin}),
        ContactCard({icon: "github", label: "GitHub", value: bare(links.github), url: links.github}),
    ].join("");

    const emailBtn = email
        ? `<a class="btn solid" href="${safeUrl(`mailto:${email}`)}"><span class="sr-only">Email </span>${esc(email)}</a>`
        : "";

    const resumeBtn = resume
        ? `<a class="btn ghost" href="${safeUrl(resume)}" ${newTab}>Download résumé<span class="sr-only"> (PDF)</span>${newTabHint}</a>`
        : "";

    return Section(
        { id: "contact", eyebrow: "Contact", heading: esc(contact.heading || "Get in touch.") },
        `<p>${esc(contact.text || "")}</p>
        <ul class="details" aria-label="Contact details">${cards}</ul>
        <div class="ctas">${emailBtn}${resumeBtn}</div>`
    );
}