document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");

    const texts = {
        pt: {
            heroText: "Explore o Futuro dos Carros de Luxo",
            cars: ["Mercedes AMG GT", "Porsche 911 GT3 Touring", "Audi RS6 Avant", "BMW M8 Competition Gran Coupé"],
            ctaText: "Ver Detalhes",
            aboutTitle: "Sobre Mim",
            aboutText: "Desenvolvedor apaixonado por tecnologia, design de interfaces elegantes e experiências digitais que deixam uma marca.",
            footer: "&copy; 2024 AutoLux. Todos os direitos reservados."
        },
        en: {
            heroText: "Explore the Future of Luxury Cars",
            cars: ["Mercedes AMG GT", "Porsche 911 GT3 Touring", "Audi RS6 Avant", "BMW M8 Competition Gran Coupé"],
            ctaText: "View Details",
            aboutTitle: "About Me",
            aboutText: "Developer passionate about technology, elegant interface design, and digital experiences that leave a mark.",
            footer: "&copy; 2024 AutoLux. All rights reserved."
        },
        es: {
            heroText: "Explora el futuro de los coches de lujo",
            cars: ["Mercedes AMG GT", "Porsche 911 GT3 Touring", "Audi RS6 Avant", "BMW M8 Competition Gran Coupé"],
            ctaText: "Ver Detalles",
            aboutTitle: "Sobre mí",
            aboutText: "Desarrollador apasionado por la tecnología, el diseño de interfaces elegantes y experiencias digitales que dejan huella.",
            footer: "&copy; 2024 AutoLux. Todos los derechos reservados."
        }
    };

    languageSelector.addEventListener("change", (e) => {
        const language = e.target.value;
        updateContent(language);
    });

    function updateContent(language) {
        const selectedTexts = texts[language];

        // Atualizando os textos
        document.querySelector(".hero h2").textContent = selectedTexts.heroText;
        document.querySelector("#about h2").textContent = selectedTexts.aboutTitle;
        document.querySelector("#about p").textContent = selectedTexts.aboutText;
        document.querySelector(".footer p").innerHTML = selectedTexts.footer;

        // Atualizando os carros
        const carCards = document.querySelectorAll(".car-card");
        const carTitles = selectedTexts.cars;

        carCards.forEach((card, index) => {
            const title = card.querySelector("h3");
            title.textContent = carTitles[index];
            const cta = card.querySelector(".cta-btn");
            cta.textContent = selectedTexts.ctaText;
        });
    }
});
