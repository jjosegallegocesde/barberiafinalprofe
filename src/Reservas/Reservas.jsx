import { useState,useEffect } from "react"
import { buscarreservas } from "../services/buscarReservas"

export function Reservas(){


    const[reservas, setReservas]=useState(null)
    const[cargando, setCargando]=useState(true)

    useEffect(function(){

        buscarreservas().then(function(respuesta){
            setReservas(respuesta)
            setCargando(false)
        })

    },[])

    if(cargando){
        return(
            <>
                <h1>estoy cargando</h1>
            </>
        )
    }else{

        return(
            <>
            <br /><br /><br />
                <div className="container my-5">
                    <div className="row row-cols-1 row-cols-md-5 g-3">

                        {
                            reservas.map(function(reserva){
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow p-3">
                                            <h3 className="text-center">Reserva n°</h3>
                                            <p className="text-center text-muted">{reserva._id.slice(5, 9)}</p>
                                            <h4>Cliente: {reserva.nombre}</h4>
                                            <h4>{reserva.correo}</h4>
                                            <h6>{reserva.dia} / {reserva.hora}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            
            </>
        )

    }


  


}