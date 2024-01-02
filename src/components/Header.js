
import { useState } from "react";

import Logo from "../assets/images/food-villa.png";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";



const Title=()=>{
    return(
       <a href="/">
        <img className="h-24 p-2" alt="logo" src={Logo}/>
       </a>
    )
}

const Header=()=>{

    const[isLoggedIn,setIsLoggedIn]=useState(false)

    const isOnline=useOnline() 

   
    
 
    return(
        // <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-blue-200 md:bg-orange-400">
         <div className="flex justify-between bg-pink-200 shadow-lg"> 
        <Title/>
        <div className="nav-items">
            <ul className="flex py-10 ">
            
            <Link to="/"><li className="px-2">Home</li></Link>
            <Link to="/about" ><li className="px-2">About</li></Link>
            <Link to="/contact" ><li className="px-2">Contact</li></Link>
            <li className="px-2">Cart</li>
            <Link to="/instamart" ><li className="px-2">Instamart</li></Link>
            </ul>
        </div>
       

        <h1>{isOnline? "✅" : "⛔" }</h1>

    

        {isLoggedIn ?(
        <button onClick={()=>
        setIsLoggedIn(false)}>LogOut</button>
        ):
        (<button onClick={()=>
            setIsLoggedIn(true)}>LogIn</button>
            )
        }
        </div>
    );
};

export default Header;