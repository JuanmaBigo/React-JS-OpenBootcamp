import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

import ContactComponent from './Ejercicios/Ejercicios-1-2-3/contact';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import AllCycles from './hooks/Lifecycle/AllCycles';
import Clock from './Ejercicios/Ejercicios-4-5-6/functionalComponent';
import ClockClass from './Ejercicios/Ejercicios-4-5-6/classComponent';
import Father from './components/container/father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="JUAN"></Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Juan"></GreetingF> */}


        {/* Componente de contactos ejercicio-1-2-3 */}
        {/* <ContactComponent></ContactComponent> */}

        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre= 'Juan'> */}
        {/* Todo lo que hay aqui, es tratado como props.children */}
        {/* <h3>Contenido del props.children</h3>
          <h5>asdf</h5>
          <h3>asdf</h3>
          
        </Ejemplo4> */}
        {/* <GreetingStyled name = "Juan"></GreetingStyled> */}
        
        {/* <AllCycles></AllCycles>  */}
        {/* <Clock></Clock> */}
        {/* <ClockClass></ClockClass> */}

        {/* <GreetingStyled name = "Juan"></GreetingStyled> */}
      
      {/* </header> */}


      {/* Gestion de eventos */}
      {/* <Father></Father> */}
      
      {/* Componente de listado de tareas */}
      <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
