import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

describe("Component Header", () => {
    test("should render Header component correctly in option Create Items" , () => {
        const route = '/';
        window.history.pushState({}, 'Test page', route)
        const { getByText } = render(<Router><Header/></Router>);
        expect(getByText("Create Items")).toBeDefined();
    })

    test("should render Header component correctly in option Create Bundle" , () => {
        const route = '/CreateBundle';
        window.history.pushState({}, 'Test page', route)
        const { getByText } = render(<Router><Header/></Router>);
        expect(getByText("Create Bundle")).toBeDefined();
    })

    test("should render Header component correctly in option Released Bundle" , () => {
        const route = '/ReleasedBundle';
        window.history.pushState({}, 'Test page', route)
        const { getByText } = render(<Router><Header/></Router>);
        expect(getByText("Released Bundles")).toBeDefined();
    })
});
