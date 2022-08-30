import React from "react";

function Testimonio(){
return(
    <div className='testimonio-container'>
        <img className='imagen-testimonio'
        src= {require('../imagenes/rust-in-peace.jpg')}
        alt="Rust in peace"/>
   <div className="texto-container">
<p className="nombre-album">Rust in peace</p>
<p className="nombre-banda">Megadeth</p>
<p className="descripcion">Rust in Peace es el cuarto álbum 
de estudio de la banda estadounidense de thrash metal Megadeth, publicado el 24 de septiembre de 1990. Producido por Mike Clink y Dave Mustaine, Rust in Peace marcó el debut del guitarrista Marty Friedman y el baterista Nick Menza, que reemplazaron respectivamente a Jeff Young y Chuck Behler en 1989. Dos sencillos fueron extraídos del álbum, «Hangar 18» y «Holy Wars... The Punishment Due», que son interpretados con regularidad en las actuaciones del grupo.</p>
   </div>
    </div>
)
}
export default Testimonio;