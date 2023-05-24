
import './App.css';
import User from './components/user/User';
import Posts from './components/posts/Posts';
import Form from './components/todoApp/Form';
import TodoItem from './components/todoApp/TodoItem';


function App() {
  return (
    <div className="App">
     
     <User/>
     <div>
       <Form/>
       <TodoItem/>
     </div>
    
     <Posts/>
    </div>
  );
}

export default App;
