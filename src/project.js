const { task } = require("./task");

const project = (title,projectID) => {
    const _tasks = new Map();
    const _idStack = [];

    function createTask(title,description='',dueDate='') {
        const taskID = (_idStack.length) ? _idStack.pop() : _tasks.size + 1;

        _tasks.set(taskID,task(title,taskID,description,dueDate));
    }
    function deleteTask(taskID) {
        _tasks.delete(taskID);
        idQueue.push(taskID);
    }
    function editTask(taskID,taskProperty,newValue) {
        _tasks.get(taskID)[taskProperty] = newValue;
    }
    function size() {
        return _tasks.size;
    }
    return {
        set title(newTitle) {
            title = newTitle;
        },
        get title() {
            return title;
        },
        set projectID(newProjectID) {
            projectID = newProjectID;
        },
        get projectID() {
            return projectID;
        },
        createTask,
        deleteTask,
        editTask,
        size
    }
}

export { project }