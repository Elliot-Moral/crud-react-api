import axios from "axios";
import { useState } from "react";

function useCrud(pacth){

    const [response, setResponse ] = useState();
    
    const BASE_URL = "http://users-crud.academlo.tech/"

    //GET
    function getApi(){
        const url = `${BASE_URL}${pacth}`;  
        console.log(url);
        axios.get(url)
        .then(res=> setResponse(res.data))
        .catch(err => console.log(err));
    }


    //POST - create nuevo registro.
    function postApi(data){

        const url = `${BASE_URL}${pacth}`; 
 
        axios.post(url, data)
        .then(res=> {
            console.log(res.data)

            //expreat opereiatos.
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err));
    }

    // const num = [1,2,3,4,5]
    // console.log(...num, 'hola')
    
    //DELETE
    function deleteApi(id){

        const url = `${BASE_URL}${pacth}${id}`;  

        axios.delete(url)
        .then(res=> {
            console.log(res.data)
            //filter necesita retornar segun la CONDICION Y RETORNA UN NUEVO ARREGLO
            //filter(elem => elem > 5) ejemplo.
            setResponse(response.filter(elem => id !== elem.id))
        })
        .catch(err => console.log(err));
    }
  
    //UPDATE
    function updateApi(id, data){
        const url = `${BASE_URL}${pacth}${id}/`;  

        axios.put(url, data)
        .then(res=> {
            console.log(res.data)
            setResponse(response.map(e => e.id === id ? res.data : e))
        })
        .catch(err => console.log(err));
    }
    
    return [response, getApi, postApi, deleteApi, updateApi];

}

export default useCrud