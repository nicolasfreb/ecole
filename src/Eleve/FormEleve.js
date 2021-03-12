import { Component } from 'react'

class FormEleve extends Component {
    static ident;
    static nom;
    static prenom;
    static telephone;
    static naissance;
    static email;
    static classe;

    constructor(props){
        super(props);

        this.ident = props.ident ;
        this.nom = props.nom;
        this.prenom = props.prenom;
        this.telephone = props.telephone;
        this.naissance = props.naissance;
        this.email = props.email;
        this.age = props.age;
        this.classe = props.classe;
        
    }
    getDate(date){
        const detail = date.split('-');
        return detail[2] + '/' + detail[1] + '/' + detail[0];
    }
    render() {
        return (
            <div>
                <div className="modal fade"  role="dialog"  id={"FormModifEleve" + this.ident} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modifier un élève</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="formEleveModif" noValidate>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="nom" className="form-control" id={"nomModif" + this.ident} placeholder="Entrer un nom" defaultValue={this.nom} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Prenom</label>
                                        <input type="prenom" className="form-control" id={"prenomModif" + this.ident} placeholder="Entrer un prénom" defaultValue={this.prenom} required/>
                                    </div>
                                    <div className="form-group">
                                            <label>Date de naissance</label>
                                            <input type="date" className="form-control" id={"naissanceModif" + this.ident}  placeholder="Entrer votre date de naissance" defaultValue={this.naissance} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Numéro de téléphone</label>
                                            <input type="tel"  className="form-control" id={"telephoneModif" + this.ident}  placeholder="Entrer votre numéro de téléphone" defaultValue={this.telephone} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Adresse Email</label>
                                            <input type="email" className="form-control" id={"emailModif" + this.ident}  placeholder="Entrer votre adresse email" defaultValue={this.email} required/>
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
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                                    var nom = document.getElementById('nomModif' + this.ident).value;
                                    var prenom = document.getElementById('prenomModif' + this.ident).value;
                                    var naissance = document.getElementById('naissanceModif' + this.ident).value;
                                    var telephone = document.getElementById('telephoneModif' + this.ident).value;
                                    var email = document.getElementById('emailModif' + this.ident).value;
                                    var classe = document.getElementById('classeModif' + this.ident).value;
                                    this.props.modifEleve(nom, prenom, classe, this.ident, naissance, telephone, email);
                                }}
                                > Modifier</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade"  role="dialog"  id={"VoirEleve" + this.ident} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="card-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 className="card-title"><b>{this.nom} {this.prenom}</b></h5>
                                <p className="card-text">Date de naissance : <b>{this.getDate(this.naissance)}</b></p>
                                <p className="card-text">Numéro de téléphone : <b>{this.telephone}</b></p>
                                <p className="card-text">Adresse email : <a href={"mailto: " + this.email}><b>{this.email}</b></a></p>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormEleve