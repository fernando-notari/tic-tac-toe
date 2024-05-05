import Home from "../pages/Home"
import Game from "../pages/Game"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/play/:mode" element={<Game />} />
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )

}
