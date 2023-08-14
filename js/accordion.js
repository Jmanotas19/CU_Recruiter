document.addEventListener("DOMContentLoaded", function() {
    const accordionContents = document.querySelectorAll(".accordion-content");

    accordionContents.forEach(content => {
        const label = content.querySelector(".label");
        const icon = content.querySelector(".accordion-icon");

        label.addEventListener("click", () => {
            if (!content.classList.contains("active")) {
                closeAllAccordionContents();
            }

            content.classList.toggle("active");

            if (content.classList.contains("active")) {
                content.querySelector(".content").style.display = "block";
                icon.textContent = "-";
            } else {
                content.querySelector(".content").style.display = "none";
                icon.textContent = "+";
            }
        });
    });

    function closeAllAccordionContents() {
        accordionContents.forEach(content => {
            content.classList.remove("active");
            content.querySelector(".content").style.display = "none";
            content.querySelector(".accordion-icon").textContent = "+";
        });
    }
});
