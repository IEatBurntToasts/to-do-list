import projectManager from "./project-manager";
import projectForm from "./form-manager";
import UIManager from './ui-managers/ui-manager'
import './styles.css';

// title, description, duedate, priotirity, notes 

projectManager.addProject('project1');

const task = document.querySelector('.task');
const star = task.querySelector('span.star');
const dropdown = task.querySelector('[data-dropdown-button]');
const editElement = task.querySelector('.edit');
const deleteElement = task.querySelector('.delete');

UIManager.addStarListener(star);
UIManager.addDotDropdownListener(dropdown);
UIManager.addEditOptionListener(editElement);
UIManager.addDeleteOptionListener(deleteElement);