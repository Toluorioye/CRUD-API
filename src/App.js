
import './App.css';
import Home from "./components/Home"
import Create from "./components/Create"
import Update from "./components/Update"
import Delete from "./components/Delete"
import View from "./components/View"
import {Routes, Route} from "react-router-dom"


function App() {
  
  // console.log(first)
   return(
   
    <div className="app">
      <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/create' element = {<Create/>}/>
     <Route path='/view/:id' element = {<View/>}/>
     <Route path='/update/:id' element = {<Update/>}/>
     <Route path='/delete/:id' element = {<Delete/>}/>
   </Routes>

     
      
    </div>
  );
}

export default App;
