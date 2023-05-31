import "./header.css"
import tesouro from "../../assets/tesouro.png"

export function Header() {

    return(
        <header>
            <div>
                <h1>Pixels</h1>
                <img src={tesouro} alt="Imagen tesouro" />
            </div>

            <div>
                <a href="#">Acesse sua conta</a>
                <a href="#">Eventos</a>
                <a href="#">Crie seu evento</a>
            </div>
        </header>
    )
}