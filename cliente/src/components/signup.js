import React from "react";
import "./style/signup.css";
import axios from "axios";

class Signup extends React.Component{
   state={
      nombre: '',
      apellido: '',
      tipo_documento: '',
      documento: '',
      email: '',
      contraseña: '',
      ciudad: '',
      direccion: '',
      ocupacion: ''
    };
      cambios=e=>{
         this.setState({
            [e.target.name]:e.target.value
         })
      }
      enviar=e=>{
         e.preventDefault()
         console.log(this.state)
      }
      
    render (){
      const add = () => {
         const data = {
           nombre: this.state.nombre,
           apellido: this.state.apellido,
           tipo_documento: this.state.tipo_documento,
           documento: this.state.documento,
           email: this.state.email,
           contraseña: this.state.contraseña,
           ciudad: this.state.ciudad,
           direccion: this.state.direccion,
           ocupacion: this.state.ocupacion
         };
       
         axios.post("http://localhost:3009/signup", data)
           .then(() => {
             console.log("si mi socia, si me estoy enviando");
           })
           .catch((err) => {
             alert("error");
           });
       };
       
        return (
         <div className="body">
             <div className="container">
               <h1 className="tittle">Registrarse</h1>
                  <div className="content">
                     <form onSubmit={this.enviar}>
                        <div className="user-details">
                           <div className="input-box">
                              <label>Inserte su nombre:
                              <input placeholder="Ana" type="text" name="nombre" required
                                 onChange={this.cambios}
                                 value={this.state.nombre}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su apellido:
                              <input placeholder="Amaya" type="text" name="apellido" required
                                 onChange={this.cambios}
                                 value={this.state.apellido}/></label>
                           </div>
                           <div className="input-box">
                           <label>Tipo de Documento
                            <select name="tipo_documento" onChange={this.cambios} value={this.state.tipo_documento} >
                                <option value="Cédula de Ciudadanía"  selected>CC</option>
                                <option value="Documento de identidad" >TI</option>
                                <option value="Cédula de extranjería" >CE</option>
                                <option value="Pasaporte">PB</option>
                            </select></label>
                            </div>
                            <div className="input-box">
                            <label>Documento
                            <input type="text" name="documento" onChange={this.cambios} value={this.state.documento}/></label>
                            </div>
                            <div className="input-box">
                            <label>Email
                                <input type="email" name="email" onChange={this.cambios} value={this.state.email}/></label>
                           </div>
                            <div className="input-box">
                              <label>Inserte su contraseña:
                              <input placeholder="xxxxxxxx" type="password" name="contraseña" required
                                 onChange={this.cambios}
                                 value={this.state.contraseña}/></label>
                           </div>
                           <div className="input-box">
                           <label>Inserte su ciudad:
                            <input type="text" name="ciudad" onChange={this.cambios} value={this.state.ciudad}/></label>
                           </div>
                           <div className="input-box">
                           <label>inserte su dirección
                            <input type="text" name="dirrecion" onChange={this.cambios} value={this.state.dirrecion}/></label>
                           </div>
                           <div className="input-box">
                           <label>Inserte su ocupación:
                                <input type="text" name="ocupacion" onChange={this.cambios} value={this.state.ocupacion}/></label>
                           </div>

                              <div className="button">
                                    <button onClick={add} className="linkbutton">Iniciar sesión</button>
                              </div>
                        </div>
                     </form>
                </div>
             </div>
         </div>
    )}
};
export default Signup