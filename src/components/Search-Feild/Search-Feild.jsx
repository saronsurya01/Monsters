import React from 'react';
import './Search-Feild.css'
export const SearchFeild=(props)=>{
    return   <div><input className="search" type={props.type.type} onChange={(event)=>
    {
        props.updateState(event.target.value)
        }} placeholder={props.type.placeholder}/></div>

        

}