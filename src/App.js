import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
      <h1>Los mejores albumes de metal según yo</h1>
      <Testimonio
      album='Rust in peace'
      banda='Megadeth'
      imagen='rust'
      descripcion='Rust in Peace es el cuarto álbum de estudio 
      de la banda estadounidense de thrash metal Megadeth, 
      publicado el 24 de septiembre de 1990.
     Producido por Mike Clink y Dave Mustaine, 
      Rust in Peace marcó el debut del guitarrista 
      Marty Friedman y el baterista Nick Menza. 
      Dos sencillos fueron extraídos del álbum,
       «Hangar 18» y «Holy Wars... The Punishment Due», que son 
      interpretados con regularidad en las actuaciones del grupo.'/>
      <Testimonio
      album='Ride the lightning'
      banda='Metallica'
      imagen='ride'
      descripcion='Ride the Lightning es el segundo álbum de estudio del grupo musical estadounidense de thrash metal Metallica. Fue publicado el 27 de julio de 1984. Ride the Lightning fue certificado como álbum de oro por la RIAA el 5 de noviembre de 1987 y fue certificado disco de platino 5x el 9 de junio de 2003.2 El álbum es considerado como un álbum de thrash metal clásico por los fanes del grupo, críticos y miembros de Metallica y es considerado como uno de los mejores álbumes de metal de todos los tiempos.'/>
      <Testimonio
      album='The Black Album'
      banda='Metallica'
      imagen='black'
      descripcion='Conocido como The Black Album, es el quinto álbum de estudio del grupo musical estadounidense de thrash metal Metallica. Fue el primer álbum de estudio de Metallica producido por Bob Rock. Recibió elogios de la crítica y se convirtió en el álbum más vendido del grupo musical. El álbum contiene importantes éxitos del grupo como «Enter Sandman», «Sad but True», «The Unforgiven», «Wherever I May Roam» y «Nothing Else Matters».'/>
      </div>
     
    </div>
  );
}

export default App;
