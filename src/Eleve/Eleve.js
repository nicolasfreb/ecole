import { Component } from 'react'
import FormEleve from './FormEleve';


class Eleve extends Component {
    static ident;
    static nom;
    static prenom;
    static naissance;
    static telephone;
    static email;
    static classe;

    constructor(props){
        super(props);
        this.nom = props.nom;
        this.prenom = props.prenom;
        this.naissance = props.naissance;
        this.telephone = props.telephone;
        this.email = props.email;
        this.classe = props.classe;
        this.ident =  props.nom + props.prenom  ;
    }
    
    

    render () {
        return(
            <tr key={this.ident}>
                <td>{this.nom}</td>
                <td>{this.prenom}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-warning" 
                        data-toggle="modal" 
                        data-target={"#VoirEleve" + this.ident}   
                    >voir</button>
                </td>
                <td><button 
                    type="button" 
                    className="btn btn-info" 
                    data-toggle="modal" 
                    data-target={"#FormModifEleve" + this.ident}   
                >Modifier</button>                
                
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        this.props.removeEleve (this.ident);
                    }}>Supprimer</button>
                </td>

                <td>
                    <FormEleve 
                        state = {this.props.state}
                        ident = {this.ident}
                        nom = {this.nom}
                        prenom = {this.prenom}
                        classe = {this.classe}
                        naissance = {this.naissance}
                        telephone = {this.telephone}
                        email = {this.email}
                        modifEleve={this.props.modifEleve.bind(this)}
                    />
                </td>
            </tr>
        );
      }
}
export default Eleve