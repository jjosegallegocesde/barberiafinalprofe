export async function pedirCita(datos){

    console.log(datos)

    const URI="https://pruegaapi20231.vercel.app/reservar"

    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(datos)
    }

    let respuesta= await fetch(URI,PETICION)
    respuesta= await respuesta.json()

    console.log(respuesta)
    return respuesta


}