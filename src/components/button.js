import React from 'react'
import '../styles/button.css'

const Buttons = () => {
       return (
            <div class="row">
                <div class="column"><button class="button">Dog</button></div>
                <div class="column"><button class="button">Cat</button></div>
                <div class="column"><button class="button">Other</button></div>
            </div>
        ) 
};

export default Buttons;