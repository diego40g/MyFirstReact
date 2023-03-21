import { render, screen } from "@testing-library/react"
import ButtonCounter from '../components/ButtonCounter'

describe('<ButtonCounter/>', () => { 
    //SPY fucntion mocks
    const action = jest.fn()
    it('Crea un button correctamente', () => {
        render(<ButtonCounter value={3} name={'aumentar'} action={action}/>)

        expect(screen.getByLabelText("aumentar")).toBeInTheDocument()
    })
})