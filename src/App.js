
import './App.css';
import Aboutme from './component/Aboutme';
import NavSect from './component/NavSect';
import Stats from './component/Stats';

function App() {
  return (
    <>
    <NavSect />
    <main>
    <Aboutme />
    <hr className="my-6 border-t-2 border-gray-300 ml-[5rem] mr-[5rem]" />
    <Stats />
    </main>
    
    </>
      
      
    
  );
}

export default App;
