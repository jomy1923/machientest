
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Signup from './components/screens/Signup'
import Login from './components/screens/signIn'
import Dashboard from './components/screens/Dashboard'
import AddProduct from './components/screens/AddProduct'
function App() {
  return (
    <BrowserRouter>
    <Route exact path='/'>
      <Signup/>
    </Route>
    <Route path='/signIn'>
    <Login/>
    </Route>
    <Route path='/Dashboard'>
      <Dashboard/>
    </Route>
    <Route path='/AddProduct'>
      <AddProduct/>
    </Route>

    </BrowserRouter>
  );
}

export default App;
