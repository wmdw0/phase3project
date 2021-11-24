import React from "react";
import Task from "./Task";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function TaskList({
    tasks, 
    categories,
    currentUser,
    onTaskDelete,
    onUpdateTask,
    
}) {
    return (
       
        <div className="list">
             {/* <Toolbar>
          
          {/* <Typography variant="h6" component="div" sx={{ marginLeft: '50px', flexGrow: 1 }}>
            Backlog
          </Typography> 
            
            </Toolbar> */}
            <ul className="backlog">
                {tasks.map((task) => (
                    <Task
                    key={task.id}
                    task={task}
                    categories={categories}
                    currentUser={currentUser}
                    onTaskDelete={onTaskDelete}
                    onUpdateTask={onUpdateTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;