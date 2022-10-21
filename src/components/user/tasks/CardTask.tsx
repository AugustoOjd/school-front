import React, {useState, useEffect} from 'react'

import { Box} from '@mui/material'
import DetailsCardTask from './DetailsCardTask'
import EndCard from './EndCard'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../../../utils/questions'
import Cookies from 'js-cookie'



const CardTask = () => {

  const [page, setPage] = useState(1)
  const [resultado, setResultado] = useState(0)
  const [parametro, setParametro] = useState([{}])
  const [error, setError] = useState(5)

  const navigate = useNavigate()

  const user = Cookies.get('user')
  const userParse = JSON.parse(user!)

  const { nivel } = useParams()

  useEffect(() => {
    switch (nivel) {
      case 'nivel1':
        
        if(userParse.nivel > 1){
          navigate(`/user/${userParse.id}`)
        }
        return setParametro(data[0].nivel1)
  
      case 'nivel2':
        if(userParse.nivel > 2 || userParse.nivel < 2){
          navigate(`/user/${userParse.id}`)
        }
        return setParametro(data[0].nivel2)

      case 'nivel3':
    
        if(userParse.nivel > 3 || userParse.nivel < 3){
          navigate(`/user/${userParse.id}`)
        }
        return setParametro(data[0].nivel3)

      case 'nivel4':
  
        if(userParse.nivel > 4 || userParse.nivel < 4){
          navigate(`/user/${userParse.id}`)
        }
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

    if(valor === 10){
      setError(10)
    }if(valor === 0){
      setError(0)
    }

    setTimeout(() => {
      setError(5)
      setPage(page + 1)
      setResultado( resultado + valor)
    }, 1200);


  }

  return (
    <>
        <Box
            bgcolor={'primary.light'}
            height={{xs: '850px', sm: '550px', lg: '600px'}}
            width={'100%'}
        >
          {
            page < 11
            ?
            <DetailsCardTask
              nivel={nivel?.toUpperCase()}
              img={card?.img}
              error={error}
              question={card?.pregunta}
              option1={card?.opciones[0].a.op}
              option2={card?.opciones[0].b.op} 
              option3={card?.opciones[0].c.op}
              option4={card?.opciones[0].d.op}

              event1={ ()=> handlerPuntos(card!.opciones[0].a.value)}
              event2={ ()=> handlerPuntos(card!.opciones[0].b.value)}
              event3={ ()=> handlerPuntos(card!.opciones[0].c.value)}
              event4={ ()=> handlerPuntos(card!.opciones[0].d.value)}
            />
            :
            <EndCard total={resultado}/>
          }
        </Box>
    </>
  )
}

export default CardTask