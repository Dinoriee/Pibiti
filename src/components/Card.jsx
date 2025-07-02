import React from 'react';
import Button from './Button';

function Card(props){
    const {name, desc, btnDesc} = props;
    return (
    <div className="card">
        <div className="gradient-foto">
            </div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <div className="card-button-container">
              <a href="#"><Button name={btnDesc} /></a>
         </div>    
    </div>
    );
}

export default Card;