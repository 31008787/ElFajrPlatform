import axios from 'axios';
import config from '../config';
import {toastr} from 'react-redux-toastr';

export default (data) => {
    return axios({
        method: "POST",
        data,
        url: config.URL+":"+ config.PORT+"/archive/get",
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err")
        toastr.error('Erreur', "Une Erreur a survenue. Veuillez Réessayez !")
        else{
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};