import { createContext, useEffect, useState } from "react";
import dragon from "../assets/dragon.jpg"
import arcade from "../assets/arcade.png"
import mountains from "../assets/mountains.png"
import smash from "../assets/smashBros.png"
import PC from "../assets/PC.jpg"

export const EventContext = createContext({})

let eventos = [
    {
      id:1,
      name: "XV Reunião de jogadores de DUGEONS & DRAGONS",
      img: dragon,
      date: "SEX, 12/05/2023 às 18hs"
    },
    {
      id:2,
      name: "Museu de arcades",
      img: arcade,
      date: "QUA, 17/07/2023, às 13hs"
    },
    {
      id:3,
      name: "Grupo de trilha",
      img: mountains,
      date: "SEG, 30/01/2022, às 10hs"
    },
    {
      id:4,
      name: "Competição de Super Smash Bross",
      img: smash,
      date: "TER, 02/09/2025"
    },
    {
      id:5,
      name: "Curso gratis de programação BACK-END",
      img: PC,
      date: "QUI, 08/11/2020"
    }
  ]

export function EventContextProvider(props) {
    const [events, setEvents] = useState(() => {
        let state = JSON.parse(localStorage.getItem("events"))
  
        if(state) {
          return state
        }
  
        return eventos
      })
        
      function addNewEvent(novoEvento){
          setEvents([...events, novoEvento])
      }
        
      function deleteEvent(id){
          let eventosAtualizados = events
          eventosAtualizados = eventosAtualizados.filter(evento => evento.id !== id)
        
          setEvents(eventosAtualizados)
      }
        
      useEffect(() => {
          localStorage.setItem("events", JSON.stringify(events))
      }, [events])

    return(
        <EventContext.Provider value={{
            events, 
            addNewEvent,
            deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}