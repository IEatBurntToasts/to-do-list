export default (function navUIManager() {
    function createProject(title) {
        const project = document.createElement('div');

        project.textContent = title;
        project.className = 'bar project';

        return project;
    }
    function addProjectAbove(element,referenceElement,parentElement) {
        parentElement.insertBefore(element,referenceElement);
    }
    function addProject(element,parentElement) {
        parentElement.append(element);
    }

    return {
        createProject,
        addProjectAbove,
        addProject
    }
})();