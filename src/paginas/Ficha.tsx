import { useState } from 'react'
import './Ficha.css'


type ModuloItem = Divisorias | Texto;

  type Divisorias = {
    nome: string;
    tipo: 'divisoria';
    modulo: ModuloItem[];
  }

  type Texto = {
    tipo: 'texto';
    conteudo: string;
  }

  const arrayBase: Divisorias[] = [
    {
      nome: "1",
      tipo: "divisoria",
      modulo: [
        {
              tipo: "texto",
              conteudo: 'texto1'
        },
        {
          nome: "bbbbb",
          tipo: "divisoria",
          modulo: [
                      {
                        tipo: "texto",
                        conteudo: 'texto1'
                      }
                  ]
        }
      ],
       
    },
  ];



  function RenderDivisoria({item}: {item: ModuloItem}){
      if(item.tipo === 'texto')
        {
          return <div>
                    <p>
                      {item.conteudo}
                      a
                    </p>
                 </div>
        }

      if(item.tipo === 'divisoria')
        {
          return(
              <div  className='divisoria'>
                <p>{item.nome}</p>
                {item.modulo.map((conteudo, index) =>
                  (
                    <div>
                      <RenderDivisoria key={index} item={conteudo}/>
                    </div>


                  ))}
             </div>
          );
          
        }
      }
    





function Ficha() {
  return (
      <div>

        {arrayBase.map((conteudo, index) =>
          (
            <RenderDivisoria key={index} item={conteudo}/>
          )
        )}
      </div>
    
  )
}

export default Ficha
