import { Route, Routes } from "react-router-dom"

import { Home } from '../Home/Home'
import { Reservas } from "../Reservas/Reservas"
import { Menu } from "../shared/Menu/Menu"

export function Rutas() {
    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas />} />
            </Routes>

        </>

    )
}