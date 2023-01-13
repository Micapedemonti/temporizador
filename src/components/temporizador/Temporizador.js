import './Temporizador.css'
import { useState,useEffect } from 'react'

const Temporizador = () =>{
// cuantos timepo quiero esperar
const [segundos, setSegundos] = useState(null);
//cuantos segundos han pasado
const [pasaronSegundos,setPasaronSegundos] =useState(0);

useEffect (function(){
    if (segundos === null) return;
    //segundos tiene un valor 
setPasaronSegundos(0);    

let intervalo = setInterval(function () {
    
    setPasaronSegundos((pasaronSegundos) => pasaronSegundos + 1)
},1000)

return () =>{
    clearInterval(intervalo);
}

},[segundos])

const parseForm = (ev) =>{
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setSegundos(parseInt(seconds))
}

   if (pasaronSegundos >= segundos && segundos !== null){
    return(
        <>
        <p>Termino el conteo</p>
        <button onClick={()=>setSegundos (null)}>Reiniciar </button>
        </>
    )
   }

//si el valor que ingresamos para partir el conteo es diferente a null entonces retornaremos el conteo   

    if (segundos !==null){
        return (
            <p>Soy un conteo hasta el {segundos} y han transcurrido {pasaronSegundos}</p>
        )
    }



    return (
        <div>
       <p>¿Cuantos segundos quieres contar?</p>
       <form action='#' onSubmit={ev => parseForm (ev)}>
        <input type="number" name ="" id="seconds"/>
        <button>Iniciar</button>
       </form>
        </div>
    )
}

export default Temporizador