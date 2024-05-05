import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="container">
            <img src={logo}  alt="logo" />
            <Link to="/play/computer" className="play-button computer">Play Computer</Link>
            <Link to="/play/online" className="play-button online">Play Online</Link>
        </div>
    )
}