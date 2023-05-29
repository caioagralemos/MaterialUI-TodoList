import Buttons from './components/Buttons';
import RatingDemo from './components/RatingDemo';
import FormDemo from './components/FormDemo';
import Navbar from './components/Navbar';
import TodoList from './TodoList';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
