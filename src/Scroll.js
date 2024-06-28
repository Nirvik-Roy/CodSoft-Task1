import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Scroll = () => {
    const location =useLocation()
    useEffect(() => {
        window.scrollTo({top:0,behavior:'instant'});
      }, []);
      
}

export default Scroll
