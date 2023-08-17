import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";
import UserCard from "./components/UserCard"
import {Routes,Route,Link} from "react-router-dom"
import UserList from './components/UserList';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNavBar from "./components/AppNavBar";
import { getAuthUser } from './redux/actions';
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(getAuthUser())
},[])
  return (
    <div className="App">
      <AppNavBar />
      <Link to="/list">
      <Button color="info">User list</Button>
      </Link>
      <Link to="/post">
      <Button color="info">Post list</Button>
      </Link>
      <Link to="/add">
      <Button color="info">Add Post</Button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />

      </Routes>
      
    </div>
  );
} 

export default App;
