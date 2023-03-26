import { render, screen } from "@testing-library/react"
import Cards from "../components/Cards"
import axios from "axios"

import { images } from "../__mocks__/images"

describe('<Container />', () => { 
    it("Snapshot principal", () => {
        render(<Cards />)

        expect(screen.getByLabelText("imagenes")).toMatchSnapshot()
    })

    it("Snapshot card imagen", async() => {
        render(<Cards />)

        axios.get = jest.fn().mockResolvedValue({ data: images })
        const response = await screen.findAllByLabelText("img")

        //expect(response.length).toBe(10)
        expect(response).toHaveLength(10)
    })
})