import { useState } from "react";

const MyFooter = () => {
  const [text, setText] = useState('');

  

  const handleSubmit = () => {
    const myaddTodo = {text};

    fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myaddTodo)
    }).then(() => {
      console.log("new list")
    })
  }
  
  return ( 
    <div className="myfooter">
      <form onSubmit={handleSubmit}>
      <input
      type="text"
      required 
      value={text }
      placeholder="Enter a new list"
      onChange={(e) => setText(e.target.value)}

      />
      <button>Add</button>
      </form>
    </div>
   );
}
 
export default MyFooter;