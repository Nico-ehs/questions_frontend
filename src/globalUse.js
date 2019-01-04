

import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'



const BackendUrl = "http://localhost:3000/"



function postBackendData(route, data, confirmFn){
    return fetch(BackendUrl+route,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}


function patchBackendData(route, data, confirmFn){
    return fetch(BackendUrl+route,{
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}


function deleteBackendData(route, confirmFn){
    return fetch(BackendUrl+route,{
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        }
    }).then(res => res.json()).then(json => confirmFn(json));
}
