const task = (title,taskID,description='',dueDate='') => {
    return {
        get title() {
            return title;
        },
        set title(newTitle) {
            title = newTitle;
        },
        get taskID() {
            return taskID;
        },
        get description() {
            return description;
        },
        set description(newDescription) {
            description = newDescription;
        },
        get dueDate() {
            return dueDate;
        },
        set dueDate(newDueDate) {
            dueDate = newDueDate;
        }
    }
}

export { task };