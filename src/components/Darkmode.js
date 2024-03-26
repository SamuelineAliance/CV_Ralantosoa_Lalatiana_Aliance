import Brightness4Icone from '@mui/icons-material/Brightness2Outlined';
import WbSunnyOutlinedIcone from '@mui/icons-material/WbSunnyOutlined';


import React from "react";
import { useState } from 'react';

function DarkMode() {
    const [themeMode, setThemeMode] = useState("light");
    let chickedClass= "clicked";
    const body = document.body;
    const lightTheme ="light";
    const darkTheme ="dark";
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
        console.log(theme)
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = e => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(chickedClass)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.remove(chickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
        setThemeMode(theme)
    }
    
    return (
        <button  className={theme === "dark btndark" ? chickedClass : "btndark"} id='darkMode' onClick={ e => switchTheme(e)}>
           {themeMode === "light" || theme == "light" ? (
            <Brightness4Icone  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>  
           ) : (
            <WbSunnyOutlinedIcone  style={{ color: 'rgb(75, 75, 253)', fontSize: 30 }}/>  
           )
           }
                                      
        </button>

      
    )
}
export default DarkMode;