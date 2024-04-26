
import {RiShutDownLine} from 'react-icons/ri'

import { Container, Logout, Profile } from "./styles"; 

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Heitorceschin.png"
                    alt="Foto do usuario" />
                
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Heitor Ceschin</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        
        </Container>
    );
}