import React from "react";
import Typed from "react-typed";



const Header = () => {
    return(
        <div className = "header-wraper">
            <div className = "main-info">
                <h1>web development project</h1>
                <Typed
                    className = "typed-text"
                    strings = {["sona 🖤" , "Bacchu 🥰" , "motu ❤️"]}
                    typeSpeed = {60}
                    backSpeed = {40}
                    loop
                />
                <a href= "#" className = "btn-main-offer">contect me</a>
            </div>
        </div>

    )
}

export default Header;
