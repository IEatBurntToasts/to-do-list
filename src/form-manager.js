import navUIManager from "./ui-managers/nav-ui.js";
import utilsUI from "./ui-managers/utils-ui.js";
import projectManager from "./project-manager.js";

export default (function formManager() {
    (function projectFormManager() {
        const projectNavBar = document.querySelector('.project-sections .sidebar');
        const projectFormContainer = document.querySelector('.bar.project.form');
        const projectAdd = document.querySelector('.bar.project-add');
        const projectForm = document.querySelector('form.project.form');
        const cancelButton = projectForm.querySelector('button.cancel');

        projectAdd.addEventListener('click', () => {
            utilsUI.toggleActiveElement(projectAdd,projectForm);
            projectForm.querySelector('input').focus();
        });

        cancelButton.addEventListener('click', () => {
            utilsUI.toggleActiveElement(projectForm, projectAdd);
        });
    
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Despite pointer events set to none, pressing "enter" on form still sends 
            // click event through despite form not being active.
            if (!projectForm.classList.contains('active')) {
                return;
            }
    
            const input = projectForm.querySelector('input').value;
            const projectID = projectManager.addProject(input); // Add project logic side and returns projectID for project
            const project = navUIManager.createProject(input,projectID);
            
            navUIManager.addProjectAbove(project,projectFormContainer,projectNavBar);
            utilsUI.toggleActiveElement(projectForm, projectAdd);
            projectForm.reset();
        });
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
        });
    })();
    function deleteProject(projectID) {
        
    }
})();