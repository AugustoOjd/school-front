import React, { FC } from 'react'
import NavbarAdmin from './navbar/NavbarAdmin'

interface Props {
    children: React.ReactNode
}

const LayoutAdmin:FC<Props> = ({children}) => {
  return (
    <>  
        <NavbarAdmin/>
        {children}
    </>
  )
}

export default LayoutAdmin