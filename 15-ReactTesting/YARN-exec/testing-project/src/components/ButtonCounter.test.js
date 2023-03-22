import { render, screen } from "@testing-library/react"
import ButtonCounter from '../components/ButtonCounter'

describe('<ButtonCounter/>', () => { 
    //SPY fucntion mocks
    const action = jest.fn()

    beforeEach(() => {
        render(<ButtonCounter value={3} name={'aumentar'} action={action}/>)
    })

    it('Crea un button correctamente', () => {
        expect(screen.getByLabelText("aumentar")).toBeInTheDocument()
    })

    it(("Snapshot crear un buttoncorrectamente"), () => {
        expect(screen.getByLabelText("aumentar")).toMatchSnapshot()
    })
})