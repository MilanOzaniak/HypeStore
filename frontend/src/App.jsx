import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/index';
import CurrentItem from './pages/CurrentItem/index';
import SignUp from './pages/LogIn/FormSignup';
import AddProductPage from './pages/AddProduct/AddProductPage';
import UserPage from './pages/UserPage';
import ShoesPage from './pages/AllShoes';
import Register from './pages/Register/FormRegister';
import AccessoriesPage from './pages/AllAccessories';
import ClothingPage from './pages/AllClothing';
import CurrentUserPage from './pages/CurrentUserPage';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar';
import Editprofile from './pages/Editprofile/Editprofile';
import EditProduct from './pages/EditProduct/EditProduct';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/HypeStoreFrontend/'> <Home/> </Route>
          <Route exact path='/HypeStoreFrontend/shoes'> <ShoesPage/> </Route>
          <Route exact path='/HypeStoreFrontend/clothing'> <ClothingPage/> </Route>
          <Route exact path='/HypeStoreFrontend/accessories'> <AccessoriesPage/> </Route>
          <Route path='/HypeStoreFrontend/login'> <SignUp/> </Route>
          <Route path='/HypeStoreFrontend/register'> <Register/> </Route>
          <Route exact path='/HypeStoreFrontend/createitempage'><AddProductPage/> </Route>
          <Route exact path="/HypeStoreFrontend/product/:id"><CurrentItem/></Route>
          <Route exact path="/HypeStoreFrontend/user/:userName"><UserPage/></Route>
          <Route exact path="/HypeStoreFrontend/profile/:userName"><CurrentUserPage/></Route>
          <Route exact path="/HypeStoreFrontend/editProfile/:id"><Editprofile/></Route>
          <Route exact path="/HypeStoreFrontend/edit/:id"><EditProduct/></Route>
        </Switch>
      <Footer/>
    </Router> 
  );
};


export default App;