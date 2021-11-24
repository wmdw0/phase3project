import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import TaskList from "./TaskList";
// import TaskList2 from "./TaskList2";
// import TaskList3 from "./TaskList3";
// import TaskList4 from "./TaskList4";
import NewTask from "./NewTask";

const currentUser = { username: "Steve" };


function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([0]);

    useEffect(() => {
        fetch("http://localhost:9292/tasks")
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:9292/categories`)
        .then((r) => r.json())
        .then((categories) => setCategories(categories));
    }, []);

    function handleAddTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    function handleDeleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    function handleUpdateTask(updatedTaskObj) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTaskObj.id) {
                return updatedTaskObj;
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    }
    

    const displayedTasks = tasks.filter((task) =>
    task.body.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className={isDarkMode ? "dark-mode" : ""}>
            <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
            <Search search={search} onSearchChange={setSearch} />
            <div className="board">
            <TaskList
                tasks={displayedTasks}
                currentUser={currentUser}
                categories={categories}
                onTaskDelete={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
                />
            </div>
                <NewTask currentUser={currentUser} onAddTask={handleAddTask} />
        </main>
    );
}

export default App;