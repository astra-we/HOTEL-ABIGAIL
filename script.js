const sections = document.querySelectorAll(
".hero, .about, .rooms, .services, .footer"
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    observer.observe(section);
});

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
