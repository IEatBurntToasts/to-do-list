import projectManager from "../project-manager";
import utilsUI from "./utils-ui";

export default (function navUIManager() {
    const projectIDs = new Set();

    function createProject(title,projectID) {
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
        addDeleteProjectListener(deleteButton);

        editOptions.append(renameButton,deleteButton);
        projectEdit.append(editOptions);
        project.append(projectTitle,projectEdit,projectEdit);

        project.setAttribute('data-id',projectID);

        return project;
    }
    function deleteProject(project) {
        const projectID = parseInt(project.getAttribute('data-id'));

        projectManager.deleteProject(projectID);
        project.remove();

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
    function addDeleteProjectListener(deleteButton) {
        deleteButton.addEventListener('click', () => {
            const project = deleteButton.parentElement.parentElement.parentElement;
            
            deleteProject(project);
        });
    }

    return {
        createProject,
        addProjectAbove,
        addProject,
        addProjectDotDropdownListener
    }
})();