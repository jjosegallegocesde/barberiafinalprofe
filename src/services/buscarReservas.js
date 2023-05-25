export async function buscarreservas(){

    const URI="https://pruegaapi20231.vercel.app/buscarReservas"

    const PETICION={
        method:"GET",
    }

    let respuesta= await fetch(URI,PETICION)
    respuesta= await respuesta.json()

    console.log(respuesta)
    return respuesta.reservas


}