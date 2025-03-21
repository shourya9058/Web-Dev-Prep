let inputField = document.getElementById("nameInput");
        let heading = document.getElementById("displayName");

        inputField.addEventListener("input", function() {
            // Allow only letters (a-z, A-Z) and spaces
            let filteredText = inputField.value.replace(/[^a-zA-Z ]/g, "");
            inputField.value = filteredText; // Update input field (remove unwanted characters)
            heading.innerText = filteredText; // Update heading dynamically
        });

