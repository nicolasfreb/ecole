import React, { Component } from 'react';
import './Style/Eleves.css'
import Eleve from './Eleve';
import Form from './Form';
import ListEleve from './ListEleve';
import Classe from './Classe';
import nextId, {setPrefix} from "react-id-generator";
 
setPrefix("");
  
class Eleves extends Component {
    constructor (props) {
        super(props);
        this.state = {
            listEleve: [],
            listClass:[]
        };
    }

    componentDidMount() {
        this.AddClasse("6ème A");
        this.AddClasse("6ème B");
        this.AddEleve("Ramon", "Nicolas", "6ème A", "1984-04-27", "0102030405", "toto@toto.com");
        this.AddEleve("Falbuc", "Jean", "6ème A", "1984-04-27", "0102030405", "toto@toto.com");
        this.AddEleve("Trefont", "Lola", "6ème A", "1984-04-27", "0102030405", "toto@toto.com");
        this.AddEleve("Morfar", "Marie", "6ème A", "1984-04-27", "0102030405", "toto@toto.com");
        this.AddEleve("Lavoi", "Arnaud", "6ème B", "1984-04-27", "0102030405", "toto@toto.com");
    }

    closeAllModals() {
        document.getElementById("FormAjoutEleve").click();
        document.getElementById("FormAjoutClass").click();
        if (typeof document.getElementsByClassName("modal-backdrop")[0] !== 'undefined') document.getElementsByClassName("modal-backdrop")[0].remove()
    }

    AddClasse(nom){
        if(nom !== ''){
            this.setState(prevState => ({
                listClass: [...prevState.listClass, new Classe({nom : nom})],
            }));
            document.getElementById('formClasse').reset();
            this.closeAllModals();
        }
    }

    AddEleve(nom, prenom, classe, naissance,telephone, email, ident= nextId()){
        if(nom !== '' && prenom !== '' && classe !== '' && naissance !== '' && telephone !== '' && email !== ''){
            /*
            this.setState(prevState => ({
                listEleve : [...prevState.listEleve, new Eleve({nom : nom, prenom : prenom,  classe : classe, naissance : naissance, telephone : telephone, email : email, ident : ident})],
            }));
            */
            var listEleve = this.state.listEleve;
            listEleve[ident] = new Eleve({nom : nom, prenom : prenom,  classe : classe, naissance : naissance, telephone : telephone, email : email, ident : ident});
            this.setState({listEleve : listEleve});
            document.getElementById('formEleve').reset();
            this.closeAllModals();
        }
    }
    

    async removeEleve (ident) {
        /*
        this.setState({listEleve: this.state.listEleve.filter(function(eleve) {
            return eleve.ident !== ident 
        })});
        */
        var listEleve = this.state.listEleve;
        delete listEleve[ident];
        this.setState({listEleve : listEleve});
        return await Promise.resolve();

    }
    
    modifEleve (nom, prenom, classe, ident, naissance, telephone, email) {
        if(nom !== '' && prenom !== '' && classe !== '' && naissance !== '' && telephone !== '' && email !== '' && ident !== ''){
            this.removeEleve (ident).then(() => {
                this.AddEleve(nom, prenom, classe, naissance,telephone, email, ident);
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Gestion des classes</h1>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#FormAjoutClass">Ajouter une classe</button> 
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#FormAjoutEleve">Ajouter un élève</button>
                <div id="accordion" className="accordion">
                    {this.state.listClass.map((e, key) => {
                        return(
                            <ListEleve 
                                removeEleve={this.removeEleve.bind(this)} 
                                modifEleve={this.modifEleve.bind(this)}
                                state={this.state}
                                classe = {e.nom} 
                                key= {key}
                                className = {key}
                            />
                        )
                    })}
                    <Form 
                        state={this.state} 
                        AddEleve={this.AddEleve.bind(this)}
                        AddClasse =  {this.AddClasse.bind(this)} 
                        modifEleve = {this.modifEleve.bind(this)}
                    /> 
                </div>   
            </div>
        )
    }
    
}

  
export default Eleves