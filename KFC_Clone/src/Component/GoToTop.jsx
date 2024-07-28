import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import './goToBtn.css'

const GoToTop = () => {

  const scrollHandler = () =>{
       window.scrollTo({top:0, behavior:"smooth"})
  }
  return (
<div className='top-btn'><Button  style={{
  position:"absolute",
}} onClick={()=> scrollHandler()} >GoToTop</Button></div>
  )
  
}

export default GoToTop