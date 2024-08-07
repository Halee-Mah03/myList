import { useEffect, useState } from "react";
import TodoContent from "./TodoContent";


    const Fetch =  () => {
        const [tasks, setTasks] = useState(); 

        useEffect(() => {
            fetch('http://localhost:8000/tasks')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTasks(data);
            });
        }, [setTasks]);
    
     

    const deleteTask = (id) => {
            const newTask = tasks.filter(task => task.id !== id);
            setTasks(newTask);
            }


      const Checkbox = ({label, value, onChange}) => {
        return ( 
            <label>
            <input type="checkbox" value={value}  onChange={onChange} />
            {label}
            </label>
            );
        };    

    return ( 
        <div className="mycontent">
            {tasks && <TodoContent tasks={tasks} deleteTask={deleteTask} Checkbox={Checkbox}/>}
        </div>

     );
};
 
export default Fetch;