import Button from "../Button/Button.tsx";
import './Header.css'

export default function Header({currentPage, handleClick}) {

   return (
       <header>
           <div className={"button_container"}>
        <Button click={() => handleClick('All cats')} isActive={currentPage === 'All cats'} text={"Все котики"}/>
        <Button click={() => handleClick('Favourite cats')} isActive={currentPage === 'Favourite cats'} text={"Любимые котики"}/>
           </div>
    </header>
   )
}