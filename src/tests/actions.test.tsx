import { render, screen } from "@testing-library/react";
import AuthLocalContext from "@/app/context/LocalContext";
import { HomeComp } from "@/app/ui/home";
import Home from "@/app/page";

// Mock de los componentes
jest.mock("@/app/context/LocalContext", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("@/app/ui/home", () => ({
  __esModule: true,
  HomeComp: jest.fn(() => <div>Home Component</div>),
}));

describe("Home component", () => {
  it("should render the Home component with AuthLocalContext and HomeComp", () => {
    render(<Home />);

    expect(screen.getByText("Home Component")).toBeInTheDocument();
  });
});
