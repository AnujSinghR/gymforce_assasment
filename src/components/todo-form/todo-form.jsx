import * as React from "react";
import "./todo-form.scss";
import Button from '@mui/material/Button';

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");
  const [id,setid] = React.useState(0);

  const handleAddTodo = () => {
    // Function to add todo
    
    const newtoDo = [
      ...props.todos,
      {id:id,label:task,checked:false},
  ];
  props.setTodos(newtoDo);
    setid(id+1) ; 
    setTask("");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp}/>
      <Button type="button" onClick={handleAddTodo} variant="contained">Add Task</Button>
    </div>
  );
};
