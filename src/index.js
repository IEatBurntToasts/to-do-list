import projectManager from "./project-manager";
import navUIManager from "./ui-manager/nav-ui";
import tasksUIManager from "./ui-manager/tasks-ui";
import windowUIManager from "./ui-manager/window-ui";
import './styles.css';

// title, description, duedate, priotirity, notes 

projectManager.addProject('project1');

const task = document.querySelector('.task');
const star = task.querySelector('span.star');
const dropdown = task.querySelector('[data-dropdown-button]');
const editElement = task.querySelector('.edit');
const deleteElement = task.querySelector('.delete');

tasksUIManager.addStarListener(star);
tasksUIManager.addDotDropdownListener(dropdown);
tasksUIManager.addEditOptionListener(editElement);
tasksUIManager.addDeleteOptionListener(deleteElement);

