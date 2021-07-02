import React from 'react'
import './Card-List.css'
import { Card } from '../Card/Card'

export const CardList=function (props){
    return <div className="card-list"> 
    {props.name.map((monster)=><Card name={monster}/>)}
    
    </div>
}
