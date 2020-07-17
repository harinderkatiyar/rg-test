import React from 'react'
import web from '../../src/images/img3.jpg'
import Common from '../layout/Common'
const Home =()=>{
    return(<><Common
    name="Rigthway industries" 
    imgsrc={web} 
    visit='/services' 
    btnName="Get Started"/></>)
}
export default Home;