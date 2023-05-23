
import './form.css';

const TodoItem = ()=>{

   return(
      <div className="todoItem">
         <button type='button'>Complete</button>
         <p>Todo Text</p>
         <button className="delete" type='button'>Delete</button>
      </div>
   )
}

export default TodoItem;