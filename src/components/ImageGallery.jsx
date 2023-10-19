import React from 'react'
import imagen1 from '/src/assets/images/cliente2.jpg'
import imagen2 from '/src/assets/images/barberia.jpg'
import imagen3 from '/src/assets/images/img-2.jpg'
import imagen4 from '/src/assets/images/pic-4.jpg'
import imagen5 from '/src/assets/images/pic-3.jpg'
import imagen6 from '/src/assets/images/img-1.jpg'


 const ImageGallery = () => {
    return (
        <div className='p-5 grid grid-cols-6 gap-4 '>
            <div className="">

            <div className="">
            <img src={imagen1} alt="" />

            </div>
            
            <div className="col-span-">
            <img src={imagen3} alt="" />

            </div>
            <img src={imagen2} alt="" />
            <img src={imagen4} alt="" />
            <img src={imagen5} alt="" />
            <img src={imagen6} alt="" />

            </div>
        </div>
    )
}

export default ImageGallery