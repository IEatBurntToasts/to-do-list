import utilsUI from './utils-ui.js';

export default (function navUIManager() {
    function createProjectElement(title) {
        const project = document.createElement('div');

        project.textContent = title;
        project.classList.add('project');

        return project;
    }
    function addProjectElement(element,parentElement) {
        parentElement.append(element);
    }

    return {
        createProjectElement, 
        addProjectElement 
    }
})();