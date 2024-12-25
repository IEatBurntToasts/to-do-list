const { task } = require("./task");

const project = (title) => {
    const _projectItems = [];

    function createTask(title,description='',dueDate='',priority='',note='') {
        _projectItems.push(task(title,description='',dueDate='',priority='',note=''));
    }
    function deleteTask(index) {
        _projectItems.splice(index,1);
    }
    function editTask(index,taskProperty,newValue) {
        _projectItems[index][taskProperty] = newValue;
    }
    function getTaskProperty(index,taskProperty) {
        return _projectItems[index][taskProperty];
    }
    return {
        set title(title) {
            this.title = title;
        },
        get title() {
            return this.title;
        },
        createTask,
        deleteTask,
        editTask,
        getTaskProperty
    }
}