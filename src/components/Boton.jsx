export default function Boton({ label, onClick }) {
    return <button onClick={() => onClick(label)}>{label}</button>
}
