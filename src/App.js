import './App.css';
import HomePage from './HomePage/HomePage';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {

  const RouteTable = useRoutes(routes)
  return <div>
    {/* <div>开始java2 project!!!</div> */}
    {/* <HomePage /> */}
    {RouteTable}
  </div>

    
}

export default App;
