import './Button.css'

export default function Button({ click, text, isActive }) {
    return (
        <button onClick={click} className={isActive ? "header_button_active" : "header_button"}>{text}</button>
    )
}
