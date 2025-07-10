import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Card(props){
    const {id, name, desc, btnDesc} = props;
    return (
    <div className="card">
        <div className="gradient-foto">
            </div>
            <h1>{name}</h1>
            <p className='text-center'>{desc}</p>
            <div className="card-button-container">
              <Link to={`/ahli/${id}`}><Button name={btnDesc} /></Link>
         </div>    
    </div>
    );
}

export default Card;