import { NavLink, useParams  } from "react-router-dom"
import { useContext } from "react"
import { EventContext } from "../../Contexts/eventContext"
import { ImageContainer, NavContainer, Card } from "./styles"
import { useEffect } from "react"

export function Event() {
    const { id } = useParams()
    const { events } = useContext(EventContext)

    let event = events.find(event => event.id == id)

    useEffect(() => {
        async function mostrarUsuarios(){
        await fetch('')
        .then(res => res.json())
        .then(data => console.log(data))
        }

        mostrarUsuarios()
    }, [])



    if(!event){
        return( 
        <>
            <NavLink to="/">Voltar para o inicio</NavLink>
            <h1>Evento não encontrado</h1>
        </>
        )}

    return (
        <Card className="card">
            <h1>{event.name}</h1>
            <h3>{event.date}</h3>
            <ImageContainer 
                sizes="90rem"
                src={event.img} 
                alt={event.name} 
                className="IMG"
            />
            <NavContainer to="/">Voltar para o inicio</NavContainer> 
        </Card>
    )
}