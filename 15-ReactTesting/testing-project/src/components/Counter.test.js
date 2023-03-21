import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event";

describe("<Counter />", () => {
    render(<Counter />);
    
    //beforEach(() => {})

    afterEach(() => {
        userEvent.click(screen.getByLabelText("reset"))
    })

    it("Primer snapshot", () => {
        expect(screen.getByRole("counterRole")).toMatchSnapshot()
    })

    it("Pruebas de que el titulo y el estado del componente Counter se renderizan correctamente", () => {
        // console.log(wrapper.getByText("Counter: 0").tagName);
    
        //ACTUAL
        expect(screen.getByText("Counter: 0").tagName).toBe("H2");
    })
    
    it("Verificar que el click +1 aumente correctamente", () => {
        render(<Counter/>)
        //const btn = screen.getByText("+1")
        const btn = screen.getByLabelText("aumentar")

        fireEvent.click(btn)
        expect(screen.getByTestId("counter").textContent).toContain("Counter: 1");
    })

    it("Verificar que el click -1 aumente correctamente", () => {
        render(<Counter/>)
        const btn = screen.getByLabelText("disminuir")

        fireEvent.click(btn)
        expect(screen.getByRole("counterRole").textContent).toContain("Counter: -1");
    })

    it("Verificar que el click vuelve al valor inicial", () => {
        render(<Counter/>)

        userEvent.click(screen.getByLabelText("reset"))
        expect(screen.getByRole("counterRole").textContent).toContain("Counter: 0")
    })

    it("Simular que alguin esta usando la app", () => {
        render(<Counter/>)
        const btnAdd = screen.getByLabelText("aumentar")
        const btnDis = screen.getByLabelText("disminuir")
        
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);

        expect(screen.getByRole("counterRole").textContent).toContain("Counter: 7")

        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);
        fireEvent.click(btnDis);

        expect(screen.getByRole("counterRole").textContent).toContain("Counter: -7")
    })
})
