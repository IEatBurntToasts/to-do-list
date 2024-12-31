const task = (title,uniqueID,description='',dueDate='') => {
    return {
        get title() {
            return title;
        },
        set title(newTitle) {
            title = newTitle;
        },
        get uniqueID() {
            return uniqueID;
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