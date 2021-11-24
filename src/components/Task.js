import React, { useState } from "react";
import EditTask from "./EditTask";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Filter9RoundedIcon from '@mui/icons-material/Filter9Rounded';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';

function Task({ task, categories, currentUser, onTaskDelete, onUpdateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const { id, username, description, category_id, body, created_at: createdAt } = task;
    // const {categories} = categories;
    console.log(task);
    let category = categories.find(function(id) {
        console.log(id.id)
        console.log(id)
        return id?.id == category_id;
    })
    // console.log(category?.title)

    const timestamp = new Date(createdAt).toLocaleTimeString();

    const isCurrentUser = currentUser.username === username; 

    function handleDeleteClick(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "DELETE",
        });

        onTaskDelete(id);
    }

    function handleUpdateTask(updatedTask) {
        setIsEditing(false);
        onUpdateTask(updatedTask);
    }

    function handleCheck(event) {
        setChecked(event.target.checked);
      };

    return (
        <li>
             {/* <span className="user">{username}</span> */}
            {/*<span className="time">{timestamp}</span> */}
            {isEditing ? (
                <EditTask
                id={id}
                body={body}
                category_id={category_id}
                description={description}
                onUpdateTask={handleUpdateTask}
                />
            ) : (
                <div className="BottomContainer">
                    <div className="CheckAndTitle">
                    <Checkbox
      checked={checked}
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <span className="Bottom">{body}</span>
    </div>
    <Divider />
    <div className="chip">
    <Chip className="chip" label={category?.title || "Category"} variant="outlined">
    {category_id}</Chip>
    </div>
    {/* <Divider /> */}
    <span className="BottomP">
    {/* <CheckIcon  className="Icon"/>Complete  */}
    </span>
    {/* <Divider /> */}
    <span className="Sub">{description}</span>
  </div>
            )}
            {isCurrentUser ? (
                <div className="actions">
                    <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                        <span role="img" aria-label="edit">
                            <EditIcon color="primary"/>
                        </span>
                    </button>
                    <button onClick={handleDeleteClick}>
                        <span role="img" aria-label="delete">
                        <DeleteIcon color="primary"/>
                        </span>
                    </button>
                </div>
            ) : null}
        </li>
    );
}

export default Task;