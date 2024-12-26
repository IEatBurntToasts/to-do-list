const { task } = require("./task");

const project = (title) => {
    const _tasks = [];

    function createTask(title,description,dueDate,priority=0,note='') {
        _tasks.push(task(title,description,dueDate,priority,note));
    }
    function deleteTask(index) {
        _tasks.splice(index,1);
    }
    function editTask(index,taskProperty,newValue) {
        _tasks[index][taskProperty] = newValue;
    }
    function getTask(index) {
        return _tasks[index];
    }
    function length() {
        return _tasks.length;
    }
    return {
        set title(newTitle) {
            title = newTitle;
        },
        get title() {
            return title;
        },
        createTask,
        deleteTask,
        editTask,
        getTask,
        length
    }
}

export { project }