import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList =(props)=>(
<div className='card-list'>{
    props.monosters.map(monoster =>( 
    <Card key={monoster.id} monoster={monoster} />
    ))}
 </div>

    )