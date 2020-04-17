import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from  './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
    //definir la categoria y noticias
    const [categoria,guardarCategoria] = useState('');
    const [noticias,guardarNoticias] = useState([]);
    //como dependencia categoria,de esa forma cuando cambie se va a ejecutar
    useEffect(()=>{
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=c867ee3b18874f9fa926981b010744ad`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
      }
      consultarAPI();
    },[categoria])
   

  return (
    <Fragment>
      <Header titulo='Kudos noticias'/>
      <div className="container white">
      <Formulario
      guardarCategoria={guardarCategoria}
      />
      <ListadoNoticias
      noticias = {noticias}
      />
      </div>
    </Fragment>
  );
}


export default App;
