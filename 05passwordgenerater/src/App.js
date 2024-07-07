import logo from './logo.svg';
import './App.css';
import {useState,useCallback,useEffect,useRef} from 'react'

function App() {
const [length,setLength]=useState(8)
const [numberAllowed,setNumberAloowed]=useState(false);
const [charAlloewed,setCharAllowed] = useState(false);
const [Password,setPassword] =useState("")

const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass=""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str += "0123456789"
if(charAlloewed) str += "!@#$%^&*()_+-{}[]~`"

for (let i=1;i<=length;i++){
  let char = Math.floor(Math.random() * str.length + 1)

  pass += str.charAt(char)
} 


setPassword(pass)


},[length,charAlloewed,setPassword,numberAllowed])

const copyPassswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,3);
  window.navigator.clipboard.writeText(Password)
}, [Password])

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAlloewed,passwordGenerator])

return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
   <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4" >
      <input type="text"
      value={Password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly

        ref ={passwordRef}
      />
      <button onClick={copyPassswordToClipboard} className='outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0 text-center' >
copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2 '> </div>
    <div className='flex items-center  gap-x-1 '> 
    <input type="range" min={6} max={100} value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
    />

    <label >Length:{length}</label>
   
   <div className="flex items-center gap-x-1">
    <input 
    type="checkbox"  
    defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=>
      {
        setNumberAloowed((prev)=>!prev);
      }}
    />
     <label htmlFor='numberInput'>Number</label>
    </div>

    <div className="flex items-center gap-x-1">
    <input 
    type="checkbox"  
    defaultChecked={charAlloewed}
      id="characterInput"
      onChange={()=>
      {
        setCharAllowed((prev)=>!prev);
      }}
    />
     <label htmlFor='characterInput'>Characters</label>
    </div>
    </div>
   </div>
   </>
    );
}

export default App;
