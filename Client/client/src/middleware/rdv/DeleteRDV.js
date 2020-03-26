import axios from 'axios';

export default (data)=>{
    console.log (data)
    return axios ({
        method: "POST",
        data : data,
        url : "http://localhost:5200/deleteRdv",
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.data.type==="Err")
            throw new Error (res.data.message);
        else
            console.log (res.data);
    })
};