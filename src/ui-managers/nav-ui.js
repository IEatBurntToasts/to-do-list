import projectManager from "../project-manager";
import utilsUI from "./utils-ui";

export default (function navUIManager() {
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
        addRenameProjectListener(renameButton);
        addDeleteProjectListener(deleteButton);

        editOptions.append(renameButton,deleteButton);
        projectEdit.append(editOptions);
        project.append(projectTitle,projectEdit,projectEdit);

        project.setAttribute('data-id',projectID);

        return project;
    }
    function renameProject(project) {
        const projectID = parseInt(project.getAttribute('data-id'));
        const projectRenameForm = projectRenameFormElement(project.textContent);
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
    function addRenameProjectListener(renameButton) {
        renameButton.addEventListener('click', () => {
            const project = renameButton.parentElement.parentElement.parentElement;

            renameProject(project);
        });
    }
    function projectRenameFormElement(currentProjectTitle) {
        const renameForm = document.createElement('div');
        const input = document.createElement('input');
        const buttonGroup = document.createElement('div');
        const renameButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        renameForm.className = 'bar project form-rename';
        input.setAttribute('autofocus','autofocus');
        input.setAttribute('type','text');
        input.setAttribute('id','edit-project-title');
        input.setAttribute('name','edit-project-title');
        input.setAttribute('pattern','[a-zA-Z]+');
        input.setAttribute('minlength','1');
        input.textContent = currentProjectTitle;

        buttonGroup.className = 'form button-group';
        renameButton.className = 'rename';
        cancelButton.className = 'cancel';

        renameButton.textContent = 'Rename';
        cancelButton.textContent = 'Cancel';

        renameForm.append(input,buttonGroup);
        buttonGroup.append(renameButton,cancelButton);

        return renameForm;
    };

    return {
        createProject
    }
})();