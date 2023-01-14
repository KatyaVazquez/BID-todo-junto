
import './App.css';
import Mycomponent from './Componentes/Mycomponent';

const App= () => {
  return (
    
    <div className="App">
      <Mycomponent  lastName= "Done " firstName="Jane"  Age={45}  haircolor= "Hair color: Black"></Mycomponent>
     <Mycomponent  lastName= "Smith " firstName="John"  Age={88}  haircolor= "Hair color: Brown"></Mycomponent>
    </div>
  );
}

export default App;
