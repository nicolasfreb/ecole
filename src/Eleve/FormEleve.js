import { Component } from 'react'

class FormEleve extends Component {static ident;
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
    render() {
        return (
            <div className="modal fade"  role="dialog"  id={"FormModifEleve" + this.ident} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modifier un élève</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="formEleveModif">
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="nom" className="form-control" id={"nomModif" + this.ident} placeholder="Entrer un nom" defaultValue={this.nom}/>
                                </div>
                                <div className="form-group">
                                    <label>Prenom</label>
                                    <input type="prenom" className="form-control" id={"prenomModif" + this.ident} placeholder="Entrer un prénom" defaultValue={this.prenom}/>
                                </div>
                
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" className="form-control" id={"ageModif" + this.ident}  placeholder="Entrer un age" defaultValue={this.age}/>
                                </div>
                                <div className="form-group">
                                    <label>Classe de l'élève</label>
                                    <select className="custom-select" id={"classeModif" + this.ident} defaultValue={this.classe}>
                                        {this.props.state.listClass.map((e, key) => {
                                            return <option key={e.nom} value={e.nom}>{e.nom}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                var nom = document.getElementById('nomModif' + this.ident).value;
                                var prenom = document.getElementById('prenomModif' + this.ident).value;
                                var age = document.getElementById('ageModif' + this.ident).value;
                                var classe = document.getElementById('classeModif' + this.ident).value;
                                this.props.modifEleve(nom, prenom, age, classe, this.props.ident)
                            }}
                            > Modifier</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormEleve