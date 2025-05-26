import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculadora'
import { describe, it, expect } from 'vitest'
import Calculadora from '../components/Calculadora'

describe('Calculator', () => {
    it('muestra ERROR si el resultado es negativo', () => {
        render(<Calculadora />)
        fireEvent.click(screen.getByText('2'))
        fireEvent.click(screen.getByText('-'))
        fireEvent.click(screen.getByText('5'))
        fireEvent.click(screen.getByText('='))
        expect(screen.getByText('ERROR')).toBeInTheDocument()
    })

    it('muestra ERROR si resultado es mayor a 999999999', () => {
        render(<Calculadora />)
        const maxNum = '999999999'
        maxNum.split('').forEach(d => fireEvent.click(screen.getByRole('button', { name: d })))
        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('='))
        expect(screen.getByText('ERROR')).toBeInTheDocument()
    })

    it('limita número con punto decimal a 9 caracteres', () => {
        render(<Calculadora />)
        const input = ['1','2','3','.','4','5','6','7','8','9']
        input.forEach(d => fireEvent.click(screen.getByText(d)))
        expect(screen.getByText('123.45678')).toBeInTheDocument()
        expect(screen.queryByText('123.456789')).not.toBeInTheDocument()
    })

    it('muestra resultado de división truncado a 9 caracteres', () => {
        render(<Calculadora />)
        fireEvent.click(screen.getByRole('button', { name: '2' }))
        fireEvent.click(screen.getByRole('button', { name: '2' }))
        fireEvent.click(screen.getByText('/'))
        fireEvent.click(screen.getByText('7'))
        fireEvent.click(screen.getByText('='))
        // El resultado esperado es ~3.142857142, truncado a 9 caracteres
        const result = screen.getByText((content) => content.startsWith('3.142857'))
        expect(result).toBeInTheDocument()
        expect(result.textContent.length).toBeLessThanOrEqual(9)
    })

    it('cambia el signo con +/- y respeta límite de 9 caracteres', () => {
        render(<Calculadora />)
        const input = ['1','2','3','4','5','6','7','8']
        input.forEach(d => fireEvent.click(screen.getByText(d)))
        fireEvent.click(screen.getByText('+/-'))
        expect(screen.getByText('-12345678')).toBeInTheDocument()
        expect(screen.queryByText('--12345678')).not.toBeInTheDocument()
    })
})
