const task = (title,description='',dueDate='',priority=0,note='') => {
    return {
        get title() {
            return title;
        },
        set title(newTitle) {
            title = newTitle;
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
        },
        get priority() {
            return priority;
        },
        set priority(newPriority) {
            priority = newPriority;
        },
        get note() {
            return note;
        },
        set note(newNote) {
            note = newNote;
        }
    }
}

export { task };