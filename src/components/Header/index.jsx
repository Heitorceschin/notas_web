import { Profiler } from "react";
import { Container, Profile } from "./styles"; 

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/Heitorceschin.png"
                    alt="Foto do usuario" />
                
                <div>
                    <span>  Bem-Vindo </span>
                    <strong>Heitor Ceschin</strong>
                </div>
            </Profile>
        </Container>
    )
}