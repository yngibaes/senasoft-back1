import  axios from 'axios';

export const registrar=async(registro)=>{
    await axios.post('http://localhost:8000/formulario',registro)
}