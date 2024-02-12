import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout';
import ErrorPage from './page/ErrorPage'
import Home from './page/Home'
import Postdetails from './page/Postdetails'
import Register from './page/Register'
import Login from './page/Login'
import UserProfile from './page/UserProfile'
import UploadComponent from './page/CreatePost'
import EditPost from './page/EditPost'
import CategoryPosts from './page/CatagoryPosts'
import AuthorPosts from './page/AuthorPost'
import Authors from './page/Authors'
import Dashboard from './page/Dashboard'
import Logout from './page/Logout'
import Footer from "./components/Footer";
// import Navbar from "./components/newheader"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts/:id" element= {<Postdetails/>} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/profile/:id" element= {<UserProfile/>} />
        <Route path="/authors" element= {<Authors/>} />
        <Route path="/create" element={<UploadComponent/>} />
        <Route path="/post/categories/:category" element= {<CategoryPosts/>} />
        <Route path="/posts/users/sdfsdf" element= {<AuthorPosts/>} />
        <Route path="/mypost/:id" element= {<Dashboard/>} />
        <Route path="/post/:id/edit" element= {<EditPost/>} />
        <Route path="/logout" element= {<Logout/>} />
      </Routes>
      
    </>
  );
}

export default App;
