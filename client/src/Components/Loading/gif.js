import React from 'react';
import Final from './final.gif';
import './gif.css'
import {Row,Col } from 'react-bootstrap'

const Gif = () => {
    return ( 
        <div className="center">
            <p class="aligncenter">
            <img 
            src={Final} 
            style={{display: 'block', margin: 'auto' }} 
            
            width="300"
            alig-content= 'center'
            />
            </p>
        </div>
     );
}
export default Gif;
