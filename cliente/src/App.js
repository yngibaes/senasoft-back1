import { Route, Routes } from "react-router-dom"; //Importamos las rutero
import Formulario from "./components/pages/page_formulario.js"; //Importamos la page de Formulario para rutarla
import { Tcontext } from "./components/context/tareascontexto.js"; //Importamos el contexto para darselo a toda la App

function App() {
  return (
    <Tcontext>
        <Routes>
          <Route path="/formulario" Component={Formulario}/>
        </Routes>
    </Tcontext>
  );
}
export default App