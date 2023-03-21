import { render, screen } from "@testing-library/react"
import ButtonCounter from "./ButtonCounter"

test("Prueba de rendirizar button counter", () => {
    render(< ButtonCounter/>)

    expect(screen.getByText("1").tagName).toBe("BUTTON")
})