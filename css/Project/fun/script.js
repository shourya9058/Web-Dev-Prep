document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no");

    noButton.addEventListener("mouseover", () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calculate random position, ensuring the button stays inside the viewport
        let x = Math.random() * (window.innerWidth - buttonWidth);
        let y = Math.random() * (window.innerHeight - buttonHeight);

        // Ensure the button stays fully inside the viewport
        // x position cannot exceed the width minus button's width
        // y position cannot exceed the height minus button's height
        if (x + buttonWidth > window.innerWidth) {
            x = window.innerWidth - buttonWidth;
        }
        if (y + buttonHeight > window.innerHeight) {
            y = window.innerHeight - buttonHeight;
        }

        // Set the new position of the button
        noButton.style.position = "absolute"; // Make sure the button can be positioned
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
