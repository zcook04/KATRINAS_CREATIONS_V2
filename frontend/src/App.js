import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Pages
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Login from './pages/Login/Login'
import MyAccount from './pages/MyAccount/MyAccount'
import Cart from './pages/Cart/Cart'

// CSS
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <main className="main-content">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </main>
    <Footer email="katrina@katrinascreationsde.com" company="Katrinas Creations"/>
    </>
  );
}

export default App;
