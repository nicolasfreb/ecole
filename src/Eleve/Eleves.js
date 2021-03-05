import React, { Component } from 'react';
import './Style/Eleves.css'
import Eleve from './Eleve';
import Form from './Form';
import ListEleve from './ListEleve';
import Classe from './Classe';
  

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
        this.AddEleve("Ramon", "Nicolas", 15, "6ème A");
        this.AddEleve("Falbuc", "Jean", 14, "6ème A");
        this.AddEleve("Trefont", "Lola", 14, "6ème A");
        this.AddEleve("Morfar", "Marie", 15, "6ème A");
        this.AddEleve("Lavoi", "Arnaud", 15, "6ème B");
    }

    AddEleve(nom, prenom, age, classe){
        this.setState(prevState => ({
            listEleve: [...prevState.listEleve, new Eleve({nom : nom, prenom : prenom, age : age, classe : classe})],
        }));
        document.getElementById('formEleve').reset();
    }
    
    AddClasse(nom){
        this.setState(prevState => ({
            listClass: [...prevState.listClass, new Classe({nom : nom})],
        }));
        document.getElementById('formClasse').reset();
    }
    removeEleve (i) {
        this.setState({listEleve: this.state.listEleve.filter(function(eleve) {
            return eleve.ident !== i 
        })});
    }
    
    modifEleve (nom, prenom, age, classe, ident) {
        this.removeEleve (ident);
        this.AddEleve(nom, prenom, age, classe);
        document.getElementsByClassName("modal-backdrop")[0].remove(); 
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
                        AddEleve={this.AddEleve.bind(this) }
                        AddClasse =  {this.AddClasse.bind(this) } 
                    /> 
                </div>   
            </div>
        )
    }
    
}

  
export default Eleves