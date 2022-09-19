import React, { FC } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'


interface Props {
    children: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout