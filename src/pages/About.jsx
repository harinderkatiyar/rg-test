import React from 'react'
import web from '../../src/images/img2.jpg'
import Common from '../layout/Common'
const About =()=>{
    return(<><Common 
        name="Welcome to About Page" 
        imgsrc={web} 
        visit='/contact' 
        btnName="Contact Now"/></>)
}
export default About;