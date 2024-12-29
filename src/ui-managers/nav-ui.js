export default (function navUIManager() {
    function createProject(title) {
        const project = document.createElement('div');
        const projectTitle = document.createElement('h3');
        const projectEdit = document.createElement('span');

        project.className = 'bar project';
        projectEdit.className = 'material-icons-round project';

        projectTitle.textContent = title;
        projectEdit.textContent = 'more_vert';

        project.append(projectTitle,projectEdit);

        return project;
    }
    function createProjectEditForm(projectTitle) {
        ;
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