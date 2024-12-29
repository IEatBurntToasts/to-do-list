import navUIManager from "./ui-managers/nav-ui.js";
import utilsUI from "./ui-managers/utils-ui.js";
import projectManager from "./project-manager.js";

export default (function formManager() {
    const projectFormManager = (() => {
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
            const project = navUIManager.createProject(input);
            
            navUIManager.addProjectAbove(project,projectFormContainer,projectNavBar);
            projectManager.addProject(input);
            projectForm.reset();
            utilsUI.toggleActiveElement(projectForm, projectAdd);
        });
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
        });
    })();
    const renameFormManager = (() => {
        ;
    });
    const taskFormManager = (() => {
        ;
    });

    return { taskFormManager }
})();