import { render } from "@testing-library/react"
import Counter from "./Counter"

describe("Probar el componente Counter", () => {
    it("Pruebas de que el titulo y el estado del componente Counter se renderizan correctamente", () => {
        const wrapper = render(<Counter />);
    
        // console.log(wrapper.getByText("Counter: 0").tagName);
    
        //ACTUAL
        expect(wrapper.getByText("Counter: 0").tagName).toBe("H2")
    })
    
    it("Prueba que 1 + 1 es 2 y no es 3", () => {
        expect(1 + 1).toBe(2)
        expect(1 + 1).not.toBe(3)
    })
})
