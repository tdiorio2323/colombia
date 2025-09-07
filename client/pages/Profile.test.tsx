import { render, screen, waitFor } from "@testing-library/react";
import ProfilePage from "./Profile";
import { supabase } from "@/lib/supabase";
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const mockProfiles = [
  { id: "1", username: "testuser1" },
  { id: "2", username: "testuser2" },
];

// Mock the Supabase client
jest.mock("@/lib/supabase", () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => Promise.resolve({ data: mockProfiles, error: null })),
    })),
  },
}));

const server = setupServer(
  rest.get('/api/profiles', (req, res, ctx) => {
    return res(ctx.json(mockProfiles))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("ProfilePage", () => {
  it("displays loading state initially", () => {
    render(<ProfilePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches and displays profiles successfully", async () => {
    render(<ProfilePage />);

    // Wait for the data to load
    await waitFor(() => {
      expect(screen.getByText("testuser1")).toBeInTheDocument();
      expect(screen.getByText("testuser2")).toBeInTheDocument();
    });
  });

  it("handles error when fetching profiles", async () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    (supabase.from as jest.Mock).mockImplementationOnce(() => ({
      select: jest.fn(() => Promise.resolve({ data: null, error: new Error("Failed to fetch") })),
    }));

    render(<ProfilePage />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Error fetching profiles:", new Error("Failed to fetch"));
    });
    consoleSpy.mockRestore();
  });
});
