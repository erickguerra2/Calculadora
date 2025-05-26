import Boton from './Boton'

export default {
    title: 'Components/Boton',
    component: Boton,
    argTypes: {
        onClick: { action: 'clicked' },
        children: { control: 'text' },
    },
}

const Template = args => <Boton {...args} />

export const Default = Template.bind({})
Default.args = {
    children: '1',
}
