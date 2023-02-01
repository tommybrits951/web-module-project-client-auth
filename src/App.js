import React, {Redirect} from 'react';
import './App.css';
import { Routes, Route, NavLink} from 'react-router-dom';
import Login from "./Login"
import Friends from './Friends';
import FriendsAdd from './FriendsAdd';





function App() {
  return (
    <div>

    <header>
      <h1>Friends Database</h1>
<NavLink to={'/login'}>Login</NavLink>
<NavLink to={'/friends'}>Friends</NavLink>
<NavLink to={'/friends/add'}>Add Freinds</NavLink>
    </header>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/login' element={<Login/>} />
      <Route element={<Friends/>} exact path="/friends"/>
      <Route element={<FriendsAdd/>} exact path="/friends/add"/>    
    </Routes>
    </div>
  );
}

export default App;
