import useCalculadora from './useCalculadora'
import Pantalla from './Pantalla'
import Teclado from './Teclado'

export default function Calculadora() {
    const { pantalla, input } = useCalculadora()
    return (
        <div className='calculadora'>
        <Pantalla value={pantalla} />
        <Teclado onKey={input} />
        </div>
    )
}
