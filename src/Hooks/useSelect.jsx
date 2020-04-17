import React,{useState} from 'react';

const useSelect = (stateInicial,opciones) => {

    //state del custom hook
    const [state,actualizarState] = useState(stateInicial); 
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}

        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )
    //retornar lo que el user seleccione y tambien lo que se va a imprimir , o sea el selectNoticias
    return [state,SelectNoticias];
}
 
export default useSelect;