import { useNavigate } from "react-router-dom"
import "./Card.css"

export function Card({img, name, date, onDeleteEvent, id}){
    const navigate = useNavigate()

    function navigatetoEvent() {
        navigate("/events/" + id, {
            state: {img, name, date, onDeleteEvent, id}
        })
    }

    return (
    <div className="card">
        <img src={img} alt="foto de fundo pixel art" onClick={navigatetoEvent} className="IMG"/>
        <div>
            <h4 onClick={navigatetoEvent} className="H4">{name}</h4>
            <span>{date}</span>
        </div>
        <button onClick={() => onDeleteEvent(id)}>Deletar evento</button>
    </div>
    )
}

/* 
props = {
    img, name, date
} 
props.img
props.name
props.date
*/