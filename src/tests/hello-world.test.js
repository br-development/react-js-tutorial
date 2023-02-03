import HelloWorld from '../components/HelloWorld'
import {render, screen, within} from "@testing-library/react";

import {MemoryRouter} from "react-router-dom";

describe('Assert Hello World composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <HelloWorld/>
            </MemoryRouter>
        )
    })

    it("Should show Hello anon", () => {
        render(
            <MemoryRouter>
                <HelloWorld/>
            </MemoryRouter>
        )
        within(screen.getByTestId('container')).getByText('Hello World, I\'m Anon')
    })

    it("Should show username from query", () => {
        render(
            <MemoryRouter initialEntries={['/?name=test']}>
                <HelloWorld/>
            </MemoryRouter>
        )
        within(screen.getByTestId('container')).getByText('Hello World, I\'m test')
    })
})