import React from 'react';
import { useDarkModeContext } from '../../Context/DarkModeContext';
import '../../CSS/BotonDarkMode.css'
export const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
    <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onInput={() =>toggleDarkMode()}/>
            <div className="slider round" />
        </label>
    </div>
    );
}


