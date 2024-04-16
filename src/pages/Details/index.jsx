import { Container, Links } from "./styles.js"

import { Header } from "../../components/Header/index.jsx"
import { Button } from "../../components/Button/index.jsx"
import { Section } from "../../components/Section/index.jsx"


export function Details() {

  return (
    <Container>
      <Header />
      
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
          
        </Links>
      </Section>      
      <Button title="Voltar"/>

    </Container>
  )
}