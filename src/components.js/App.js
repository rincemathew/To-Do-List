
import Header from './Header';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App bg-white w-full h-full">
      <Header></Header>
      <AddToDo></AddToDo>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
