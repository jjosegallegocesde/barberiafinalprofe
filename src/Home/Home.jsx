import './Home.css'

import { Agenda } from '../Agenda/Agenda'
import { Servicios } from '../Servicios/Servicios'
import { Instalaciones } from '../Instalaciones/Instalaciones'

export function Home(){
    return(
        <>
            <section className="banner">
                <div className="container-fluid">
                    <div className="row p-5 text-white">
                        <div className="col-12 col-md-5">
                            <h3 className='mb-3'>AGENDATE CON NOSTROS</h3>
                            <Agenda/>
                            <hr className='fw-bold'/>
                            <h3>Descuentos permanentes</h3>
                            <h4>Cortes desde $13.99</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <Servicios/>
            </section>
            <section className="banner2">

            </section>
            <section>
                <Instalaciones/>
            </section>
        </>
    )
}