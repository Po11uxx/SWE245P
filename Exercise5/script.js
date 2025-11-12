function setupTabs() {
    // Select all buttons with the 'tabs__button' class
    document.querySelectorAll(".tabs__button").forEach((button) => {
        // Add click event listener to each button
        button.addEventListener("click", () => {
            // Get references to related DOM elements
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;

            // Identify which tab this button corresponds to (via data attribute)
            const tabNumber = button.dataset.forTab;

            // Select the content area that matches this button
            const tabToActivate = tabsContainer.querySelector(
                `.tabs__content[data-tab="${tabNumber}"]`
            );
            // Deactivate all buttons and contents first
            sideBar.querySelectorAll(".tabs__button").forEach((button) => {
                button.classList.remove("tabs__button--active");
            });
            tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
                tab.classList.remove("tabs__content--active");
            });

            // Activate the clicked button and its corresponding tab content
            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
            console.log("click event on button");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});

