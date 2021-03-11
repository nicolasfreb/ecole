import { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <div className="modal fade"  role="dialog"  id="FormAjoutEleve" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ajouter un élève</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="formEleve">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="nom" className="form-control" id="nom" placeholder="Entrer un nom"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Prenom</label>
                                        <input type="prenom" className="form-control" id="prenom" placeholder="Entrer un prénom" />
                                    </div>
                                    <div className="form-group">
                                        <label>Date de naissance</label>
                                        <input type="date" className="form-control" id="naissance"  placeholder="Entrer votre date de naissance" />
                                    </div>
                                    <div className="form-group">
                                        <label>Numéro de téléphone</label>
                                        <input type="telephone" className="form-control" id="telephone"  placeholder="Entrer votre numéro de téléphone" />
                                    </div>
                                    <div className="form-group">
                                        <label>Adresse Email</label>
                                        <input type="email" className="form-control" id="email"  placeholder="Entrer votre adresse email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Classe de l'élève</label>
                                        <select className="custom-select" id="classe">
                                            {this.props.state.listClass.map((e, key) => {
                                                return <option key={e.nom} value={e.nom}>{e.nom}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    var nom = document.getElementById('nom').value;
                                    var prenom = document.getElementById('prenom').value;
                                    var naissance = document.getElementById('naissance').value;
                                    var telephone = document.getElementById('telephone').value;
                                    var email = document.getElementById('email').value;
                                    var classe = document.getElementById('classe').value;
                                    this.props.AddEleve(nom, prenom, classe, naissance,telephone, email);
                                }}
                                > Ajouter un élève</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade"  role="dialog"  id="FormAjoutClass" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ajouter une classe</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="formClasse">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="nom" className="form-control" id="nomClass" placeholder="Entrer un nom" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            var nomClass = document.getElementById('nomClass').value;
                                            this.props.AddClasse(nomClass);
                                        }}
                                        > Ajouter une classe</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form