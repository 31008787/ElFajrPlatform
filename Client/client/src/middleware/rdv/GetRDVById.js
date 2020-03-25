import axios from 'axios';

export default (id)=>{
    return axios ({
        method: "POST",
        url : "http://localhost:5200/getRdv/"+id,
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.type==="Err")
            throw new Error (res.message);
        else
            console.log (res.rdv);
    })
};