import { Component } from 'react'
import Eleve from './Eleve'

class ListEleve extends Component {
    static show;
    constructor(props){
        super(props);

        if(this.props.className === 0 ){
            this.show = ' show';
        }
        else this.show = '';
        
    } 

    render () {
        
        return (
            <div className="card">
                <div className="card-header" id={"heading" + this.props.className}>
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target={'#boite' + this.props.className} aria-expanded="true" aria-controls="collapseOne">
                        Classe : {this.props.classe}
                        </button>
                    </h5>
                </div>
                <div id={"boite"+ this.props.className} className={"collapse" + this.show} aria-labelledby={"heading" + this.props.className} data-parent="#accordion">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Prénom</td>
                                    <td>voir</td>
                                    <td>Modifier</td>
                                    <td>Supprimer</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.state.listEleve
                                    .filter((eleve) => {
                                        return this.props.classe === eleve.classe
                                        }
                                    )
                                    .map((eleve) => {
                                        return (<Eleve 
                                            key={eleve.ident} 
                                            ident = {eleve.ident} 
                                            nom={eleve.nom} 
                                            prenom={eleve.prenom} 
                                            telephone={eleve.telephone} 
                                            naissance={eleve.naissance} 
                                            email={eleve.email} 
                                            classe={eleve.classe} 
                                            state={this.props.state}
                                            removeEleve={this.props.removeEleve.bind(this)} 
                                            modifEleve={this.props.modifEleve.bind(this)}
                                        />)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


export default ListEleve;