import React, { useContext } from 'react'
import { useCart } from './createContext'


const ChildContext = () => {

    const {data}=useContext(useCart)


  return (
    <div>

data

    </div>
  )
}

export default ChildContext