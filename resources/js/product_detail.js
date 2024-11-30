
// 상세페이지 

document.addEventListener("DOMContentLoaded", () => {
    const sizeOptions = document.querySelectorAll('input[name="select-size"]');
    const colorOptions = document.querySelectorAll('input[name="select-color"]');
    const selectedSizeValue = document.querySelector(".selected-size .user-optional__value");
    const selectedColorValue = document.querySelector(".selected-color .user-optional__value");

    // Helper function to update the displayed value
    const updateSelectedValue = (options, target, attribute = null) => {
        const defaultOption = Array.from(options).find(option => option.checked);
        if (defaultOption) {
            target.textContent = attribute 
                ? defaultOption.getAttribute(attribute)
                : defaultOption.labels[0]?.textContent.trim();
        }

        options.forEach(option => {
            option.addEventListener("change", () => {
                if (option.checked) {
                    if (attribute) {
                        // Use the attribute value (e.g., data-color-name)
                        target.textContent = option.getAttribute(attribute);
                    } else if (option.labels && option.labels[0]) {
                        // Use the label's text content
                        target.textContent = option.labels[0].textContent.trim();
                    }
                }
            });
        });
    };

    // Update size using label text
    updateSelectedValue(sizeOptions, selectedSizeValue);

    // Update color using data-color-name
    colorOptions.forEach(option => {
        const label = option.nextElementSibling;
        if (label) {
            const colorBlock = label.querySelector(".colorblock");
            if (colorBlock) {
                // Add data-color-name attribute directly
                const backgroundColor = getComputedStyle(colorBlock).backgroundColor;
                if (!option.dataset.colorName) {
                    switch (backgroundColor) {
                        case "rgb(10, 10, 10)":
                            option.dataset.colorName = "Black";
                            break;
                        case "rgb(225, 212, 200)":
                            option.dataset.colorName = "Beige";
                            break;
                        case "rgb(177, 179, 169)":
                            option.dataset.colorName = "Gray";
                            break;
                        case "rgb(230, 195, 184)":
                            option.dataset.colorName = "Pink";
                            break;
                        default:
                            option.dataset.colorName = "Unknown";
                    }
                }
            }
        }
    });

    // Apply the updated data-color-name to display color selection
    updateSelectedValue(colorOptions, selectedColorValue, "data-color-name");

    
    const commIndexButtons = document.querySelectorAll(".comm-btn");
    const commIndexBoxes = document.querySelectorAll(".comm-indexbox");

    commIndexButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // **버튼 폼 전송 막아놓음!!
            event.preventDefault();

            commIndexButtons.forEach((btn) => btn.classList.remove("active-view"));

            button.classList.add("active-view");

            commIndexBoxes.forEach((box) => (box.style.display = "none"));

            const target = button.dataset.target;
            const activeBox = document.querySelector(`.comm-indexbox.${target}`);
            if (activeBox) {
                activeBox.style.display = "block";
            }
        });
    });
});

