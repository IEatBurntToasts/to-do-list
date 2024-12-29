import utilsUI from "./utils-ui.js";

export default (function windowUIManager() {
    document.addEventListener('click', () => {
        const activeDropdownOptionElements = document.querySelectorAll('div.options');

        activeDropdownOptionElements.forEach(element => {
            if (element.classList.contains('active')) {
                utilsUI.removeActiveElement(element);
            }
        });
    });
})();