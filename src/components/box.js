import React from 'react'
import '../App.css';

const Box = ({x,Y,blur,spread,color}) => {
    return (
        <div className="box-cont">
            <div className="box" 
            style={{ boxShadow: `${x}px ${Y}px ${blur}px ${spread}px ${color} ` }}>
               <p>-webkit-box-shadow: {x}px {Y}px {blur}px {spread}px {color};</p> 
               <p>-moz-box-shadow: {x}px {Y}px {blur}px {spread}px {color} ;</p> 
               <p>box-shadow: {x}px {Y}px {blur}px {spread}px {color};</p> 
            </div>
        </div>
    )
}

export default Box;