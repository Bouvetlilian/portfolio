// Scroll fluide pour la navigation

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

//Effet de fondu sur les sections au scroll
const sections = document.querySelectorAll("section");

const reavelSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
};

document.addEventListener("DOMContentLoaded", reavelSection);
window.addEventListener("scroll", reavelSection);

//Gestion de la soumission du formulaire
document.getElementById("contact-form").addEventListener("submit", function(e) {


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //Affichage d'un message de confirmation
    alert(`Merci ${name} ! J'ai bien reçu votre message`)

    //Réinitialiser le formulaire
    document.getElementById("contact-form").reset();
});

// Effet de fondu sur la section compétences 

const skillsSectioon = document.getElementById('competences');
const skillsBars = document.querySelectorAll('progress');

const revealSkills = () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        skillsBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        });
    }
};

window.addEventListener('scroll', revealSkills);
