import { useState } from 'react'
import './App.css'
import './index.css'
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";



export default function App() {

    const [currentPage, setCurrentPage] = useState('All cats');

    function handleClick(newState) {
        setCurrentPage(newState);
    }

  return (
      <>
        <Header currentPage={currentPage} handleClick={handleClick} />
        <Main currentPage={currentPage}/>
      </>
  )
}
