import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

  

    const OPCIONES = [
        //value: nombre que lee la api   label: nombre que ve el user
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label:'Entretenimiento'},
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnologia'}

    ]


//utilizar custom hooks,extraer categoria/extraer elemento interfaz, puedes nombrar como desees/le pasamos la categoria general por defecto
const [categoria,SelectNoticias] = useSelect('general',OPCIONES);
//cuando el user le de submit, pasar categoria al app.js
const buscarNoticias = e =>{
    e.preventDefault();

    guardarCategoria(categoria);
}


    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input 
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
  }
export default Formulario;