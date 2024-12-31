import { project } from './project.js';

export default (function projectManager() {
    const _projects = new Map();
    const _projectIDStack = [];

    function addProject(title) {
        const projectID = (_projectIDStack.length) ? _projectIDStack.pop() : _projects.size + 1;

        _projects.set(projectID,project(title,projectID));
    }
    function deleteProject(projectID) {
        _projects.delete(projectID);
        _projectIDStack.push(projectID);
    }
    function getProject(projectID) {
        return _projects.get(projectID);
    }
    function editProjectTitle(projectID,newProjectTitle) {
        _projects.get(projectID).title = newProjectTitle;
    }   
    
    return {
        addProject,
        deleteProject,
        getProject,
        editProjectTitle
    }
})();