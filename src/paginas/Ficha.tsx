import { useState } from 'react'
import './Ficha.css'


type Modulo = {

}

  type Divisorias = {
    nome: string;
    tipo: Divisorias | Modulo | null
  }


  const textos = ["aaaaaaaa", "bbbb", "aaaaaaaa"];

  const conteudo: Divisorias = [
    {
      nome: "aaaaaaaaa",
      tipo: [
        {
          nome: "bbbbb"
        }
      ]
    }
  ];
    





function Ficha() {
  return (
      <div>

        {conteudo.map((conteudo, index) =>
          (
            <div key={index}>  {conteudo.nome} 

              <p>{index}</p>
            
            </div>

            
          )
        )}

        



      </div>
    
  )
}

export default Ficha
