import { Component } from 'react'
import './Menu.css'


class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link btn" href="/">Accueil</a>
                        </li>
                        

                        <li className="nav-item active">
                            <a className="nav-link btn" href="Gestion">Gestion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Menu