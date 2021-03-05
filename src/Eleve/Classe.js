import { Component } from 'react'
import './Style/Classe.css'


class Classes extends Component {
    static nom;
    constructor(props){
        super(props);

        this.nom = props.nom;
    }
    
}
export default Classes