import React from 'react'
import Teclado from './Teclado'

export default {
    title: 'Components/Teclado',
    component: Teclado,
    argTypes: {
        keys: { control: 'array' }, 
        onKey: { action: 'key pressed' },
    },
}

const Template = ({ keys, onKey }) => <Teclado keys={keys} onKey={onKey} />

export const Default = Template.bind({})
Default.args = {
    keys: ['1', '2', '3', '+', '-', '*', '/'],
}
