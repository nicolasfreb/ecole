import { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Accueil from './Accueil/Accueil';
import Eleves from './Eleve/Eleves';

class App extends Component {
    render() {
        return (
          <div id="content">
            <BrowserRouter>
                <Route exact path="/" component={Accueil} />
                <Route exact path="/Gestion" component={Eleves} />
            </BrowserRouter>
          </div>
        )
    }
}
export default App