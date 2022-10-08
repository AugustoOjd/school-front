import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

import { Box, Button, Typography } from '@mui/material'
import DetailsCardTask from './DetailsCardTask'
import EndCard from './EndCard'
import { useParams } from 'react-router-dom'

const data = [

  {
    nivel1: [
      
      {
        id: 1,
        img: "https://www.enter.co/wp-content/uploads/2021/07/Aliens-Newt-Ripley.jpeg",
        pregunta: 'En la pelicula Alien como se llama la ni;a que rescatada la comandate Ripley?',
        opciones: [ {
            a: {
                op: 'josefa',
                value: 0
            },
            b: {
                op: 'luna',
                value: 0
            },
            c: {
                op: 'maria',
                value: 10
            },
            d: {
                op: 'lucia',
                value: 0
            },
        }] 
      },
      {
        id: 2,
        img: "https://www.toureiffel.paris/sites/default/files/styles/mobile_x1_560/public/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg?itok=YjGzrcsL",
        pregunta: 'En que ciudad queda la torre eiffel?',
        opciones: [ {
            a: {
                op: 'Roma',
                value: 0
            },
            b: {
                op: 'Madrid',
                value: 0
            },
            c: {
                op: 'Paris',
                value: 10
            },
            d: {
                op: 'Berlin',
                value: 0
            },
        }] 
      },
      {
        id: 3,
        img: "https://cdn0.bodas.net/article/4586/3_2/960/jpg/56854-bruselas-gran-place.jpeg",
        pregunta: 'Cual es la capital de Belgica?',
        opciones: [ {
            a: {
                op: 'india',
                value: 0
            },
            b: {
                op: 'buenos aires',
                value: 0
            },
            c: {
                op: 'mosku',
                value: 0
            },
            d: {
                op: 'bruselas',
                value: 10
            },
        }] 
      }
    
    
    ],
    nivel2: [
      
      {
        id: 1,
        img: "https://static.nationalgeographicla.com/files/styles/image_3200/public/germany-surrenders-wwii-og_0.jpg?w=1600",
        pregunta: 'En que a;o termino la segunda guerra mundial?',
        opciones: [ {
            a: {
                op: '1963',
                value: 0
            },
            b: {
                op: '1950',
                value: 0
            },
            c: {
                op: '1945',
                value: 10
            },
            d: {
                op: '1939',
                value: 0
            },
        }] 
      },
      {
        id: 2,
        img: "https://www.catorce6.com/images/noticias/breves/Superficie_terrestre_planeta.jpg",
        pregunta: 'Cuantos paises tiene continente americano?',
        opciones: [ {
            a: {
                op: '39',
                value: 0
            },
            b: {
                op: '27',
                value: 0
            },
            c: {
                op: '22',
                value: 0
            },
            d: {
                op: '35',
                value: 10
            },
        }] 
      },
      {
        id: 3,
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/03/star-wars-episodio-iv-nueva-esperanza-2659625.jpg?itok=EO7Qhqqj",
        pregunta: 'En que a;o se entreno la primera pelicula de star wars?',
        opciones: [ {
            a: {
                op: '1977',
                value: 10
            },
            b: {
                op: '1980',
                value: 0
            },
            c: {
                op: '1973',
                value: 0
            },
            d: {
                op: '1985',
                value: 0
            },
        }] 
      }
    
    
    ]
  }
]

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

      // case 'nivel3':
    
      //   return setParametro(data[0].nivel3)

      // case 'nivel4':
  
      //   return setParametro(data[0].nivel4)
    
      default:
        break;
    }
  }, [nivel])
  
  const maper = parametro.map((e:any)=> e)
  const card = maper.find((f)=> f.id === page)

  const handlerPuntos = async (valor: number) =>{
    

    if(page === 4){
      
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
            page < 4
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