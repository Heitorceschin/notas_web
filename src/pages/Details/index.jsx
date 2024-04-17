import { Container, Links, Content} from "./styles.js"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText/Index.jsx"
import { Section } from "../../components/Section"
import { Tag } from "../../Tag/index.jsx"



export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota " />
          
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, distinctio quod. Totam quod atque doloremque, iusto veritatis in itaque. Molestiae provident ipsum odit, ipsa cum velit deleniti aliquid quod doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum libero odit vitae quis, tempore suscipit sit et veritatis, atque reiciendis. Corporis sequi mollitia sit omnis dolorem commodi atque facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis corporis consequatur! Expedita cupiditate, doloremque minima id blanditiis voluptate facilis sequi, eaque alias sed quas impedit laudantium incidunt nam sit.
          </p>
       
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://app.rocketseat.com.br/home</a> </li>
          <li><a href="#">https://app.rocketseat.com.br/home</a> </li>
          
        </Links>
      </Section>      

      <Section title="Marcadores">
        <Tag title ="express"/>
        <Tag title="nodejs" />
          </Section>
          
      <Button title="Voltar"/>
      </Content>
    </main>
        </Container>
        

  )
}