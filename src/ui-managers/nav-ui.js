import formManager from "../form-manager";
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
    function renameProject(project,newProjectTitle) {
        const projectID = parseInt(project.getAttribute('data-id'));
        const titleField = project.querySelector('h3');
        
        titleField.textContent = newProjectTitle;
        formManager.renameProject(projectID,newProjectTitle);
    }
    function deleteProject(project) {
        const projectID = parseInt(project.getAttribute('data-id'));

        project.remove();
        formManager.deleteProject(projectID);
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
            const navBar = document.querySelector('.project-sections nav.sidebar');
            const renameForm = projectRenameForm(project);
            const input = renameForm.querySelector('input');
            const title = project.querySelector('h3').textContent;

            utilsUI.toggleActiveElement(renameForm);
            toggleProjectEditMode(project);
            addProjectAbove(renameForm,project,navBar);
            renameForm.querySelector('input').focus();
            input.value = title;
        });
    }
    function projectRenameForm(project) {
        const renameForm = document.createElement('form');
        const input = document.createElement('input');
        const buttonGroup = document.createElement('div');
        const renameButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        input.setAttribute('type','text');
        input.setAttribute('id','edit-project-title');
        input.setAttribute('name','edit-project-title');
        input.setAttribute('minlength','1');
        input.setAttribute('maxlength','30');
        input.setAttribute('autocomplete','off');
        renameButton.setAttribute('type','submit');
        
        renameForm.className = 'bar project form-rename';
        buttonGroup.className = 'form button-group';
        renameButton.className = 'rename';
        cancelButton.className = 'cancel';

        renameButton.textContent = 'Rename';
        cancelButton.textContent = 'Cancel';

        renameForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitter = e.submitter.className;
            const title = input.value;

            console.log(submitter);
            
            // Check if 'rename' or 'cancel' button was pressed
            if (submitter == 'rename') {
                renameProject(project,title);
            }

            utilsUI.toggleActiveElement(renameForm);
            toggleProjectEditMode(project);
            renameForm.remove();
        });

        renameForm.append(input,buttonGroup);
        buttonGroup.append(renameButton,cancelButton);

        return renameForm;
    }
    function toggleProjectEditMode(project) {
        project.classList.toggle('edit-mode');
    }

    return {
        createProject,
        projectRenameForm,
        addProject,
        addProjectAbove
    }
})();