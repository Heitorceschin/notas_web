
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Logout, Profile } from "./styles"; 

export function Header() {
    const { signOut } = useAuth();
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

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        
        </Container>
    );
}