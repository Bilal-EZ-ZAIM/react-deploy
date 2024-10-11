import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../compentes/Form"; 
import { describe, it, expect } from "vitest";

describe("Form Component", () => {
  it("should render the form fields correctly", () => {
    render(<Form />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/passwordIs/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  it("should display required field errors if fields are empty", async () => {
    render(<Form />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    
    fireEvent.click(submitButton);

    expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/age is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/country is required/i)).toBeInTheDocument();
  });

  it("should display 'passwords do not match' error if passwords are different", async () => {
    render(<Form />);

    fireEvent.input(screen.getByLabelText(/passwordIs/i), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText(/confirm password/i), {
      target: { value: "differentPassword" },
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // التحقق من وجود رسالة خطأ تطابق كلمة المرور
    expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();
  });

  it("should submit the form successfully with valid data", async () => {
    render(<Form />);

    // إدخال بيانات صحيحة
    fireEvent.input(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByLabelText(/age/i), {
      target: { value: 25 },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByLabelText(/passwordIs/i), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText(/confirm password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/country/i), {
      target: { value: "US" },
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // التأكد من عدم وجود رسائل أخطاء بعد تقديم البيانات الصحيحة
    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });
});
