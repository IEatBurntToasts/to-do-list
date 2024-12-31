const { task } = require("./task");

const project = (title,projectDOMElement) => {
    const _tasks = new Map();
    const idStack = [];

    function createTask(title,description='',dueDate='') {
        const taskID = (idStack.length) ? idStack.pop() : idStack.length + 1;

        _tasks.set(taskID,task(title,taskID,description,dueDate));
    }
    function deleteTask(taskID) {
        _tasks.delete(taskID);
        idQueue.push(taskID);
    }
    function editTask(taskID,taskProperty,newValue) {
        _tasks.get(taskID)[taskProperty] = newValue;
    }
    function getTask(taskID) {
        return _tasks.get(taskID);
    }
    function length() {
        return _tasks.size;
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