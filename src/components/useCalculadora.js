import { useState } from 'react'

export default function useCalculadora() {
  const [pantalla, setPantalla] = useState('0')
  const [buffer, setBuffer] = useState(null)
  const [op, setOp] = useState(null)
  const [overwrite, setOverwrite] = useState(false)

  const input = key => {
    if ('0123456789.'.includes(key)) {
      if (overwrite || pantalla === '0') {
        if (key === '.') {
          setPantalla('0.')
        } else {
          setPantalla(key)
        }
        setOverwrite(false)
      } else if (pantalla.length < 9 && !(key === '.' && pantalla.includes('.'))) {
        setPantalla(pantalla + key)
      }
    } else if ('+-*/%'.includes(key)) {
      calculate()
      setBuffer(parseFloat(pantalla))
      setOp(key)
      setOverwrite(true)
    } else if (key === '=') {
      calculate()
      setOp(null)
    } else if (key === '+/-') {
      if (pantalla.startsWith('-')) {
        setPantalla(pantalla.slice(1))
      } else if (pantalla.length < 9) {
        setPantalla('-' + pantalla)
      }
        }
    else if (key === 'AC') {
      setPantalla('0')
      setBuffer(null)
      setOp(null)
      setOverwrite(false)
    }
    }

    const calculate = () => {
    if (buffer !== null && op) {
        const current = parseFloat(pantalla)
        let result
        switch (op) {
            case '+': result = buffer + current; break
            case '-': result = buffer - current; break
            case '*': result = buffer * current; break
            case '/': result = buffer / current; break
            case '%': result = buffer % current; break
        }

        if (isNaN(result) || result < 0 || result > 999999999) {
            setPantalla('ERROR')
        } else {
            const str = result.toString().slice(0, 9)
            setPantalla(str)
        }
        setBuffer(null)
        setOverwrite(true)
        }
    }

    return { pantalla, input }
}
