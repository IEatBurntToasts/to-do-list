import { project } from './project.js';

export default (function projectManager() {
    const _projects = [];

    function addProject(title) {
        _projects.push(project(title));
    }
    function deleteProject(index) {
        _projects.splice(index,1);
    }
    function getProject(index) {
        return _projects[index];
    }
    
    return {
        addProject,
        deleteProject,
        getProject
    }
})();