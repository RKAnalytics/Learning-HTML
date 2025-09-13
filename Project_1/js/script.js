// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // -----------------------------
    // Input animation
    // -----------------------------
    const input = document.querySelector("input[type='text']");
    if (input) {
        input.addEventListener("focus", () => {
            input.style.transform = "scale(1.05)";
            input.style.transition = "0.3s ease";
        });

        input.addEventListener("blur", () => {
            input.style.transform = "scale(1)";
        });
    }

    // -----------------------------
    // Fake GPS detection simulation
    // -----------------------------
    const locationSelect = document.getElementById("location");
    if (locationSelect) {
        locationSelect.addEventListener("change", () => {
            if (locationSelect.value === "gps") {
                // Show loading animation
                const loader = document.createElement("div");
                loader.innerText = "Detecting your location...";
                loader.style.position = "fixed";
                loader.style.top = "20px";
                loader.style.right = "20px";
                loader.style.padding = "10px 20px";
                loader.style.background = "#e23744";
                loader.style.color = "white";
                loader.style.borderRadius = "8px";
                loader.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
                document.body.appendChild(loader);

                setTimeout(() => {
                    loader.innerText = "📍 Location detected: New Delhi, India";
                }, 1500);

                setTimeout(() => {
                    loader.remove();
                }, 3500);
            }
        });
    }

    // -----------------------------
    // Animate nav links on load
    // -----------------------------
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(-20px)";
        setTimeout(() => {
            link.style.transition = "all 0.6s ease";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, index * 200 + 500);
    });

    // -----------------------------
    // Smooth scroll effect for footer
    // -----------------------------
    const footer = document.querySelector("footer");
    if (footer) {
        footer.addEventListener("mouseenter", () => {
            footer.style.backgroundColor = "#ff4757";
            footer.style.transition = "background 0.3s ease";
        });
        footer.addEventListener("mouseleave", () => {
            footer.style.backgroundColor = "#e23744";
        });
    }
});
