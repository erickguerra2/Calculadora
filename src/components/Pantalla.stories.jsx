import React from 'react'
import Pantalla from './Pantalla'

export default {
    title: 'Components/Pantalla',
    component: Pantalla,
    argTypes: {
        value: { control: 'text' },
    },
}

const Template = args => <Pantalla {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '12345',
}
