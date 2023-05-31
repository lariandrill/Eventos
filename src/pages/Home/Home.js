import { useContext, useEffect, useState } from "react"
import { Header } from "../../componentes/Header/header"
import { Card } from "../../componentes/Card/Card"
import dragon from "../../assets/dragon.jpg"
import arcade from "../../assets/arcade.png"
import mountains from "../../assets/mountains.png"
import smash from "../../assets/smashBros.png"
import PC from "../../assets/PC.jpg"
import "./Home.css"
import { EventContext } from "../../Contexts/eventContext"

export function Home() {
    
    const { events, addNewEvent, deleteEvent } = useContext(EventContext)

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [img, setImg] = useState()
        
    function handleUploadIMG(e){
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => setImg(reader.result)
    }
      
    function handleSubmit(e){
        e.preventDefault()
        let ultimoId = events.length > 0 ? events[events.length - 1].id : 0
      
        const novoEvento = {
            id: ultimoId + 1,
            name,
            date,
            img
        }

        addNewEvent(novoEvento)
    }
      
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events))
    }, [events])
      
    return (
        <>
          <Header/> 
          <div className="titulo">
      
          <h1>Bem vindo ao site de eventos!</h1>
      
          </div>
          <div className="container">
            {events.map(evento => {
              return (
                <Card key={evento.id} id={evento.id} img={evento.img} name={evento.name} date={evento.date} onDeleteEvent={deleteEvent}/>
              )
              })}
          </div>
      
          <form onSubmit={handleSubmit} className="Quest_container">
            <label> Nome do evento  </label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
            <label> Data do evento  </label>
            <input type="text" id="date" onChange={(e) => setDate(e.target.value)}/>
            <label> Imagem do evento  </label> <input type="file" id="img" onChange={handleUploadIMG}/>
            <button>Cadastrar evento</button>
          </form>
          
        </>
    );
}