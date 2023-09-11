// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="bg-black text-white h-screen ">
      <AddTodo />
      <Todos/>
    </div>
  );
}

export default App;
