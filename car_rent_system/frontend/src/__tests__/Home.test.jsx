import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import Home from '../pages/Home'

describe("Home component filtering and sorting", () => {
    test("should filter by price and sort by price high to low", async () => {
        render(<Home />)

        fireEvent.click(screen.getByLabelText(/Enable price range filter/i))

        const minInput = screen.getByPlaceholderText("Min price")
        const maxInput = screen.getByPlaceholderText("Max price")
        fireEvent.change(minInput, { target: { value: '15' } })
        fireEvent.change(maxInput, { target: { value: '100' } })

        fireEvent.change(screen.getByDisplayValue("Select the sorting"), {
            target: { value: "priceHighToLow" }
        })

        await waitFor(() => {
            const carCards = screen.getAllByTestId("car-card");
            expect(carCards[0]).toHaveTextContent("tesla");
            expect(carCards[0]).toHaveTextContent("100");

            expect(carCards[1]).toHaveTextContent("tesla");
            expect(carCards[1]).toHaveTextContent("20");
        });
    })

    test("should filter by brand 'bmw' only", async () => {
        render(<Home />)

        fireEvent.click(screen.getByLabelText(/Enable brand filter/i))

        const brandSelect = screen.getByDisplayValue("Select Brand")
        fireEvent.change(brandSelect, { target: { value: "bmw" } })

        await waitFor(() => {
            const carCards = screen.getAllByTestId('car-card');
            expect(carCards).toHaveLength(1)
            expect(within(carCards[0]).getByText(/bmw/i)).toBeInTheDocument()
        })
    })
})
