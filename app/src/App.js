
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './components/screens/Signup'
import Login from './components/screens/signIn'
import Dashboard from './components/screens/Dashboard'
import AddProduct from './components/screens/AddProduct'
import EditProduct from './components/screens/EditProduct'


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/'>
      <Signup/>
    </Route>
    <Route exact path='/signIn'>
    <Login/>
    </Route>
    <Route exact path='/Dashboard'>
      <Dashboard/>
    </Route>
    <Route exact path='/AddProduct'>
      <AddProduct/>
    </Route>
    <Route exact path='/EditProduct/:id'>
      <EditProduct/>
    </Route>
    <Route exact path='/filterProduct/:id'>
      <Dashboard/>
    </Route>
    </Switch>

    </BrowserRouter>
  );
}

export default App;
