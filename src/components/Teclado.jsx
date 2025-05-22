const keys = [
    'AC','+/-','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '0','.','=',
]

export default function Teclado({ onKey }) {
    return (
        <div>
        {keys.map(k => (
            <button key={k} className={k === '=' ? 'equal-button' : ''} onClick={() => onKey(k)} > {k}</button>
        )
        )}
        </div>
    )
}

