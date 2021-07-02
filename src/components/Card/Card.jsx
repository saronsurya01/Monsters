import React from 'react';
import './Card.css';

export const Card=(props)=>{
    return <div className="card-container">
    <img src="" ></img>
    <img src={`https://robohash.org/${props.name.id}?set=set2&size=180x180`}></img>
    <h2>{props.name.name}</h2>
    <p>{props.name.email}</p>
    </div>
}