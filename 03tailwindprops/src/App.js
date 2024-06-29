import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {

 
  return (
   <>
    <h1 className='bg-green-400 text-center text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="achyut" btntext="click me" />    
    <Card username="yug" btntext="visit me"/>  


   </>
  );
}

export default App;
