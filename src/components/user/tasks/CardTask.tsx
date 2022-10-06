import { Box } from '@mui/material'
import React from 'react'
import DetailsCardTask from './DetailsCardTask'

const data = [
  {
  id: 1,
  img: "https://www.enter.co/wp-content/uploads/2021/07/Aliens-Newt-Ripley.jpeg",
  pregunta: 'En la pelicula Alien como se llama la ni;a que rescatada la comandate Ripley?',
  opciones: [ {
      a: {
          op: 'josefa',
          value: 5
      },
      b: {
          op: 'luna',
          value: 20
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
}
]

const test = data.map((e:any)=> e.opciones.map((opi: any) => (
  {
      namea: opi.a.op,
      valuea: opi.a.value,
      nameb: opi.b.op,
      valueb: opi.b.value,
      namec: opi.c.op,
      valueac: opi.c.value,
      named: opi.d.op,
      valued: opi.d.value
  }
)))

//   console.log(test) 

const resultado:Number[] = []

// console.log( {resultado })



const CardTask = () => {

  const handlerPuntos = (valor: number)=>{
    console.log(valor)
    // resultado.push(valor)
    // console.log( {resultado })
  }
  return (
    <>
        <Box
            bgcolor={'primary.light'}
            height={{xs: '500px', lg: '800px'}}
            width={'100%'}
        >

          {
            data.map((e:any)=> (<DetailsCardTask
              key={e.id} 
              img={e.img} 
              question={e.pregunta} 
              option1={e.opciones.map((o:any)=> o.a.op)} 
              option2={e.opciones.map((o:any)=> o.b.op)} 
              option3={e.opciones.map((o:any)=> o.c.op)}
              option4={e.opciones.map((o:any)=> o.d.op)}
              event1={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.a.value))}
              event2={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.b.value))}
              event3={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.c.value))}
              event4={ ()=> handlerPuntos(e.opciones.map((o:any)=> o.d.value))}
              />))
          }
        </Box>
    </>
  )
}

export default CardTask