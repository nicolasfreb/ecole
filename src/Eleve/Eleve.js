import { Component } from 'react'
import FormEleve from './FormEleve';


class Eleve extends Component {
    static ident;
    static nom;
    static prenom;
    static age;
    static classe;

    constructor(props){
        super(props);
        this.ident = props.nom + props.prenom + props.age;
        this.nom = props.nom;
        this.prenom = props.prenom;
        this.age = props.age;
        this.classe = props.classe;
    }

    render () {
        return(
            <tr key={this.ident}>
                <td>{this.nom}</td>
                <td>{this.prenom}</td>
                <td>{this.age}</td>
                <td><button 
                    type="button" 
                    className="btn btn-info" 
                    data-toggle="modal" 
                    data-target={"#FormModifEleve" + this.ident}   
                >Modifier</button>                
                <FormEleve 
                    state = {this.props.state}
                    ident = {this.ident}
                    nom = {this.nom}
                    prenom = {this.prenom}
                    classe = {this.classe}
                    age = {this.age}
                    modifEleve={this.props.modifEleve.bind(this)}
                />
                </td>
                <td><button type="button" className="btn btn-danger" onClick={() => {
                    this.props.removeEleve (this.ident);
                }}   
                >Supprimer</button></td>
            </tr>
        );
      }
}
export default Eleve