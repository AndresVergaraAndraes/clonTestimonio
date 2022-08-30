import React from "react";
import '../css/Testimonio.css'
function Testimonio({imagen,album,banda,descripcion}){
return(
    <div className='testimonio-container'>
        <img className='imagen-testimonio'
        src= {require(`../imagenes/album-${imagen}.jpg`)}
        alt="Rust in peace"/>
   <div className="texto-container">
<p className="nombre-album"><strong>{album}</strong></p>
<p className="nombre-banda">{banda}</p>
<p className="descripcion">{descripcion}</p>
   </div>
    </div>
)
}
export default Testimonio;