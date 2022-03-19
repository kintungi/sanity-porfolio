import {NavLink} from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex items-center">
                    <NavLink to="/" 
                    // activeClassName="text-black-600" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest active:text-black-600">Francis</NavLink>

                    <NavLink to="/post" 
                    // activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 active-link  ">Blog Posts</NavLink>

                    <NavLink to="/projects" 
                    // activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 active-link">Projects</NavLink>

                    <NavLink to="/about" 
                    // activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800  active-link">About me</NavLink>
                </nav>
                <div className="flex items-center py-3 px-3 my-6">
                    <SocialIcon url="https://www.instagram.com/franciskintungi/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/franciskintungi/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/kintungi" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    
                </div>
            </div>
        </header>
    )
}