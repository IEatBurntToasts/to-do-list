import navUIManager from "./ui-managers/nav-ui.js";
import projectManager from "./project-manager.js";

export default (function formManager() {
    const projectFormManager = (() => {
        const projectNavBar = document.querySelector('.project-sections .sidebar');
        const projectFormContainer = document.querySelector('.bar.project.form');
        const projectForm = document.querySelector('form.project.form');
        const addButton = projectForm.querySelector('button.add');
        const cancelButton = projectForm.querySelector('button.cancel');
    
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
    
            const input = projectForm.querySelector('input').value;
            const project = navUIManager.createProject(input);
    
            project.textContent = input;
            
            navUIManager.addProjectAbove(project,projectFormContainer,projectNavBar);
            projectManager.addProject(input);
            projectForm.reset();
        });
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
        });
    })();
    const taskFormManager = (() => {
        ;
    });

    return { taskFormManager }
})();