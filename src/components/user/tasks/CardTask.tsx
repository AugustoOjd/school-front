import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

import { Box, Button, Typography } from '@mui/material'
import DetailsCardTask from './DetailsCardTask'
import EndCard from './EndCard'
import { Navigate, useParams } from 'react-router-dom'
import { data } from '../../../utils/questions'


// console.log(test)

const CardTask = () => {

  const [page, setPage] = useState(1)
  const [resultado, setResultado] = useState(0)
  const [parametro, setParametro] = useState([{}])

  const { nivel } = useParams()

  useEffect(() => {
    switch (nivel) {
      case 'nivel1':
        
        return setParametro(data[0].nivel1)
  
      case 'nivel2':
      
        return setParametro(data[0].nivel2)

      case 'nivel3':
    
        return setParametro(data[0].nivel3)

      case 'nivel4':
  
        return setParametro(data[0].nivel4)
    
      default:
        break;
    }
  }, [nivel])
  
  const maper = parametro.map((e:any)=> e)
  const card = maper.find((f)=> f.id === page)

  const handlerPuntos = async (valor: number) =>{
    

    if(page === 11){
      
      return setPage(page)
    }
    setPage(page + 1)
    setResultado( resultado + valor)

  }

  return (
    <>
        <Box
            bgcolor={'primary.light'}
            height={{xs: '700px', sm: '500px', lg: '600px'}}
            width={'100%'}
        >
          {
            page < 11
            ?
            <DetailsCardTask
              nivel={nivel?.toUpperCase()}
              img={card?.img}
              question={card?.pregunta}
              option1={card?.opciones[0].a.op}
              option2={card?.opciones[0].b.op} 
              option3={card?.opciones[0].c.op}
              option4={card?.opciones[0].d.op}

              event1={()=> handlerPuntos(card!.opciones[0].a.value)}
              event2={ ()=> handlerPuntos(card!.opciones[0].b.value)}
              event3={ ()=> handlerPuntos(card!.opciones[0].c.value)}
              event4={ ()=> handlerPuntos(card!.opciones[0].d.value)}
            />
            :
            <EndCard total={resultado}/>
            // data.map((e:any)=> (<DetailsCardTask
            //   key={e.id} 
            //   img={e.img} 
            //   question={e.pregunta} 
            //   option1={e.opciones.map((o:any)=> o.a.op)} 
            //   option2={e.opciones.map((o:any)=> o.b.op)} 
            //   option3={e.opciones.map((o:any)=> o.c.op)}
            //   option4={e.opciones.map((o:any)=> o.d.op)}
            //   event1={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.a.value))}
            //   event2={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.b.value))}
            //   event3={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.c.value))}
            //   event4={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.d.value))}
            //   />))
          }
        </Box>
    </>
  )
}

export default CardTask