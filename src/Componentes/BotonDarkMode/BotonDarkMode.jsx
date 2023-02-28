import React from 'react';
import '../../CSS/BotonDarkMode.css'
export const BotonDarkMode = () => {
    return (
        <div>
            <label className="switchBtn">
                <input type="checkbox"/>
                <div className="slide round">  </div>
            </label>
        </div>
    );
}


