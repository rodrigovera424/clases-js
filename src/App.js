// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import Avatar from './components/Avatar/Avatar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar';
import ClassCount from "./components/ClassCount/ClassCount";

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
 const onAdd =(quantity) => {
   console.log(quantity)

      
    }
  return (
    <div className="App">
   

      <NavBar />
      <br></br>
      <ItemListContainer greeting="Hola buen dia"/>

       <ItemCount initial={1} stock={20} onAdd={onAdd}/>
   
      <Avatar name="Rodrigo" age="28" country="Argentina">
        <button>Boton</button>
      </Avatar>
      <Avatar name="Santiago" age="25" country="Uruguay"> 
        Texto de prueba
      </Avatar>
     
      <ClassCount />
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
