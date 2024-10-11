// src/components/Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../compentes/Header"; // Assurez-vous que le chemin est correct
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("Composant Header", () => {
  it("doit afficher le logo du site", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/logo/i)).toBeInTheDocument();
  });

  it('doit afficher le lien "Home" et pointer vers le chemin "/"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it('doit afficher le lien "login" et pointer vers le chemin "/login"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it('doit afficher le lien "sing in" et pointer vers le chemin "/singin"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const singInLink = screen.getByRole("link", { name: /sing in/i });
    expect(singInLink).toBeInTheDocument();
    expect(singInLink).toHaveAttribute("href", "/singin"); // Assurez-vous que le chemin est correct
  });

  it('doit afficher le lien "Test" et pointer vers le chemin "/test"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const testLink = screen.getByRole("link", { name: /test/i });
    expect(testLink).toBeInTheDocument();
    expect(testLink).toHaveAttribute("href", "/test"); // Assurez-vous que le chemin est correct
  });
});
