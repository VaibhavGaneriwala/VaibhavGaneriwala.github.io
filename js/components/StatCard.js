import {esc} from "../utils.js";

export default function StatCard({value, label}){
    return `<li class="fact"><b>${esc(value)}</b> <span>${esc(label)}</span></li>`;
}