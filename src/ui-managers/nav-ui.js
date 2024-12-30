import utilsUI from "./utils-ui";

export default (function navUIManager() {
    function createProject(title) {
        const project = document.createElement('div');
        const projectTitle = document.createElement('h3');
        const projectEdit = document.createElement('span');
        const editOptions = document.createElement('div');
        const renameButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        editOptions.className = 'options';
        renameButton.className = 'rename';
        deleteButton.className = 'delete';
        project.className = 'bar project';
        projectEdit.className = 'material-icons-round project';

        projectTitle.textContent = title;
        projectEdit.textContent = 'more_vert';
        deleteButton.textContent = 'Delete';
        renameButton.textContent = 'Rename';

        addProjectDotDropdownListener(projectEdit,editOptions);

        editOptions.append(renameButton,deleteButton);
        projectEdit.append(editOptions)
        project.append(projectTitle,projectEdit,projectEdit);

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
    function addProjectDotDropdownListener(projectDotDropdown,editOptions) {
        projectDotDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            utilsUI.toggleActiveElement(editOptions);
        });
    }

    return {
        createProject,
        addProjectAbove,
        addProject,
        addProjectDotDropdownListener
    }
})();