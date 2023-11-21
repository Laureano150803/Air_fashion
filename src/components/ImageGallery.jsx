import React from 'react'
import porsilas from '/src/assets/images/por_silas.jpg';
import cliente2 from '/src/assets/images/cliente2.jpg';
import niño from '/src/assets/images/niño_img.jpg'


 const ImageGallery = () => {
    return (
        <>
        <div className="">

        <div className="  grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className=" grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src={porsilas} />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://comoorganizarlacasa.com/wp-content/uploads/2016/04/Cortes-de-cabello-para-ni%C3%B1o-9.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/fotos-premium/retrato-mujer-hermosa-modelo-moda-peinado-maquillaje-color-purpura-corto-mirando-otro-lado-tiro-estudio-interior-aislado-sobre-fondo-gris_416530-11249.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696809600&semt=ais" alt=""/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/foto-gratis/mujer-rubia-arreglandose-pelo_23-2148108896.jpg?w=826&t=st=1698864665~exp=1698865265~hmac=ec30a24bce10f543301f84c65c12010a89abcff88e95acf3b49ee7dfa033b23e" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/foto-gratis/mujer-salon-peluqueria_144627-8889.jpg?size=626&ext=jpg&ga=GA1.1.1798021265.1698687394&semt=ais"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://heraldodemexico.com.mx/u/fotografias/m/2021/12/30/f768x1-460393_460520_0.jpg" alt=""/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/foto-gratis/mujer-salon-peluqueria_144627-8912.jpg?w=740&t=st=1698864291~exp=1698864891~hmac=08bc056d463af2398d768551574b7f54b626f34eddbe90974b9e1a8a1eae1513" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://d2xo0wx345h26t.cloudfront.net/wp-content/uploads/2022/07/Cornrows-con-Top-Knot.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={cliente2}/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/foto-gratis/peluqueria-peluqueria-mujeres-trabajos-peluqueria-campana-profesional_53876-127192.jpg?w=1380&t=st=1698864480~exp=1698865080~hmac=c908b3a619c4efaf1b41da14e7f11f81ee60d69ac41e2f099f82d0eeda965e51" alt=""/>
            </div>
            <div>
                <img className="h-[50rem] w-full rounded-lg" src="https://us.123rf.com/450wm/tverdohlib/tverdohlib1905/tverdohlib190501602/123641653-pelo-largo-corte-de-pelo-de-moda-peluquer%C3%ADa-sal%C3%B3n-de-belleza-chica-modelo-de-belleza-con-cabello.jpg?ver=6" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/foto-gratis/cerrar-barbero-mascara_23-2149141762.jpg?w=1380&t=st=1698865393~exp=1698865993~hmac=d6f7579421fd5a1f6e6024030ca6168159883ff71e569c68db21541a62543f7e" alt=""/>
            </div>
        </div>
    </div>
        </div>
        </>

    )
}

export default ImageGallery