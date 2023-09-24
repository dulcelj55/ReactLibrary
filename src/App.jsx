import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import { Routes, Route } from "react-router-dom";
import NewBook from "./Pages/NewBook";
import LightSwitch from "./Pages/Lightswitch";
import Library from "./Pages/Library";
import SingleBook from "./Pages/SingleBook";


function App() {
  const [lightIsOn, setLightIsOn]= useState(false)
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    let result = localStorage.getItem('books')
    console.log(result)
    if (result){
      setBooks(JSON.parse(result))
    }
  }, [] )
  return (
    <>
      <div id="app-container">
        <Sidebar lightIsOn={lightIsOn}/>
        <Routes>
          <Route path="/" element={<LightSwitch lightIsOn={lightIsOn} setLightIsOn={setLightIsOn} />} />
          <Route path="/new" element={<NewBook  books={books}  setBooks={setBooks}/>} />
          <Route path="/library" element={<Library books={books} setBookds={setBooks}/>} />
          <Route path="/single_book" element={<SingleBook books={books} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
