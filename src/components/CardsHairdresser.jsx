import React from 'react'
import '../backgroundSlider.css';
import img from '/src/assets/images/img-2.jpg'


const CardsHairdresser = () => {
    return (
        <>

            <div className="aboutUs bg-slate-100 bg-opacity-0  flex flex-col  gap-24  items-center  ">
                <div className="">

                    <h1 className='text-4xl text-center text-gray-900 mt-10'>Our Professional Team</h1>
                    <br />
                    <div className="line-loader w-96 h-1"></div>

                </div>
                <div className="flex flex-wrap  gap-10 mt-20 ">


                    <div className="w-80 rounded-xl  flex flex-col  items-center  shadow-md shadow-blue-400/40 border">
                        <div className="  -translate-y-20 shadow mx-auto h-52 w-52 rounded-full    border-4 overflow-visible">
                            <img className="rounded-full" src={img} />
                        </div>

                        <div className="-translate-y-10 px-6 py-4  flex flex-col items-center justify-center">
                            <div className="font-bold h-auto text-xl ">laura rivera</div>
                            <p className="text-gray-700 text-base">
                                HOLA MUNDO
                            </p>
                        </div>


                    </div>

                    <div className="w-80 rounded-xl bg-white flex flex-col justify-center items-center  shadow-md shadow-blue-400/40">
                        <div className="  -translate-y-20 shadow mx-auto h-52 w-52  border-white rounded-full  border-4 overflow-visible">
                            <img className="rounded-full    " src={img} />
                        </div>

                        <div className="px-6 py-4  flex flex-col items-end justify-end  ">
                            <div className="font-bold h-auto text-xl ">laura rivera</div>
                            <p className="text-gray-700 text-base">
                                HOLA MUNDO
                            </p>
                        </div>


                    </div>
                    <div className="w-80 rounded-xl bg-white flex flex-col justify-center items-center  shadow-md shadow-blue-400/40">
                        <div className="  -translate-y-20 shadow mx-auto h-52 w-52  border-white rounded-full  border-4 overflow-visible">
                            <img className="rounded-full    " src={img} />
                        </div>

                        <div className="px-6 py-4  flex flex-col items-end justify-end  ">
                            <div className="font-bold h-auto text-xl ">laura rivera</div>
                            <p className="text-gray-700 text-base">
                                HOLA MUNDO
                            </p>
                        </div>


                    </div>
                    <div className="w-80 rounded-xl bg-white flex flex-col justify-center items-center  shadow-md shadow-blue-400/40">
                        <div className="  -translate-y-20 shadow mx-auto h-52 w-52  border-white rounded-full  border-4 overflow-visible">
                            <img className="rounded-full    " src={img} />
                        </div>

                        <div className="px-6 py-4  flex flex-col items-end justify-end  ">
                            <div className="font-bold h-auto text-xl ">laura rivera</div>
                            <p className="text-gray-700 text-base">
                                HOLA MUNDO
                            </p>
                        </div>


                    </div>

                </div>
            </div>


        </>
    )
}

export default CardsHairdresser