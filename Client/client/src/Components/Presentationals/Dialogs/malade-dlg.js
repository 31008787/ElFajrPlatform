import React,{useState} from 'react'
import './malade-dlg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from './dialog'
import Button from '../Buttons/button';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteMalade from '../../../middleware/malade/DeleteMalade';
import archiveMalade from '../../../middleware/archive/AddMaladeToArchive'
import { getInputToday } from '../rdvs-list';

const MaladeDlg = ({
    onClose = f => f,
    onEdit = f => f,
    onPrint = f => f,
    toRdv = f => f,
    toPrestation = f => f,
    malade = {},
}) => {
    const [picIsShowed,setShowed]=useState(false)
    return <div className='malade-dlg'>
        <div className='photo-malade-container' style={{display: picIsShowed ? 'block':'none'}}>
            <div style={{height:'100%',width:'100%'}} onClick={e=> setShowed(false)}></div>
            <img className='photo-xl' src={"data:image/jpg;base64," + malade.photoIdentite } />
        </div>
        <Dialog type='sm' onClose={onClose}>
            <div className='malade-dlg-container container'>
                <div className='row justify-content-around'>
                    <div className='icon edit' onClick={onEdit}></div>
                    <div className='icon printer' onClick={onPrint}></div>
                    <div className='icon delete' onClick={e =>
                        confirmAlert({
                            title: 'Confirmer la supression',
                            message: 'Etes vous sure de supprimer ' + malade.nom + " " + malade.prenom + "?",
                            buttons: [
                                {
                                    label: 'Oui',
                                    onClick: () => {
                                        DeleteMalade(malade._id)
                                        onClose()
                                    }
                                },
                                {
                                    label: 'Non',
                                    onClick: null
                                }
                            ]
                        })
                    }></div>
                    <div className='icon archive' onClick={e => {
                        confirmAlert({
                            title: "Confirmer l'archive",
                            message: "Etes vous sure d'archiver" + malade.nom + " " + malade.prenom + "?",
                            buttons: [
                                {
                                    label: 'Mort(e)',
                                    onClick: () => {
                                        archiveMalade({
                                            id: malade._id,
                                            etat: 'mort',
                                            dateArchive: getInputToday()
                                        })
                                        onClose()
                                    }
                                },
                                {
                                    label: 'Guéri(e)',
                                    onClick: () => {
                                        archiveMalade({
                                            id: malade._id,
                                            etat: 'gueri',
                                            dateArchive: getInputToday()
                                        })
                                        onClose()
                                    }
                                },
                                {
                                    label: 'Annuler',
                                    onClick: null
                                },
                            ]
                        })
                    }}></div>
                </div>
                <div className='row justify-content-around'>
                    <div className='col-7 malade-dlg-header'>
                        <p className='malade-name'>{malade.nom + " " + malade.prenom}</p>
                        <p className='malade-adr'>{malade.adresse}</p>
                    </div>
                    <div className='col-auto photo' style={{ backgroundImage: "url(data:image/jpeg;base64," + malade.photoIdentite + ")" }} onClick={e => setShowed(true)}></div>
                    <div className="col-10 line"></div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-10 malade-field'>ID: <p>{malade._id}</p></div>
                    <div className='col-10 malade-field'>Date d'Adhesion: <p>{malade.dateAdhesion}</p></div>
                    <div className='col-10 malade-field'>Date de Naissance : <p>{malade.dateNaissance}</p></div>
                    <div className='col-10 malade-field'>Lieu de soin : <p>{malade.lieu}</p></div>
                    <div className='col-10 malade-field'>Situation Familiale: <p>{malade.situationFamilliale}</p></div>
                    {malade.situationFamilliale==='celibataire' ? null : 
                    <div className='col-10 malade-field'>Nombre d'Enfants: <p>{malade.nbEnfants ? malade.nbEnfants : 'Aucun'}</p></div>
                    }
                    <div className='col-10 malade-field'>Assuré(e): <p>{malade.assure ? "OUI" : "NON"}</p></div>
                    <div className='col-10 malade-field'>Adhérent(e): <p>{malade.adherent ? "OUI" : "NON"}</p></div>
                    <div className='col-10 malade-field'>Sexe: <p>{malade.sexe==='Female' ? 'Femme' : 'Homme'}</p></div>                    <div className='col-10 malade-field'>Fonction: <p>{malade.fonction}</p></div>
                    <div className='col-10 malade-field'>N° de telephone: <p>{malade.tel}</p></div>
                    <div className='col-10 malade-field'>Autre N° de telephone: <p>{malade.autreTel? malade.autreTel : "Aucun"}</p></div>
                    <div className='col-10 malade-field'>Type Cancer: <p>{malade.type}</p></div>
                </div>
                <div className='row justify-content-between align-items-center modifier-btn'>
                    <div className='col-auto'>
                        <Button onClick={toRdv}>RDV</Button>
                    </div>
                    <div className='col-auto'>
                        <Button onClick={toPrestation}>Préstations</Button>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
}

export default MaladeDlg