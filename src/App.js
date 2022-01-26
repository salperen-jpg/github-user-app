import './App.css';
import { useGlobalContext } from './context/context';

function App() {
  const data = useGlobalContext();
  console.log(data);
  return <div></div>;
}

export default App;
