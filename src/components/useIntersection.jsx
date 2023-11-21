import React, { useEffect, useRef, useState } from 'react'

const useIntersection = (opciones = {}) => {
    const [isIntersecting, setisIntersecting] = useState(false);
    const element =useRef();

    useEffect(() => {
        const elemento = element.current;
        
        const observer = new IntersectionObserver(
            entries=>{
                entries.forEach(entry => {
                    setisIntersecting(entry.isIntersecting);
                });
            },
           opciones
        );
    
        if (elemento) {
            observer.observe(elemento);
        }
        return ()=>{
            if (elemento) {
                observer.unobserve(elemento);
            }
        }

    }, [])
    
    return [element , isIntersecting];
 
}

export default useIntersection