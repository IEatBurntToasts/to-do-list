import utilsUI from './utils-ui.js';

export default (function tasksUIManager() {
    function addStarListener(starElement) {
        starElement.addEventListener('click', (e) => {
            let starState = e.target.textContent;

            if (starState == 'star_outline') {
                e.target.textContent = 'star';
            } else {
                e.target.textContent = 'star_outline';
            }
        });
    }
    function addDotDropdownListener(dotDropdownElement,optionsElement) {
        dotDropdownElement.addEventListener('click', (e) => {
            e.stopPropagation();
            utilsUI.toggleActiveElement(optionsElement);
        });
    }
    function addEditOptionListener(editElement) {
        editElement.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    function addDeleteOptionListener(deleteElement) {
        deleteElement.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    return { 
        addStarListener, 
        addDotDropdownListener, 
        addEditOptionListener, 
        addDeleteOptionListener 
    }
})();