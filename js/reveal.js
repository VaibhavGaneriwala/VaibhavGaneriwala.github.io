export default function initReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("in");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.05 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}