import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe("<Counter />", () => {
    it("Pruebas de que el titulo y el estado del componente Counter se renderizan correctamente", () => {
        render(<Counter />);
    
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
})
