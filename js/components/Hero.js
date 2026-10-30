export function initHero({ roles }) {
    const typed = document.querySelector("#typed");
    const rolesForScreenReaders = document.querySelector("#roles-sr");
    
    rolesForScreenReaders.textContent = roles.join(", ");
    
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (roles.length < 2 || reduceMotion) return;

    let roleIndex = 0;
    let letterCount = roles[0].length;
    let deleting = true;

    function tick() {

        if (document.documentElement.classList.contains("still")){
            setTimeout(tick, 500);
            return;
        }

        const role = roles[roleIndex];
        typed.textContent = role.slice(0, letterCount);

        if (deleting) {
            letterCount--;
            if (letterCount < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                letterCount = 0;
            }
        } else {
            letterCount++;
            if (letterCount > roles[roleIndex].length) {
                deleting = true;
                letterCount = roles[roleIndex].length;
                setTimeout(tick, 1800);
                return;
            }
        }

        setTimeout(tick, deleting ? 35 : 75);
    }

    setTimeout(tick, 2000);
}