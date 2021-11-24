import React, { useState } from "react";

function EditTask({ id, body, description, category_id, onUpdateTask }) {
    const [taskBody, setTaskBody] = useState(body);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCategory_id, setTaskCategory] = useState(category_id);

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                body: taskBody,
                description: taskDescription,
                category_id: taskCategory_id
            }),
        })
            .then((r) => r.json())
            .then((updatedTask) => onUpdateTask(updatedTask));
    }

    return (
        <form className="edit-task" onSubmit={handleFormSubmit}>
            <input 
            className="title"
            type="text"
            name="body"
            autoComplete="off"
            value={taskBody}
            onChange={(e) => setTaskBody(e.target.value)}
            />
            <input 
            className="description"
            type="text"
            name="description"
            autoComplete="off"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input 
            className="category_id"
            type="text"
            name="category_id"
            autoComplete="off"
            value={taskCategory_id}
            onChange={(e) => setTaskCategory(e.target.value)}
            />
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditTask;