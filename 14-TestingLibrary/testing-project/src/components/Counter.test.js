import { render, screen } from "@testing-library/react"
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
        console.log(screen.getByText("+1").tagName)
    })
})
