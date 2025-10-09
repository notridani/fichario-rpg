import { useState } from 'react'

import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

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
       
    },];



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
            <ResizableBox  width={200} height={200} minConstraints={[100, 100]} maxConstraints={[100, 100]} resizeHandles={['se']} style={{ border: '2px solid #4ade80', background: '#bbf7d0' }}>

              <div  className='divisoria'>
                <p>{item.nome}</p>
                {item.modulo.map((conteudo, index) =>
                  (
                    <div>
                      <RenderDivisoria key={index} item={conteudo}/>
                    </div>
                  ))}
             </div>
            </ResizableBox>
          );
          
        }
      }
    

//\/PAGINA\/
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
