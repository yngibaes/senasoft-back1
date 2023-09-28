import { Form, Formik } from "formik"; //Llamamos la API Formik, para hacer un formulario sin props y hacerlo más dinámico con el código.
import { Confirmacion } from "./context/tareascontexto"; //

function Formu(){ //Le damos nombre a la variable
const {datoRegistrarse}=Confirmacion() //La variable createTarea es defina y asignada del valor 
    return(
    <div>
       <Formik //Aquí ya se ponen los estados iniciales, aquí se ponen 
          initialValues={{
          nombre:"",
          apellido:"",
          tipo_documento:"",
          documento:"",
          email:"",
          contraseña:"",
          ciudad:"",
          direccion:"",
          ocupacion:""}}
            
          onSubmit={async (values,actions)=>{ //Este función enviará los datos al darle click al boton
            console.log(values)
            datoRegistrarse(values)
            actions.resetForm() //Resetea la información del form cuando se envíen los datos handleChange
          }}
        >

          {({handleChange,handleSummit,values,isSubmitting})=>( //handleChange actualiza el value, en este caso se toma del name. handleSummit es una ayuda a la función onSubmit en el caso de validar la data, actualizando los estados de los input. Values ayuda a darle valor a los input. isSubmitting es el estado del formulario, si es verdadero lo envía, si no error.
            <Form onSubmit={handleSummit}>
              <label >Nombre</label>
              <input required type="text" name="nombre" onChange={handleChange} value={values.nombre} />

              <label>Apellido</label>
              <input type="text" name="apellido" onChange={handleChange} value={values.apellido}/>


              <label>Tipo de Documento</label>
              <select name="tipo_documento" onChange={handleChange} value={values.tipo_documento}>
                  <option value="Cédula de Ciudadanía">CC</option>
                  <option value="Documento de identidad">TI</option>
                  <option value="Cédula de extranjería">CE</option>
                  <option value="Pasaporte">PB</option>
              </select>

              <label>Documento</label>
              <input type="text" name="documento" onChange={handleChange} value={values.documento}/>

              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} value={values.email}/>

              <label>Contraseña</label>
              <input type="password" name="contraseña" onChange={handleChange} value={values.contraseña}/>

              <label>Ciudad</label>
              <input type="text" name="ciudad" onChange={handleChange} value={values.ciudad}/>

              <label>Dirección</label>
              <input type="text" name="direccion" onChange={handleChange}value={values.direccion} />

              <label>Ocupación</label>
              <input type="text" name="ocupacion" onChange={handleChange}value={values.ocupacion} />

              <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando...": "Enviar"}</button> {/*El "disbaled" deshabilita condicionalmente el botón el valor de la variable isSubmitting. Ya en "isSubmmit" si es verdadero, el botón se desactivará, impidiendo más envíos hasta que el proceso de envío haya finalizado. Va a mostrar "Enviando..." indicando que el envío del formulario esta en curso, cuando ya este listo para enviar mostrará "Enviar".*/}
            </Form>
          )}
        </Formik>
    </div> 
  )
}
export default Formu