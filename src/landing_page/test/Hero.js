import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extended-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", ()=>{
    Test("renders hero image", ()=>{
        render(<Hero />);
        const heroImage = screen.getByLabelText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
} )