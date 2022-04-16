import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';

import Desktop from './components/Desktop/index'; 

const index = () => {
  
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTablet = useMediaQuery({ 
        minWidth: 600,
        maxWidth: 1224,
     })
    const isMobile = useMediaQuery({ 
        query: '(max-width: 599px)' 
    })
    
      return isDesktopOrLaptop ? <Desktop Mquery='D'/>: isTablet ? <Desktop Mquery='T'/>: isMobile ? <Desktop Mquery='M'/>: null
    }

export default index;