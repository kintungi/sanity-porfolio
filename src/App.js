import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
import Project from "./components/Project"
import NavBar from "./components/NavBar"


function App() {
  return (
    // <h1 className='text-blue-600 text-[40px] bg-black-100 font-bold'>Hello there, I am francis</h1>
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Navigate to="/" />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post/>} path="/post" />
        {/* <Route element={<Post/>} path="post" >
          <Route element={<SinglePost />} path="/:slug" />
        </Route> */}
        <Route element={<Project />} path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
