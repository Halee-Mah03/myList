import { useState } from "react";

const TodoContent = ({tasks, deleteTask, Checkbox }) => {



    const [checked, setChecked] = useState(false);
    const [lineThrough, setLineThrough] = useState(false);

    const handleChange =() => {
        setChecked(!checked); 
        setLineThrough(!lineThrough); 
    }
    
    
    const mystyle = {
        textDecoration: lineThrough ? "line-through" : "none"
    }
       
    return ( 
        <div className="mycontent" style={mystyle}>
            {tasks.map((task)=> (
                <div className="mycontents">
                    <Checkbox
                    label={task.text}
                    onChange={handleChange}
                    />
                    <button onClick={() => deleteTask(task.id)} >delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default TodoContent;