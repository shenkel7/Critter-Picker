import React, {useState} from 'react'
import '../styles/button.css'
import { useSelector, useDispatch } from 'react-redux'
import { setType } from '../app/matchSlice'

const Buttons = () => {

    const type = useSelector((state) => state.match.type);

    const dispatch = useDispatch();

    const changeType = (type) => {
        dispatch(setType(type));
    }

       return (
            <div class="row">
                <div class="column"><button class={type == "Dog" ? "button" : "button-no"} onClick={()=> changeType("Dog")}>Dog</button></div>
                <div class="column"><button class={type == "Cat" ? "button" : "button-no"} onClick={()=> changeType("Cat")}>Cat</button></div>
                <div class="column"><button class={type == "Rabbit" ? "button" : "button-no"} onClick={()=> changeType("Rabbit")}>Rabbit</button></div>
                <div class="column"><button class={type == "Scales & Fins" ? "button" : "button-no"} onClick={()=> changeType("Scales & Fins")}>Fish</button></div>
                <div class="column"><button class={type == "Birds" ? "button" : "button-no"} onClick={()=> changeType("Birds")}>Birds</button></div>
                <div class="column"><button class={type == "Horses" ? "button" : "button-no"} onClick={()=> changeType("Horses")}>Horses</button></div>
                <div class="column"><button class={type == "Barnyard" ? "button" : "button-no"} onClick={()=> changeType("Barnyard")}>Barnyard</button></div>
                <div class="column"><button class={type == "Small & Furry" ? "button" : "button-no"} onClick={()=> changeType("Small & Furry")}>Other</button></div>
            </div>
        ) 
};

export default Buttons;