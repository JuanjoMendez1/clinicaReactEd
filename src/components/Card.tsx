import React from 'react'
import "./cards.css"
interface CardInfoProps {
    title: string;
    consultas: number;
    total: number
}

const Card: React.FC<CardInfoProps> = ({title, consultas, total})  => {
  return (
    <div className="card">
        <div className='titulo'>{title}</div>
        <div>Consultas: {consultas}</div>
        <div>Total: ${total}</div>
    </div>
  )
}

export default Card;
