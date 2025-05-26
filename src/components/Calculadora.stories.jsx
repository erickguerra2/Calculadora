import { within, userEvent } from '@storybook/testing-library'
import Calculadora from './Calculadora'

export default {
  title: 'Components/Calculadora',
  component: Calculadora,
}

export const InteraccionBasica = () => <Calculadora />

InteraccionBasica.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText('2'))
    await userEvent.click(canvas.getByText('+'))
    await userEvent.click(canvas.getByText('3'))
    await userEvent.click(canvas.getByText('='))
}
