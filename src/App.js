import React,{useState,createContext, useEffect} from 'react'
import Home from './Pages/Home/Home'
import './App.css';
import "./Common/Style/Mixin.scss"
import "./Common/Component/Style.scss"
import { currentScrollIndex } from './Pages/Home/HomeUtlis';

export const ScrollContext=createContext()

function App() {
const [scrolledTo, setscrolledTo] = useState(1)

const getCurrentScrollPosition = () =>{
  let setScrollIndex=currentScrollIndex()
  setscrolledTo(setScrollIndex)
  
}

useEffect(()=>{
  window.addEventListener("scroll",getCurrentScrollPosition)
  return(()=>{
    window.removeEventListener("scroll",getCurrentScrollPosition)
  })
})
  return (
    <div className="App">
      <ScrollContext.Provider value={{scrolledTo:scrolledTo, setscrolledTo:setscrolledTo}}>
       <Home/>
      </ScrollContext.Provider>
    </div>
  );
}

export default App;
