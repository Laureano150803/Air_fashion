import React, { useEffect, useState } from 'react';
import '../backgroundSlider.css';
import apiUrl from '../../api';
import axios from 'axios';


const CardsHairdresser = () => {
    const [Hairdresser, setHairdresser] = useState([]);

    useEffect(() => {
        axios.get(apiUrl + 'peluqueros')
            .then((res) => setHairdresser(res.data.Response))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className="aboutUs bg-slate-100 bg-opacity-0 flex flex-col gap-24 items-center">
                <div>
                    <h1 className="text-4xl text-center text-gray-900 mt-10">Our Professional Team</h1>
                    <br />
                    <div className="line-loader w-96 h-1"></div>
                </div>
                <div className="flex flex-wrap gap-10 mt-20">
                    {Hairdresser.map((peluqueros) => (
                        <div key={peluqueros._id} className="w-80 rounded-xl flex flex-col justify-center items-center shadow-md shadow-blue-400/40">
                            <div className="-translate-y-20 shadow mx-auto h-52 w-52 rounded-full border-4 overflow-visible">
                                <img
                                    className="rounded-full"
                                    src={peluqueros.foto} 
                                    alt={`${peluqueros.nombre} ${peluqueros.apellido}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="px-6 py-4 -translate-y-14 flex flex-col items-end justify-end">
                                <div className="font-bold h-auto text-xl">
                                    <h1>{peluqueros.nombre + ' ' + peluqueros.apellido}</h1>
                                </div>
                                <p className="text-gray-700 text-base"></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardsHairdresser;
