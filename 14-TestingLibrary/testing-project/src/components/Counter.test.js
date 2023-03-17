import { render } from "@testing-library/react"
import Counter from "./Counter"

test("Pruebas al componente Counter", () => {
    const wrapper = render(<Counter />);

    // console.log(wrapper.getByText("Counter: 0").tagName);

    //ACTUAL
    expect(wrapper.getByText("Counter: 0").tagName).toBe("H2")
})