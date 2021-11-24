import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ImportantDevices } from "@mui/icons-material";

const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    // height: 300,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
    position: 'absolute',
  top: '50%',
  left: '50%',
  width: '500px',
  padding: '40px',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(50, 50, 50)',
  boxSizing: 'border-box',
  boxShadow: '0 15px 25px rgba(0,0,0,.6)',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: 'background.paper',
  };

function NewTask({ currentUser, onAddTask }) {
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = React.useState(false);
    const [category_id, setCategory] = useState("");
    const [newcategory, setNewCategory] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // username: currentUser.username,
                body: body,
                username: "Steve",
                description: description,
                category_id: category_id
            }),
        })
            .then((r) => r.json())
            .then((newTask) => {
                onAddTask(newTask);
                setBody("");
                setDescription("");
                setCategory("");
            });
    }

    const handleChangeCategory = (event) => {
      setCategory(event.target.value);
    };

    return (
        <div>
        <Divider/>
        <div>
      <button className="AddTask" onClick={handleOpen}>Create Task</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={handleClose} className="Close">X</Button>
          <h2 className="popup" id="modal-modal-title" variant="h6" component="h2">
            Create a new task
          </h2>
          <form className="new-task" onSubmit={handleSubmit}>
          <div class="user-box">
          <input 
            type="text"
            name="body"
            placeholder="Set Title"
            autoComplete="off"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <input 
            type="text"
            name="description"
            placeholder="Set Description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <InputLabel className="selectcategory" id="demo-simple-select-label">Select Category</InputLabel>
        <Select
        sx={{width: '100%', backgroundColor: 'transparent', fontColor: 'white', border: '1px solid white', color: 'white'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category_id}
          label="Select Category"
          defaultValue={2}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value={1}>Work</MenuItem>
          <MenuItem value={2}>Fitness</MenuItem>
          <MenuItem value={3}>Nutrition</MenuItem>
          <MenuItem value={4}>Side Work</MenuItem>
          <MenuItem value={5}>Misc</MenuItem>
          
        </Select>
            {/* <input 
            type="text"
            name="category_id"
            placeholder="Set Category"
            autoComplete="off"
            value={category_id}
            onChange={(e) => setCategory(e.target.value)}
            /> */}
            <Button sx={{backgroundColor: 'white' }} className="AddTask2" type="submit">Add</Button>
            </div>
          </form>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
        {/* <form className="new-task" onSubmit={handleSubmit}>
            <input 
            type="text"
            name="body"
            placeholder="Create new task"
            autoComplete="off"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Add</button>
        </form> */}
        </div>
    );
}

export default NewTask;