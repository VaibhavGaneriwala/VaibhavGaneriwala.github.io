export function initNavbar() {
    const notch = document.querySelector("#notch");
    const menuBtn = notch.querySelector(".menu-btn");
    const links = notch.querySelectorAll("nav a");
    
    let hovering = false;
    
    function sync() {
        const shouldExpand = window.scrollY > 40 || hovering || notch.classList.contains("open");
        notch.classList.toggle("expanded", shouldExpand);
    }
    
    window.addEventListener("scroll", sync, { passive: true });
    
    if (window.matchMedia("(hover: hover)").matches) {
        notch.addEventListener("mouseenter", () => { hovering = true; sync(); });
        notch.addEventListener("mouseleave", () => { hovering = false; sync(); });
    }
    
    notch.addEventListener("focusin", () => { hovering = true; sync(); });
    notch.addEventListener("focusout", (event) => {
        if (!notch.contains(event.relatedTarget)) {
            hovering = false;
            sync();
        }
    });
    
    function closeMenu(returnFocus) {
        if (!notch.classList.contains("open")) return;
        notch.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        sync();
        if (returnFocus) menuBtn.focus();
    }
    
    menuBtn.addEventListener("click", () => {
        const isOpen = notch.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        sync();
        if (isOpen) links[0].focus();
    });
    
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu(true);
    });
    
    links.forEach((link) => {
        link.addEventListener("click", () => closeMenu(false));
    });
    
    sync();
}